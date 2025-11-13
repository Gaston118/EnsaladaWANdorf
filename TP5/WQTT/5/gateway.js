// Archivo: gateway.js
import mqtt from 'mqtt';
import fs from 'fs';       // Para escribir en archivos [cite: 67]
import readline from 'readline'; // Para leer comandos desde la terminal

// --- Tus datos de conexión ---
const BROKER_URL = 'mqtts://90754d4608644d9f893c6b81024a787b.s1.eu.hivemq.cloud';
const BROKER_PORT = 8883;
const USERNAME = 'nicolas-comdatos';
const PASSWORD = 'Comdatos5';

const SENSOR_TOPIC_SUB = 'lan/+/sensor/+';   // Wildcard para suscribirse a todo
const CONTROL_TOPIC_PUB = 'lan/sensores/control'; // Topic para publicar comandos
const FILENAME = 'sensor_data.csv';

// --- Prepara el archivo CSV ---
// Escribe las cabeceras si el archivo no existe
if (!fs.existsSync(FILENAME)) {
  fs.writeFileSync(FILENAME, 'Timestamp,Topic,Valor\n');
}

const client = mqtt.connect(BROKER_URL, {
  port: BROKER_PORT,
  username: USERNAME,
  password: PASSWORD,
  clientId: 'gateway-central' // ID único
});

client.on('connect', () => {
  console.log('✅ Gateway conectado.');
  
  // Se suscribe a todos los topics de sensores
  client.subscribe(SENSOR_TOPIC_SUB, (err) => {
    if (!err) {
      console.log(`Suscrito a [${SENSOR_TOPIC_SUB}]`);
      console.log('Esperando datos de sensores...');
    }
  });
});

// --- 1. Parte: Guardar datos ---
client.on('message', (topic, message) => {
  // Asegurarse de que es un mensaje de sensor (y no un comando que se auto-recibió)
  if (topic.startsWith('lan/')) {
    const valor = message.toString();
    const timestamp = new Date().toISOString();
    const lineaCSV = `${timestamp},${topic},${valor}\n`;
    
    // Agrega la línea al CSV [cite: 67]
    fs.appendFile(FILENAME, lineaCSV, (err) => {
      if (err) {
        console.error('Error al guardar en CSV:', err);
      } else {
        console.log(`[DATO GUARDADO] ${topic}: ${valor}`);
      }
    });
  }
});

client.on('error', (err) => {
  console.error('Error de conexión:', err);
});

// --- 2. Parte: Leer comandos de la terminal ---
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\n--- CONTROL DE SENSORES ---');
console.log('Escribe "comenzar" o "apagar" y presiona Enter para enviar el comando:');

rl.on('line', (input) => {
  const comando = input.trim().toLowerCase();
  
  if (comando === 'comenzar' || comando === 'apagar') {
    // Publica el comando 
    client.publish(CONTROL_TOPIC_PUB, comando, (err) => {
      if (!err) {
        console.log(`Comando "${comando}" enviado a [${CONTROL_TOPIC_PUB}]`);
      } else {
        console.error('Error al enviar comando:', err);
      }
    });
  } else {
    console.log('Comando no reconocido. Solo "comenzar" o "apagar".');
  }
});