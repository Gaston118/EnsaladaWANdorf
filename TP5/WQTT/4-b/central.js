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
  console.log('✅ CLIENTE CENTRAL conectado.');
  
  // --- LÓGICA DE ESTE CLIENTE ---
  const mensaje = 'Este es un mensaje de broadcast para todos los dispositivos';
  
  client.publish('lan/broadcast/all', mensaje, (err) => { // 
    if (!err) {
      console.log(`🚀 Mensaje de broadcast enviado a "lan/broadcast/all"`);
      client.end(); // 
      console.log('Desconectado.');
    } else {
      console.error('Error al publicar:', err);
      client.end();
    }
  });
});

client.on('error', (err) => {
  console.error('Error de conexión (Central):', err);
});