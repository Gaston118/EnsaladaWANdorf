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




## Introducción


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
Con respecto a las transmisiones mas afectadas tenemos aquellas que su medio es el espacio o el aire, como el Wi-Fi, enlaces satelitales, radio y TV por aire, telefonía celular entre otros. Al estar expuestas al ruido e interferencias electromagneticas.

Por otro lado, las mas resilientes son la que su medio de transmision no estan expuestos al medio abierto, como por ejemplo transmisiones por fibra óptica o cable coaxial. La primera es en un canal completamente guiado por el vidrio, inmune al ruido, 
mientras que el otro, esta más protegido que el aire, pero presenta pérdidas resistivas.

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

Ethernet es la tecnología tradicional para conectar dispositivos en una red de área local (LAN) o una red de área amplia (WAN) por cable, lo que les permite comunicarse entre sí a través de un protocolo: un conjunto de reglas o lenguaje de red común.

- Caracteristicas principales:
  - Costo relativamente bajo.
  - Generalmente resistente al ruido.
  - Velocidad y fiabilidad.
  - Seguridad de los datos.
 
Una trama en Ethernet es la unidad básica de transmisión de datos en una red Ethernet. Es un bloque de información con una estructura definida que permite identificar el origen, el destino, el tipo de datos transportados y verificar si hubo errores en la transmisión.

- Bloque de tramas Ethernet:
  
| Building block                       | Tamaño                               | Función                                                                                       |
|--------------------------------------|--------------------------------------|-----------------------------------------------------------------------------------------------|
| Preamble / Start frame delimiter (SFD) | 8 bytes                              | Sincronización de los receptores. Secuencia de bits que inicia la trama                        |
| Destination address (MAC)            | 6 bytes                              | Dirección de hardware del adaptador de red de destino                                         |
| Source address (MAC)                 | 6 bytes                              | Dirección de hardware del adaptador de red de origen                                          |
| Tag                                  | 4 bytes                              | Etiqueta VLAN opcional para la integración en redes VLAN (IEEE 802.1q)                        |
| Type                                 | 2 bytes                              | Ethernet II: etiquetado de protocolos de la capa 3                                            |
| Length                               | 2 bytes                              | Longitud de la información sobre el registro                                                  |
| Destination service access point (DSAP) | 1 byte                             | Dirección individual del punto de acceso al servicio                                          |
| Source service access point (SSAP)   | 1 byte                               | Dirección de origen del dispositivo de envío                                                  |
| Control                              | 1 byte                               | Define el marco de la LLC (enlace lógico)                                                     |
| SNAP                                 | 5 bytes                              | Campo para la definición del identificador único de la organización (OUI) y número de protocolo|
| Data                                 | 44–1500 bytes (según la estructura)  | Los datos que deben transmitirse                                                              |
| Frame check sequence (FCS)           | 4 bytes                              | Suma de comprobación que calcula la trama completa                                            |
| Inter frame gap (IFS)                | –                                    | Parada de transmisión de 9,6 µs                                                               |

- Ethernet: 10 Mbps, primer estandar sobre cale UTP.
- Fast Ethernet: 100 Mbps, mejora en velocidad, mantiene compatibilidad con cableado UTP.
- Gigabit Ethernet: 1 Gbps, usa todas las parejas de cable UTP, mayor eficiencia y soporte para grandes volumenes de datos.

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

#### c)

### Captura de paquetes Ethernet con Wireshark

Una manera sencilla de capturar un paquete, es mediante la ejecución del comando ping hacia la puerta de enlace de red.
Tal como indica la figura, si se ejecuta el comando ipconfig en una terminal de comandos puede obtenerse la dirección IP del dispositivo actual, y la dirección IP de la puerta de enlace predeterminada.

<img width="566" height="126" alt="image" src="https://github.com/user-attachments/assets/95ce7513-0f5a-4617-aa9e-63cd469699b7" />

Se inicia la captura de paquetes en Wireshark y se ejecuta el comando ping hacia la dirección IP de la puerta de enlace. En la lista de paquetes capturados, es posible detectar los paquetes ICMP generados por el comando ping.

<img width="1061" height="189" alt="image" src="https://github.com/user-attachments/assets/efcefeb8-dcc2-4306-9cad-1dda246cb76a" />

El paquete enviado en este caso es:

7c 16 89 b9 29 41 b4 2e 99 ca ff bc 08 00 45 00  
00 3c dd 1e 00 00 80 01 db b4 c0 a8 00 9c c0 a8   
00 01 08 00 4d 43 00 01 00 18 61 62 63 64 65 66   
67 68 69 6a 6b 6c 6d 6e 6f 70 71 72 73 74 75 76   
77 61 62 63 64 65 66 67 68 69                     

7c 16 89 b9 29 41   → **Dirección MAC destino**

b4 2e 99 ca ff bc   → **Dirección MAC origen**

08 00               → **Tipo de protocolo (0x0800 = IPv4)**

45 00 00 3c d4 1e 00 00 80 01 db b4 c0 a8 00 8a c0 a8 00 a8 Encabezado → **Encabezado IPv4**

08 00 4d 43 00 01 00 01 → **Encabezado ICMP**

### d) 

Por medio del sitio https://macaddress.io/ puede obtenerse información extra sobre está dirección MAC, tal como los datos del fabricante y su dirección.

**7c 16 89 b9 29 41 MAC address details**
- Company name: Sagemcom Broadband Sas
- Company address: 250, route de l'Empereur Rueil Malmaison Cedex hauts de seine 92848 FR
- Country code: FR
- 195 OUIs registered

Esta página muestra todos los bloques de direcciones MAC registrados por Sagemcom Broadband Sas. Cada vez que una empresa registra un rango, debe indicar "Dirección de la empresa". En la mayoría de los casos, estas direcciones se escriben de forma diferente, por lo que mostramos la dirección de cada bloque MAC por separado.

<img width="1161" height="701" alt="image" src="https://github.com/user-attachments/assets/7c268817-f443-46fa-9a70-a4544b531a75" />


## Discusión y Conclusiones


## Bibliografia
- https://www.fisicalab.com/apartado/efecto-doppler
- https://aircashback.com/es/guia/que-pasa-si-no-pongo-el-modo-avion-durante-un-vuelo
- https://www.smar.com.br/es/articulo-tecnico/emi-interferencia-electromagnetica-en-instalaciones-industriales-y-mucho-mas
- https://hardzone.es/reportajes/que-es/relacion-senal-ruido-snr-audio/
- https://www.ionos.es/digitalguide/servidores/know-how/trama-ethernet/



