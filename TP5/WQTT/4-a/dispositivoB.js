import mqtt from 'mqtt';

const BROKER_URL = 'mqtts://90754d4608644d9f893c6b81024a787b.s1.eu.hivemq.cloud';
const BROKER_PORT = 8883;
const USERNAME = 'nicolas-comdatos';
const PASSWORD = 'Comdatos5';

const client = mqtt.connect(BROKER_URL, {
  port: BROKER_PORT,
  username: USERNAME,
  password: PASSWORD,
});

client.on('connect', () => {
  console.log('¡Dispositivo B (Receptor) conectado y escuchando!');
  
  // --- LÓGICA DE ESTE CLIENTE ---
  // Se suscribe al topic donde 'A' va a publicar
  client.subscribe('lan/deviceA/status', (err) => {
    if (!err) {
      console.log('Suscrito a "lan/deviceA/status"');
    }
  });
});

client.on('message', (topic, message) => {
  console.log(`=== MENSAJE RECIBIDO ===`);
  console.log(`Topic: ${topic}`);
  console.log(`Mensaje: ${message.toString()}`);
  console.log(`========================`);
});

client.on('error', (err) => {
  console.error('Error de conexión:', err);
});