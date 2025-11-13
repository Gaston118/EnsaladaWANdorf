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
  console.log('✅ RECEPTOR 2 conectado y escuchando en "lan/broadcast/#"');
  
  // --- LÓGICA DE ESTE CLIENTE ---
  client.subscribe('lan/broadcast/#', (err) => {
    if (err) {
      console.error('Error al suscribir (Receptor 2):', err);
    }
  });
});

client.on('message', (topic, message) => {
  console.log(`\n=== 📥 Mensaje recibido en RECEPTOR 2 ===`);
  console.log(`   Topic: ${topic}`);
  console.log(`   Mensaje: ${message.toString()}`);
  console.log(`========================================`);
});

client.on('error', (err) => {
  console.error('Error de conexión (Receptor 2):', err);
});