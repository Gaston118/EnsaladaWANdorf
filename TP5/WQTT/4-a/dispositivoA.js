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
  console.log('¡Dispositivo A (Emisor) conectado!');
  
  // --- LÓGICA DE ESTE CLIENTE ---
  const mensaje = 'Este es el mensaje de prueba desde Dispositivo A';
  
  // Publica en el topic
  client.publish('lan/deviceA/status', mensaje, (err) => {
    if (!err) {
      console.log(`Mensaje enviado: "${mensaje}"`);

      // Una vez enviado, nos desconectamos
      client.end();
      console.log('Desconectado.');
    } else {
      console.error('Error al publicar:', err);
      client.end();
    }
  });
});

client.on('error', (err) => {
  console.error('Error de conexión:', err);
});