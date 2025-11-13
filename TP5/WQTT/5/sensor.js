// Archivo: sensor.js
import mqtt from 'mqtt';

// --- Tus datos de conexión ---
const BROKER_URL = 'mqtts://90754d4608644d9f893c6b81024a787b.s1.eu.hivemq.cloud';
const BROKER_PORT = 8883;
const USERNAME = 'nicolas-comdatos';
const PASSWORD = 'Comdatos5';

// --- Lógica de argumentos para saber quién es este sensor ---
const sala = process.argv[2];
const tipoSensor = process.argv[3];

if (!sala || !tipoSensor) {
  console.error('Error: Debes especificar la sala y el tipo de sensor.');
  console.log('Ejemplo: node sensor.js sala1 temp');
  process.exit(1); // Sale del script si no hay argumentos
}

const SENSOR_TOPIC = `lan/${sala}/sensor/${tipoSensor}`; // Topic de publicación [cite: 50-53]
const CONTROL_TOPIC = 'lan/sensores/control';         // Topic de suscripción (control)

const client = mqtt.connect(BROKER_URL, {
  port: BROKER_PORT,
  username: USERNAME,
  password: PASSWORD,
  clientId: `sensor-${sala}-${tipoSensor}` // ID de cliente único
});

let simInterval = null; // Variable para guardar el ID del intervalo y poder detenerlo

// --- Función para simular datos ---
function simularYPublicar() {
  let valor;
  if (tipoSensor === 'temp') {
    valor = (Math.random() * 10 + 20).toFixed(2); // Temp. entre 20.00 y 30.00
  } else if (tipoSensor === 'hum') {
    valor = (Math.random() * 30 + 50).toFixed(2); // Hum. entre 50.00 y 80.00
  } else {
    valor = (Math.random() * 100).toFixed(2);
  }
  
  client.publish(SENSOR_TOPIC, valor.toString(), (err) => {
    if (!err) {
      console.log(`[${SENSOR_TOPIC}] Dato enviado: ${valor}`);
    }
  });
}

client.on('connect', () => {
  console.log(`✅ Sensor [${SENSOR_TOPIC}] conectado y listo.`);
  
  // Se suscribe al topic de control para recibir órdenes
  client.subscribe(CONTROL_TOPIC, (err) => {
    if (!err) {
      console.log(`Suscrito a [${CONTROL_TOPIC}] para recibir comandos.`);
    }
  });
});

client.on('message', (topic, message) => {
  const comando = message.toString();
  
  // Revisa si el mensaje es para él (en el topic de control)
  if (topic === CONTROL_TOPIC) {
    console.log(`\n=== ❗️ COMANDO RECIBIDO: ${comando} ===`);
    
    if (comando === 'comenzar' && !simInterval) {
      // Inicia la simulación [cite: 56, 59]
      console.log('Iniciando simulación...');
      simInterval = setInterval(simularYPublicar, 3000); // Publica cada 3 seg
    } else if (comando === 'apagar') {
      // Detiene la simulación
      if (simInterval) {
        clearInterval(simInterval);
        simInterval = null;
        console.log('Simulación detenida.');
      }
    }
  }
});

client.on('error', (err) => {
  console.error('Error de conexión:', err);
});