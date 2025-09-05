# Trabajo Practico N2

- **Gastón E. Capdevila**
- **Nicolas Seia**
- **Ignacio Ledesma**
- **Tomas Viberti**  
 
## Ensalada WANdorf

**Facultad de ciencias Exactas Fisicas y Naturales**  

**Comunicaciones de datos**

**Profesores:**
- SANTIAGO MARTIN HENN
- OLIVA CUNEO FACUNDO NICOLAS 

**15/8/2025**   

---

### Información de los autores
 
- gaston.capdevila@mi.unc.edu.ar
- nicolas.seia@unc.edu.ar
- iledesma@mi.unc.edu.ar
- tomas.viberti@mi.unc.edu.ar

## Resumen

Este trabajo práctico aborda conceptos fundamentales de la capa física y de la capa de enlace de datos del modelo OSI. 
En primer lugar, se repasa el efecto Doppler y su impacto en sistemas de comunicación inalámbrica, analizando los 
fenómenos de propagación de ondas en entornos móviles. Luego, se estudia el ruido e interferencia en los canales de 
transmisión, junto con métricas asociadas como la relación señal-ruido (SNR) y la tasa de error de bit (BER). 
Posteriormente, se examina la tecnología Ethernet y los medios de transmisión más utilizados (cables UTP directo y 
cruzado), así como la estructura de una trama Ethernet II. Finalmente, se utiliza el software Wireshark para realizar 
capturas de paquetes en red local y hacia direcciones públicas, permitiendo observar y analizar en detalle los 
encabezados Ethernet, IP e ICMP.


## Introducción

El presente trabajo se organiza en forma de cuestionario dividido en tres ejes temáticos principales. 
En el primero, se busca comprender fenómenos físicos como el efecto Doppler y la propagación de ondas, los cuales 
afectan directamente a las comunicaciones inalámbricas. En el segundo, se analiza la problemática del ruido e 
interferencia en los canales de transmisión, estableciendo la relación entre la SNR y la calidad de la señal recibida. 
En el tercero, se profundiza en la capa de enlace de datos a través del estudio de Ethernet y la captura de tramas 
mediante la herramienta Wireshark, con el objetivo de vincular la teoría con la práctica. 

El enfoque del trabajo es combinar la revisión teórica de conceptos ya vistos en la materia con la experimentación 
práctica mediante herramientas de análisis, reforzando así la comprensión de cómo funcionan realmente las 
comunicaciones de datos en un entorno real.

## Desarrollo 

### 1)

<img width="590" height="186" alt="image" src="https://github.com/user-attachments/assets/941da167-b492-447c-8958-2b6ab63d38a0" />

#### a)
La figura representa el "Efecto Doppler" aplicado a comunicaciones digitales. 
Este efecto se basa cambio en la frecuencia percibida de cualquier movimiento ondulatorio cuando el emisor, o foco de ondas, y el receptor, u observador, se desplazan uno respecto a otro.

- Caracteristicas principales:
  - Cambio de frecuencia percibida o aparente debido al movimiento.
  - La frecuencia va a depender de la velocidad relativa entre el emisor y el receptor.
  - Delicado en sistemas móviles, como barcos, aviones, etc.
 
#### b)
Con respecto al trabajo anterior, este fenómeno afecta a las transmisiones que se realizan mediante ondas, como la telefonía celular, los radares y los satélites. Esto se debe a que los sistemas u objetos involucrados en este efecto se encuentran en constante movimiento, 
lo que genera interferencia entre el emisor y el receptor, dificultando así obtener una comunicación clara y sin pérdidas.

Por otro lado, aquellas transmisiones que son más resilientes ante este fenómeno son las realizadas por fibra óptica o cable coaxial. Al transportarse en medios guiados y estáticos, el efecto Doppler no tiene ningún impacto.

#### c)
La razón principal de la obligatoriedad del uso del modo avión en los vuelos es que éstos pueden interferir con los sistemas de navegación y de control del vuelo, sobre todo durante el despegue y el aterrizaje.
Por otro lado, a grandes altitudes un teléfono encendido se comunica con muchas antenas al mismo tiempo, generando congestión en la red, lo cual no es lo mas importante pero afecta al entorno.

Con respecto al Efecto Doppler, no afecta directamente al efecto en sí, si no que lo más crítico son las interferencias y la gestión de la red, que son los posibles casos en el que un celular pueda afectar a la comuncación del avión.

### 2)

<img width="590" height="186" alt="image" src="https://github.com/user-attachments/assets/ec510245-ddf2-43b5-b5bf-d587efd3972b" />

#### a)
La figura muestra el fenómeno de ruido e interferencia en una señal electromagnética. Este describe como la onda original se ve alterada en su trayecto por una fuente externa de ruido, la que genera distorsión en la onda antes de llegar al receptor.

- Características principales:
  - Se introduce energía no deseada en el canal de comunicación.
  - El ruido puede introducirse desde fuentes naturales como artificiales.
  - Provoca que la señal original no llegue de manera limpia, lo cual es un problema a la hora de recuperar la información.
 
#### b)
Con respecto a las transmisiones mas afectadas tenemos aquellas que su medio es el espacio o el aire, como el Wi-Fi, enlaces satelitales, radio y TV por aire, telefonía celular entre otros. Al estar expuestas al ruido e interferencias electromagneticas. De estas, las señales más susceptibles son son aquellas que operan en **bandas de alta frecuencia (HF, del orden de GHz, como 5 GHz en Wi-Fi o satélites de 1–50 GHz)**, ya que son más sensibles a obstáculos y condiciones atmosféricas.  

Por otro lado, las transmisiones más resilientes suelen ser:  

- **Bandas de frecuencia baja (LF, MF)**: menos afectadas por el entorno, ya que atraviesan mejor los obstáculos.  
- **Técnicas de modulación como LoRa**: diseñadas específicamente para ser robustas frente a interferencias y ruido.  
- **Fibra óptica y coaxial**: al ser medios guiados, minimizan la exposición al ruido electromagnético externo. La primera es en un canal completamente guiado por el vidrio, inmune al ruido, mientras que el otro, esta más protegido que el aire, pero presenta pérdidas resistivas. Son las mas resilientes porque su medio de transmision no esta expuesto al medio abierto. 

#### c)
La SNR (Signal to Noise Ratio) se define como la proporción existente entre la potencia de salida de la señal que se transmite y la potencia del ruido que la corrompe. Se mide normalmente en decibelios (dB). Un SNR alto indica una señal clara respecto al ruido.

```
SNR = Pseñal / Pruido o en dB: 10log10(Pseñal / Pruido)
```
- Relación con BER (Bit Error Rate):
  - El BER mide la proporción de bits erróneos respecto al total de bits transmitidos.
  - Existe una relación directa: a mayor SNR, menor BER, porque una señal más limpia facilita que el receptor distinga correctamente los bits.
  - Si el SNR es bajo, el BER aumenta, ya que el ruido provoca más errores en la detección de los símbolos digitales.
 
### 3)
#### a)

Ethernet es la tecnología tradicional para conectar dispositivos en una red de área local (LAN) o una red de área amplia (WAN) por cable. Se basa en la transmisión de tramas con una estructura definida y ciertas características clave:

- **Topología estrella**: cada dispositivo se conecta a un switch o hub central.  
- **Acceso al medio mediante CSMA/CD** (Carrier Sense Multiple Access with Collision Detection): los dispositivos “escuchan” el medio antes de transmitir y, si ocurre una colisión, reintentan luego de un tiempo aleatorio.  
- **Duplex**: las primeras implementaciones soportaban half-duplex (transmisión en un sentido por vez), mientras que Ethernet actuales operan principalmente en full-duplex (transmisión y recepción simultánea).  
- **Evolución de velocidades**:  
  - Ethernet: 10 Mbps, primer estándar sobre cable UTP.  
  - Fast Ethernet: 100 Mbps, mejora de velocidad manteniendo compatibilidad con cableado UTP.  
  - Gigabit Ethernet: 1 Gbps, usa las 4 parejas de cable UTP y es full-duplex por defecto. Mayor eficiencia y soporte para grandes volumenes de datos.

Algunas ventajas de la tecnología Ethernet son:

- Costo relativamente bajo.
- Generalmente resistente al ruido.
- Velocidad y fiabilidad.
- Seguridad de los datos.
 
Una trama en Ethernet es la unidad básica de transmisión de datos en una red Ethernet. Es un bloque de información con una estructura definida que permite identificar el origen, el destino, el tipo de datos transportados y verificar si hubo errores en la transmisión. A continuación se explica brevemente la función de cada uno de los bloques de tramas Ethernet:
  
| Building block                       | Tamaño                               | Función                                                                                       |
|--------------------------------------|--------------------------------------|-----------------------------------------------------------------------------------------------|
| Preamble / Start frame delimiter (SFD) | 8 bytes                              | Sincronización de los receptores. Secuencia de bits que inidican el inicio de la trama                        |
| Destination address (MAC)            | 6 bytes                              | Dirección de hardware del adaptador de red de destino                                         |
| Source address (MAC)                 | 6 bytes                              | Dirección de hardware del adaptador de red de origen                                          |
| Tag                                  | 4 bytes                              | Etiqueta VLAN opcional para la integración en redes VLAN (IEEE 802.1q)                        |
| EtherType                                 | 2 bytes                              | Indica el protocolo de la capa superior (0x0800 = IPv4, 0x0806 = ARP)                                            |
| Length                               | 2 bytes                              | Longitud de la información sobre el registro                                                  |
| Destination service access point (DSAP) | 1 byte                             | Dirección individual del punto de acceso al servicio                                          |
| Source service access point (SSAP)   | 1 byte                               | Dirección de origen del dispositivo de envío                                                  |
| Control                              | 1 byte                               | Define el marco de la LLC (enlace lógico)                                                     |
| SNAP                                 | 5 bytes                              | Campo para la definición del identificador único de la organización (OUI) y número de protocolo|
| Datos (Payload)                 | 46–1500 bytes  | Contiene la información de la capa superior, es decir, los datos que deben transmitirse (ej. paquete IPv4, ARP)     |
| Frame check sequence (FCS)           | 4 bytes                              | Suma de comprobación que calcula la trama completa para verificar su integridad                                           |
| Inter frame gap (IFS)                | –                                    | Espacio entre tramas para permitir al receptor procesarlas                                                              |

#### b)

- Cable UTP (Unshielded Twisted Pair - Par trenzado no apantallado)
Es un tipo de cable de cobre ampliamente utilizado en redes de área local (LAN) para transmitir información de manera rápida y eficaz. Es el cable de pares trenzados mas utilizado, no posee ningún tipo de protección adicional a la recubierta de PVC y tiene una impedancia de 100 Ohm.

<img width="542" height="193" alt="image" src="https://github.com/user-attachments/assets/f6b2df93-f258-4364-8d66-d78a247d5ef1" />

Antes de hablar sobre el cable directo y el cable cruzado, es necesario conocer los estándares T-568A y T-568B. Existen dos formas de conectividad diferentes, dependiendo de estos dos tipos de disposición de cableado de red.
La disposición de T-568B es sin duda la más común, aunque muchos dispositivos también son compatibles con la distribución T-568A. Si los dos extremos del cable directo están cableados conforme a un estándar, entonces estamos hablando de una conexión directa, siendo posible aplicar cualquiera de las disposiciones. Por el contrario, hablaríamos entonces de una conexión cruzada.

<img width="810" height="402" alt="image" src="https://github.com/user-attachments/assets/4bb5ce65-b04b-4b59-a644-b6059b42d19f" />

- UTP "Derecho/Directo"
El cable de red directo no cambia su dirección. Ambos extremos utilizan el mismo estándar de cableado: T-568A o T-568B. Por lo tanto, ambos extremos (conector A y conector B) del cable directo tienen una disposición de cables del mismo color.

<img width="607" height="270" alt="image" src="https://github.com/user-attachments/assets/99fae44e-9551-4af2-a199-d56bf53b2fc0" />

- UTP "Cruzado"
El cable cruzado, como su nombre indica, se cruza o cambia de dirección de un extremo a otro. A diferencia del cable directo, el cable cruzado utiliza diferentes estándares de cableado en cada uno de sus extremos: uno el estándar T568A y el otro el estándar T568B.

<img width="607" height="270" alt="image" src="https://github.com/user-attachments/assets/dad368fc-3296-4c2f-a259-492cd867315b" />

En general, un cable cruzado se utiliza para conectar dos dispositivos del mismo tipo, como por ejemplo un PC a una PC o un switch a otro switch. Por otro lado, el cable directo conecta dos dispositivos diferentes entre sí, como por ejemplo un PC y un switch.

- Relación con lo visto en el punto 2:
Los pares trenzados permiten que las señales se transporten de manera más limpia, mejorando el SNR y reduciendo el impacto del ruido.

#### c) Captura de paquetes Ethernet con Wireshark

Una manera sencilla de capturar un paquete, es mediante la ejecución del comando ping hacia la puerta de enlace de red.
Tal como indica la figura, si se ejecuta el comando ipconfig en una terminal de comandos puede obtenerse la dirección IP del dispositivo actual, y la dirección IP de la puerta de enlace predeterminada.

<img width="566" height="126" alt="image" src="https://github.com/user-attachments/assets/95ce7513-0f5a-4617-aa9e-63cd469699b7" />

Se inicia la captura de paquetes en Wireshark y se ejecuta el comando ping hacia la dirección IP de la puerta de enlace. En la lista de paquetes capturados, es posible detectar los paquetes ICMP generados por el comando ping.

<img width="1061" height="189" alt="image" src="https://github.com/user-attachments/assets/efcefeb8-dcc2-4306-9cad-1dda246cb76a" />

El paquete enviado en este caso es:

```
7c 16 89 b9 29 41 b4 2e 99 ca ff bc 08 00 45 00
00 3c dd 1e 00 00 80 01 db b4 c0 a8 00 9c c0 a8
00 00 08 00 4d 43 00 01 00 18 61 62 63 64 65 66
67 68 69 6a 6b 6c 6d 6e 6f 70 71 72 73 74 75 76
77 78 79                     
```

A continuación, se hace un análisis del paquete:

##### *Encabezado Ethernet*

* Son los primeros 14 bytes de la trama → `7c 16 89 b9 29 41 b4 2e 99 ca ff bc 08 00`
  * `7c 16 89 b9 29 41`   → **Dirección MAC destino**
  * `b4 2e 99 ca ff bc`   → **Dirección MAC origen**
  * `08 00`               → **Tipo de protocolo (0x0800 indica que el protocolo utilizado por la capa superior es IPv4)**

##### *Encabezado IP*

* Son 20 bytes en total → `45 00 00 3c dd 1e 00 00 80 01 db b4 c0 a8 00 9c c0 a8 00 01`
  * `4` → Protocolo IPv4
  * `5` → Longitud en múltiplos de 4 bytes
  * `00` → Quality of Service
  * `00 3c` → Longitud Total, de tal forma que el encabezado IP + mensaje ocupan 60 bytes
  * `dd 1e` → Identificación del Paquete
  * `00 00` → Flags y Offset
  * `80` → TTL = 80, lo que indica que el paquete puede atravesar maximo 128 routers
  * `01` → Protocolo Auxiliar, en este caso ICMP
  * `db b4` → Checksum para verificar la integridad del encabezado
  * `c0 a8 00 9c` → **Dirección IP origen**
  * `c0 a8 00 01` → **Dirección IP destino**

##### *Encabezado ICMP*

* Son 8 bytes en total → `00 00 4d 43 00 01`
  * `00` → Tipo 0 (Echo Reply, respuesta a un ping)  
  * `00` → Código 0 (sin subcódigo adicional)  
  * `4d 43` → Checksum de 16 bits para verificar la integridad del encabezado  
  * `00 01` → Número de secuencia (se incrementa con cada solicitud/respuesta)  

##### *Datos ICMP*

* El resto de bytes son bytes que se envían como parte del paquete ICMP sin tener un propósito especifico mas alla de ser devueltos exactamente como se enviaron en un Echo Request, lo que permite verificar la integridad de la conexión

#### d) 

Por medio del sitio https://macaddress.io/ puede obtenerse información extra sobre está dirección MAC, tal como los datos del fabricante y su dirección.

##### **7c 16 89 b9 29 41 MAC address details**

- Company name: Sagemcom Broadband Sas
- Company address: 250, route de l'Empereur Rueil Malmaison Cedex hauts de seine 92848 FR
- Country code: FR (Francia)
- 195 OUIs registered

Esta página muestra todos los bloques de direcciones MAC registrados por Sagemcom Broadband Sas. Cada vez que una empresa registra un rango, debe indicar "Dirección de la empresa". En la mayoría de los casos, estas direcciones se escriben de forma diferente, por lo que mostramos la dirección de cada bloque MAC por separado.

<img width="1161" height="701" alt="image" src="https://github.com/user-attachments/assets/7c268817-f443-46fa-9a70-a4544b531a75" />

#### e) 

Se procede a hacer un ping a la IP pública de uno de los integrantes del grupo y capturamos el paquete con Wireshark:

```
7c 16 89 b9 29 41 b4 2e 99 ca ff bc 08 00 45 00  
00 54 1c 20 40 00 40 01 3d 94 c0 a8 64 04 b5 1c  
07 2c 08 00 e0 7a 19 ad 02 6b dc 07 e6 66 00 00  
00 00 79 2b 01 00 00 00 00 00 10 11 12 13 14 15   
16 17 18 19 1a 1b 1c 1d 1e 1f 20 21 22 23 24 25
26 27 28                   
```

A partir de esto podemos centrarnos en analizar los encabezados iniciales, ya que, al ser un ping, el resto de la información es idéntica

##### *Encabezado Ethernet*

* Como vimos anteriormente, son los primeros 14 bytes de la trama → `7c 16 89 b9 29 41 b4 2e 99 ca ff bc 08 00`
  * El encabezado es el mismo que en el caso anterior debido a que esta parte se limita a la red local (están la dirección MAC de la PC y del Router del emisor)

##### *Encabezado IP*

* El encabezado obtenido es: `45 00 00 3c dd 1e 00 00 80 01 db b4 c0 a8 00 9c b5 1c 07 2c`
  * Lo único que cambia es la dirección IP de destino, la cual ahora corresponde a la IP pública del receptor

### 4) Discusión y Conclusiones

A partir de los resultados obtenidos en este trabajo práctico y de la información complementaria 
consultada, pueden extraerse las siguientes reflexiones sobre la privacidad de los dispositivos en la red 
y la trazabilidad de sus direcciones:

- *Dirección MAC y trazabilidad en la red:*  
  La dirección MAC es un identificador único asignado a cada tarjeta de red.  
  Sin embargo, su trazabilidad se limita al ámbito local (LAN). Cuando un paquete atraviesa un 
  router y sale hacia Internet, las direcciones MAC ya no viajan con él: solo permanecen visibles 
  dentro de la red de área local en la que se encuentra el dispositivo.  
  Esto significa que, en una red doméstica o en un Wi-Fi público, la dirección MAC de cada 
  dispositivo es totalmente visible para los equipos en esa misma red.  

- *Privacidad y MAC spoofing:*  
  Dado que la MAC se expone en las redes locales, existen técnicas de MAC spoofing que permiten 
  cambiarla por software, con el objetivo de proteger la privacidad del usuario o evitar el rastreo 
  dentro de una red. Esta práctica es común en dispositivos que se conectan con frecuencia a redes 
  abiertas o poco seguras.  

- *Comparación con el IMEI:*  
  El IMEI (International Mobile Equipment Identity) es un número único asociado a cada teléfono 
  móvil con capacidad de conectarse a la red celular. A diferencia de la MAC, el IMEI no se transmite 
  de manera constante en la red de datos, pero sí puede ser utilizado por los operadores de telefonía 
  para identificar y rastrear un dispositivo a nivel global.  
  Mientras que la MAC se puede modificar fácilmente, el IMEI es fijo y mucho más difícil de alterar, 
  lo cual lo hace un identificador más estable y persistente.  

- *VPN y dirección MAC:*  
  Una VPN (Virtual Private Network) cifra el tráfico de Internet y oculta la dirección IP pública del 
  usuario, redirigiéndola a través de un servidor remoto. Sin embargo, **la VPN no oculta la dirección 
  MAC dentro de la red local**. Esto implica que otros dispositivos conectados a la misma LAN 
  (ejemplo: una red Wi-Fi pública) todavía pueden ver la dirección MAC del equipo, incluso si el 
  tráfico hacia Internet está encriptado.  

En conclusión, la dirección MAC es un identificador fundamental para la comunicación en redes locales, 
pero su visibilidad puede comprometer la privacidad del usuario en ciertos entornos. El IMEI cumple un 
rol similar en las redes celulares, con la diferencia de ser fijo y globalmente rastreable.  
Las técnicas de MAC spoofing y el uso de VPNs pueden mejorar la privacidad en diferentes niveles, 
aunque ninguna de estas soluciones elimina completamente la exposición de identificadores en todos 
los escenarios.



## Bibliografia
- https://www.fisicalab.com/apartado/efecto-doppler
- https://aircashback.com/es/guia/que-pasa-si-no-pongo-el-modo-avion-durante-un-vuelo
- https://www.smar.com.br/es/articulo-tecnico/emi-interferencia-electromagnetica-en-instalaciones-industriales-y-mucho-mas
- https://hardzone.es/reportajes/que-es/relacion-senal-ruido-snr-audio/
- https://www.ionos.es/digitalguide/servidores/know-how/trama-ethernet/
