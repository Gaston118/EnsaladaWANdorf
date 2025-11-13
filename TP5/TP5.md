# Trabajo Practico N4

- **Gastón E. Capdevila**
- **Nicolas Seia**
- **Ignacio Ledesma**
- **Tomás Viberti**  
 
## Ensalada WANdorf

**Facultad de ciencias Exactas Fisicas y Naturales**  

**Comunicaciones de datos**

**Profesores:**
- SANTIAGO MARTIN HENN
- OLIVA CUNEO FACUNDO NICOLAS 

**24/10/2025**   

---

### **Información de los autores**
 
- gaston.capdevila@mi.unc.edu.ar
- nicolas.seia@unc.edu.ar
- iledesma@mi.unc.edu.ar
- tomas.viberti@mi.unc.edu.ar

## **Resumen**

## **Introducción**

## **Desarrollo**

### **1) Resumir brevemente las características del protocolo MQTT. Incluir ventajas, desventajas y principales usos. Responder: ¿Qué es el patrón de diseño PubSub?.**

El transporte de telemetría de colas de mensajes, o MQTT, es un protocolo de comunicaciones diseñado para dispositivos del Internet de las cosas con una latencia extremadamente alta y un ancho de banda bajo restringido.

MQTT es un protocolo de mensajería sencillo y ligero que se utiliza para establecer la comunicación entre varios dispositivos. Es un protocolo basado en TCP que se basa en el modelo de publicación-suscripción. Este protocolo de comunicación es adecuado para transmitir datos entre dispositivos con recursos limitados que tienen un ancho de banda reducido y bajos requisitos de energía. Por lo tanto, este protocolo de mensajería se utiliza ampliamente para la comunicación en el marco del IoT.

Los clientes publican mensajes sobre diferentes temas a los corredores. El corredor es el servidor central que recibe estos mensajes y los filtra en función de sus temas. A continuación, envía estos mensajes a los respectivos clientes que se han suscrito a esos diferentes temas. El núcleo de cualquier protocolo de publicación/suscripción es el bróker MQTT. Un bróker puede gestionar hasta miles de clientes MQTT conectados simultáneamente, dependiendo de cómo se implemente. Todas las comunicaciones deben ser recibidas por el bróker, que luego las clasificará, determinará quién se ha suscrito a cada una y entregará los mensajes a los clientes que se han suscrito. Todas las sesiones persistentes de los clientes, incluidos los mensajes perdidos y las suscripciones, también son conservadas por el bróker.

<img width="712" height="477" alt="image" src="https://github.com/user-attachments/assets/a9befa54-c50f-459b-9038-4ad883cb3250" />


Pub/Sub (o Publish/Subscribe) es un patrón de diseño arquitectónico utilizado en sistemas distribuidos para la comunicación asíncrona entre diferentes componentes o servicios. Aunque Publish/Subscribe se basa en patrones de diseño anteriores, como las colas de mensajes y los corredores de eventos, es más flexible y escalable. La clave de esto es el hecho de que Pub/Sub permite el movimiento de mensajes entre diferentes componentes del sistema sin que los componentes sean conscientes de la identidad de los demás (están desacoplados).

La naturaleza desacoplada del patrón Pub/Sub lo convierte en un buen candidato para gobernar la arquitectura de sistemas dinámicamente escalables. Pub/Sub permite gestionar la escala sin sobrecargar la lógica del programa de los componentes del sistema.

Pub/Sub proporciona un marco para el intercambio de mensajes entre editores (componentes que crean y envían mensajes) y suscriptores (componentes que reciben y consumen mensajes). Tenga en cuenta que los editores no envían mensajes a suscriptores específicos de forma punto a punto. En su lugar, se utiliza un intermediario, un agente de mensajes Pub/Sub, que agrupa los mensajes en entidades denominadas canales (o temas).

<img width="829" height="480" alt="image" src="https://github.com/user-attachments/assets/189b4244-f5aa-4b9b-8935-5079ef08a819" />


### **2) Instalar/desplegar y ejecutar un broker MQTT. Por ejemplo, en HiveMQ, tendremos un dashboard con parámetros de red para conectarnos:**

### **3) Verificar que el broker funciona, suscribiendote con un cliente (pueden encontrar tutoriales para utilizar Java, python u otros lenguajes para este propósito)**

### **4) Una vez que tenemos nuestra arquitectura funcionando:**

#### **a) Simular una comunicación directa entre dos nodos de una red local. Para ello crear dos clientes:**
 - Dispositivo A, que publica en lan/deviceA/status, Dispositivo B se suscribe a ese tópico y muestra los mensajes recibidos. Capturar y documentar resultados.

#### **b) Crear un tópico general lan/broadcast/#. Configurar al menos dos clientes para suscribirse a lan/broadcast/#. Desde un cliente “central”, publicar mensajes en lan/broadcast/all. Capturar y documentar resultados. Con esto simularemos broadcasting en esta pequeña LAN.**

### **5) Implementar una jerarquía de tópicos como:**
- lan/sala1/sensor/temp
- lan/sala1/sensor/hum
- lan/sala2/sensor/temp
  
#### **a) Simular, en cada cliente, un sensor que genere datos (utiliza un generador de número aleatorios). Recolectar estos en una gateway/servidor suscrito a estos tópicos.**

#### **b) Ahora nuestro cliente “central” (ahora gateway) se suscribirá y recopilará los datos generados por los sensores en archivos locales (texto, CSV, serializado, o si te animás, en una base de datos).**

#### **c) Opcional: si te animás, investigá como plotear los datos (usando, por ejemplo, Grafana).**

#### **d) Mediante broadcasting deberemos poder enviar al menos dos mensajes de comando a los clientes (ahora sensores): comenzar la simulación de datos y apagarse.**

#### **e) Capturar un paquete usando un sniffer y realizar un análisis simple de la composición del mismo.**

### **6) Responder:**

#### **a) ¿Sobre qué protocolos de capa de transporte están trabajando en esta actividad?**

#### **b) ¿Qué pueden decir sobre la garantía de Integridad, Confidencialidad y Disponibilidad en esta arquitectura?**

#### **c) ¿Qué rol juegan los niveles de QoS en la fiabilidad de los mensajes?**

#### **d) ¿Qué ventajas ofrece el modelo pub/sub frente al modelo cliente-servidor?**

#### **e) ¿Qué limitaciones tiene MQTT respecto a una red LAN real?**

#### **f) ¿Qué implicaciones tiene depender de un broker central para la comunicación?**

## **Bibliografia**

- Cisco Networking Academy. (2023). Introduction to Networks (Version 7.0) – Course Booklet. Cisco Press. (Disponible en: https://www.netacad.com/courses/ccna-introduction-networks)
- [Patron Pub/Sub](https://ably.com/topic/pub-sub)
- [MQTT](https://www.geeksforgeeks.org/computer-networks/introduction-of-message-queue-telemetry-transport-protocol-mqtt/)
