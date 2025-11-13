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

<img width="1851" height="844" alt="image" src="https://github.com/user-attachments/assets/c00a79c4-65fb-4f97-bd7a-28cb6ee79bae" />

### **3) Verificar que el broker funciona, suscribiendote con un cliente**

<img width="1859" height="913" alt="image" src="https://github.com/user-attachments/assets/634e8ec8-a265-4a9c-99fa-53aa35e5d8af" />

### **4) Una vez que tenemos nuestra arquitectura funcionando:**

#### **a) Simular una comunicación directa entre dos nodos de una red local. Para ello crear dos clientes:**
 - Dispositivo A, que publica en lan/deviceA/status, Dispositivo B se suscribe a ese tópico y muestra los mensajes recibidos. Capturar y documentar resultados.

<img width="812" height="533" alt="image" src="https://github.com/user-attachments/assets/659f56e8-1f99-4bcd-afc0-0836eba5f86f" />

<img width="806" height="399" alt="image" src="https://github.com/user-attachments/assets/e9e498e5-bafc-4d62-81b1-b4b0cf353d94" />

<img width="812" height="214" alt="image" src="https://github.com/user-attachments/assets/98749dd4-5d96-4484-99c1-38169d1703d0" />

#### **b) Crear un tópico general lan/broadcast/#. Configurar al menos dos clientes para suscribirse a lan/broadcast/#. Desde un cliente “central”, publicar mensajes en lan/broadcast/all. Capturar y documentar resultados. Con esto simularemos broadcasting en esta pequeña LAN.**

<img width="817" height="152" alt="image" src="https://github.com/user-attachments/assets/cf025e52-6a62-4190-a4c4-3aaec7155361" />

<img width="817" height="152" alt="image" src="https://github.com/user-attachments/assets/241387a1-88bc-4bbb-af51-f600e32d71bf" />

<img width="817" height="152" alt="image" src="https://github.com/user-attachments/assets/bfd12e82-bf81-4626-8c0d-45a9effa4a2b" />

<img width="817" height="181" alt="image" src="https://github.com/user-attachments/assets/cdc0d87a-6e96-4191-9c4e-d16a3969feea" />

<img width="817" height="181" alt="image" src="https://github.com/user-attachments/assets/aa1c362e-df50-4475-9219-f682a1400fc7" />

### **5) Implementar una jerarquía de tópicos como:**
- lan/sala1/sensor/temp
- lan/sala1/sensor/hum
- lan/sala2/sensor/temp
  
#### **a) Simular, en cada cliente, un sensor que genere datos (utiliza un generador de número aleatorios). Recolectar estos en una gateway/servidor suscrito a estos tópicos.**

<img width="817" height="181" alt="image" src="https://github.com/user-attachments/assets/a71ead3a-d6b2-47f3-8670-f0b3b2ec339c" />

<img width="805" height="128" alt="image" src="https://github.com/user-attachments/assets/6178b7c8-471e-4573-9176-a89754af3e29" />

<img width="805" height="128" alt="image" src="https://github.com/user-attachments/assets/78953d71-016a-41d7-a827-c92238e61897" />

<img width="805" height="128" alt="image" src="https://github.com/user-attachments/assets/a2d441bf-b336-4fef-b468-a31d1e59b027" />

#### **b) Ahora nuestro cliente “central” (ahora gateway) se suscribirá y recopilará los datos generados por los sensores en archivos locales.**

<img width="819" height="533" alt="image" src="https://github.com/user-attachments/assets/4378d44e-d1e1-4e4c-8536-f1442177277e" />

<img width="819" height="533" alt="image" src="https://github.com/user-attachments/assets/3ce27ab4-b657-4d66-9a12-79e9c87f0b59" />

<img width="819" height="533" alt="image" src="https://github.com/user-attachments/assets/70b79570-7dda-4baa-974e-8a2e6bf6c9c3" />

<img width="819" height="533" alt="image" src="https://github.com/user-attachments/assets/77c60fc5-2c16-47ee-92f5-974bd34b7177" />

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

