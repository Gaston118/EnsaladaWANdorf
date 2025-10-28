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

### **1) Alcance de Redes y Virtualización**

#### **a) Investigar cómo se clasifican las redes según su alcance. Mencionar brevemente las características principales de cada una y colocar en cada cuadro de la Figura el acrónimo de red que corresponda**

##### **PAN (Personal Area Network – Red de Área Personal)**

* **Definición:** Red de corto alcance destinada a conectar dispositivos personales de un mismo usuario.
* **Alcance típico:** hasta **10 metros**.
* **Medios y tecnologías:** Bluetooth, USB, NFC.
* **Ejemplos:** conexión entre un celular y auriculares inalámbricos, smartwatch, mouse o teclado Bluetooth.
* **Ventajas:** bajo consumo energético, configuración sencilla, portabilidad.
* **Limitaciones:** baja velocidad, alcance muy limitado.

##### **LAN (Local Area Network – Red de Área Local)**

* **Definición:** Red de computadoras que abarca un área limitada como una oficina, laboratorio, escuela o edificio.
* **Alcance típico:** hasta **1 km**.
* **Medios y tecnologías:** Ethernet (IEEE 802.3), Wi-Fi (IEEE 802.11).
* **Ejemplos:** red de PCs conectadas en un aula con un switch y un router.
* **Ventajas:** altas velocidades (1–10 Gbps), bajo costo, fácil administración y mantenimiento.
* **Limitaciones:** alcance físico restringido, dependencia de infraestructura local.

##### **CAN (Campus Area Network – Red de Campus)**

* **Definición:** Red que interconecta múltiples LANs dentro de un campus o complejo (por ejemplo, una universidad, parque tecnológico o planta industrial).
* **Alcance típico:** hasta **5–10 km**.
* **Medios y tecnologías:** fibra óptica, Ethernet, Wi-Fi, enlaces troncales (trunk links).
* **Ejemplo:** red que conecta todos los edificios de una universidad.
* **Ventajas:** alta velocidad entre LANs, control centralizado, seguridad interna.
* **Limitaciones:** requiere planificación de direccionamiento y equipos de backbone (switches de capa 3).

##### **MAN (Metropolitan Area Network – Red de Área Metropolitana)**

* **Definición:** Red que conecta varias LAN o CAN dentro de una ciudad o área metropolitana.
* **Alcance típico:** entre **10 y 50 km**.
* **Medios y tecnologías:** fibra óptica, enlaces inalámbricos metropolitanos (LTE), MPLS.
* **Ejemplo:** red de interconexión entre las sedes municipales o entre distintas sucursales de una empresa dentro de una misma ciudad.
* **Ventajas:** buena velocidad y cobertura urbana, conexión a redes troncales nacionales.
* **Limitaciones:** mayor costo y complejidad administrativa.

##### **WAN (Wide Area Network – Red de Área Amplia)**

* **Definición:** Red que conecta dispositivos o LANs a grandes distancias geográficas, incluso países o continentes.
* **Alcance típico:** más de **100 km**.
* **Medios y tecnologías:** enlaces satelitales, fibra óptica submarina, 4G/5G, VPNs.
* **Ejemplo:** Internet, o la red que conecta las filiales internacionales de una empresa.
* **Ventajas:** cobertura global, interconexión entre regiones.
* **Limitaciones:** alta latencia, costos elevados, dependencia de proveedores externos (ISP).

##### **WLAN (Wireless LAN – Red de Área Local Inalámbrica)**

* **Definición:** Variante inalámbrica de la LAN que utiliza tecnología Wi-Fi.
* **Estándar:** IEEE 802.11.
* **Alcance:** hasta **100 m por punto de acceso**.
* **Ventajas:** movilidad, facilidad de instalación, ampliación flexible.
* **Limitaciones:** interferencias, menor seguridad y ancho de banda que Ethernet.

##### **WWAN (Wireless Wide Area Network – Red de Área Amplia Inalámbrica)**

* **Definición:** Red de gran cobertura basada en tecnologías celulares o satelitales.
* **Ejemplos:** redes 4G, 5G, Starlink, redes IoT NB-IoT.
* **Ventajas:** movilidad total, conexión sin infraestructura fija.
* **Limitaciones:** dependencia de operador, costos por tráfico, cobertura variable.

##### **SAN (Storage Area Network – Red de Almacenamiento)**

* **Definición:** Red dedicada exclusivamente al intercambio de datos entre servidores y sistemas de almacenamiento.
* **Tecnologías:** Fibre Channel, iSCSI.
* **Uso típico:** centros de datos, servidores empresariales.
* **Ventajas:** alta velocidad, redundancia, fiabilidad.
* **Limitaciones:** costo elevado, complejidad técnica.

##### **Resumen comparativo**

| Tipo de red        | Acrónimo | Alcance típico          | Ejemplo de uso       | Tecnología principal      |
| ------------------ | -------- | ----------------------- | -------------------- | ------------------------- |
| Personal           | **PAN**  | < 10 m                  | Bluetooth, NFC       | Inalámbrica / cable corto |
| Local              | **LAN**  | 10 m – 1 km             | Oficina, aula        | Ethernet                  |
| Campus             | **CAN**  | Hasta 10 km             | Universidad, empresa | Ethernet/Fibra            |
| Metropolitana      | **MAN**  | Hasta 50 km             | Red urbana           | Fibra, WiMAX              |
| Amplia             | **WAN**  | > 100 km                | Internet             | MPLS, Satélite, LTE            |
| Inalámbrica local  | **WLAN** | 50–100 m                | Wi-Fi doméstico      | 802.11                    |
| Inalámbrica amplia | **WWAN** | 1–1000 km               | 4G/5G                | Celular/Satélite          |
| Almacenamiento     | **SAN**  | Limitado al data center | Servidores           | Fibre Channel             |

#### **b) ¿Qué es una VLAN? ¿Cómo se clasifican?**

Una VLAN (Virtual Local Area Network) es una red lógica que permite segmentar una red física (por ejemplo, un switch) en múltiples dominios de broadcast independientes, sin necesidad de agregar más hardware.

Esto significa que varios grupos de dispositivos pueden coexistir dentro del mismo switch, pero sin comunicarse entre sí a menos que el tráfico sea enrutado por un dispositivo de capa 3 (como un router o switch multicapa).

Según Cisco Networking Academy, las VLAN mejoran la seguridad, eficiencia y administración de la red, permitiendo separar el tráfico según función, departamento o nivel de acceso, reduciendo colisiones y optimizando el rendimiento. Una VLAN es una herramienta lógica de segmentación definida en el estándar IEEE 802.1Q, que agrega una etiqueta (“tag”) a cada trama Ethernet para identificar a qué VLAN pertenece.

##### **Ventajas**

- **Seguridad:** Aísla el tráfico de cada grupo, evitando accesos no autorizados.
- **Administración flexible:** Permite mover o reasignar usuarios sin cambiar el cableado físico.
- **Rendimiento:** Reduce el tamaño de los dominios de broadcast.
- **Escalabilidad:** Facilita la expansión o reorganización de la red.

##### **Clasificación de las VLAN**

Las VLAN pueden clasificarse según diferentes criterios de uso o configuración:

1. **Por función o departamento**

   * Ejemplo: VLAN de Administración, Ventas, Recursos Humanos, Laboratorio.
   * Separa los usuarios según su rol en la organización.

2. **Por tipo de tráfico**

   * **Nativa:** VLAN por defecto para tramas no etiquetadas.
   * **Datos:** Tráfico de usuarios comunes.
   * **Voz:** Prioriza el tráfico de telefonía IP (QoS).
   * **Gestión (Management):** Para administración de dispositivos de red.
   * **Trunk:** VLAN usada para transportar varias VLAN por un solo enlace (802.1Q).

3. **Por método de asignación**

   * **VLAN estática (port-based):** Se asigna manualmente un puerto del switch a una VLAN específica.
   * **VLAN dinámica:** Se asigna automáticamente según la MAC address, usuario o protocolo, utilizando servidores como VMPS (VLAN Membership Policy Server).

##### **Ejemplo típico**

En una pequeña empresa:

* VLAN 10 – Administración
* VLAN 20 – Ventas
* VLAN 30 – Laboratorio
* VLAN 99 – Management

Cada VLAN tiene su propia subred IP (por ejemplo, 10.10.10.0/24, 10.10.20.0/24, etc.) y solo puede comunicarse con otras mediante un router o switch de capa 3 configurado con inter-VLAN routing.

#### **c) Investigar y resumir el protocolo IEEE 802.1Q. ¿Cómo se relaciona con las VLAN?**

El IEEE 802.1Q es el estándar que define cómo se identifican y transportan las VLANs en redes Ethernet. Este protocolo fue desarrollado por la IEEE para permitir que varios dominios lógicos (VLANs) compartan el mismo enlace físico entre dispositivos de red, como switches o routers, sin perder la separación lógica del tráfico.

En otras palabras, 802.1Q permite que una única conexión física (trunk link) transporte tramas de múltiples VLANs, insertando dentro de cada trama Ethernet un campo adicional llamado tag VLAN ID (VID) que indica a qué VLAN pertenece.

##### **Relación con las VLAN**

El protocolo IEEE 802.1Q es la base técnica que hace posible la existencia de VLANs en redes Ethernet. Gracias a este estándar, un switch puede:

* Identificar a qué VLAN pertenece cada trama.
* Enviar múltiples VLANs a través de un solo enlace físico (modo trunk).
* Mantener el aislamiento lógico del tráfico entre diferentes VLANs, incluso si viajan por el mismo cable.
* Permitir el enrutamiento entre VLANs mediante un router o switch de capa 3 (inter-VLAN routing).

En resumen, sin 802.1Q, las VLAN solo podrían existir dentro de un mismo switch, ya que no habría forma de transportar la información de VLAN entre dispositivos.

##### **Funcionamiento técnico**

Cuando una trama Ethernet atraviesa un enlace configurado como trunk, el switch agrega una etiqueta (tag) que incluye información sobre la VLAN.
Este proceso se llama VLAN tagging, y consiste en insertar un campo de 4 bytes dentro de la trama original (tagging).

> En el switch de destino, la trama es leída y el tag es eliminado al llegar a un puerto de acceso y antes de ser reenviada al dispositivo final (untagging).

La estructura de la trama modificada por 802.1Q es:

| Campo                                       | Tamaño   | Descripción                           |
| ------------------------------------------- | -------- | ------------------------------------- |
| **Preamble + Destination MAC + Source MAC** | 14 bytes | Cabecera Ethernet estándar            |
| **Tag 802.1Q**                              | 4 bytes  | Campo agregado que identifica la VLAN |
| **EtherType / Length + Data + FCS**         | Variable | Información original de la trama      |

El campo de etiquetado 802.1Q contiene:

* **TPID (Tag Protocol Identifier):** 16 bits con valor `0x8100`, que indica que la trama está etiquetada.
* **TCI (Tag Control Information):** 16 bits que incluyen:

  * **Priority Code Point (3 bits):** prioridad IEEE 802.1p.
  * **DEI (1 bit):** Drop Eligible Indicator (marcado para descarte si hay congestión).
  * **VLAN ID (12 bits):** número de VLAN (de 1 a 4094).

##### **VLAN nativa y tramas no etiquetadas**

* Las tramas que **no llevan etiqueta 802.1Q** pertenecen a la **VLAN nativa**, configurada por defecto (normalmente VLAN 1).
* Esto permite compatibilidad con dispositivos que no soportan etiquetado VLAN.

##### **Ejemplo práctico**

Si se configuran dos switches conectados por un puerto trunk con VLAN 10 y VLAN 20:

* Cada trama que sale del puerto trunk se etiqueta con un identificador VLAN (VID).
* El switch receptor lee la etiqueta y reenvía la trama solo a los puertos pertenecientes a esa VLAN.
* El usuario de VLAN 10 nunca ve tráfico de VLAN 20, aunque ambos compartan el mismo enlace físico.

#### **d) En el contexto de los dos ítems anteriores ¿Qué es el Tagging?**

Como se mencionó antes, el tagging es el proceso mediante el cual un switch identifica y marca las tramas Ethernet con información de VLAN, utilizando el estándar IEEE 802.1Q. Taggear una trama equivale a insertar una etiqueta (tag) que indica a qué VLAN pertenece, permitiendo que esa trama pueda circular por enlaces troncales (trunks) entre diferentes dispositivos de red sin perder su asociación lógica. Sin el tagging, las tramas que pasan por un enlace trunk serían indistinguibles, y los switches no sabrían a qué VLAN reenviarlas.

##### **Puertos involucrados en el tagging**

**1. Puerto de acceso (Access Port):**
  * Pertenece a una sola VLAN.
  * Las tramas entran y salen sin etiqueta.
  * Ejemplo: conexión a una PC o impresora.

**2. Puerto troncal (Trunk Port):**
  * Transporta tráfico de múltiples VLANs.
  * Las tramas se etiquetan (tagged) con 802.1Q.
  * Ejemplo: conexión entre switches o entre un switch y un router.

##### **Ejemplo**

Supongamos que un switch tiene configuradas VLAN 10 (Laboratorio) y VLAN 20 (Administración) y que se conecta a otro switch mediante un puerto trunk:

* Una trama generada en la VLAN 10 es taggeada con el identificador “10” antes de salir del switch.
* El switch receptor interpreta el tag, sabe que la trama pertenece a VLAN 10, y la reenvía solo a los puertos asociados a esa VLAN.
* Si la trama pertenece a la VLAN nativa, se envía sin tag.

### **2) Implementaremos la siguiente topología en Packet-Tracer:**

<img width="560" height="153" alt="image" src="https://github.com/user-attachments/assets/1a57d4cf-bdb0-4825-85b6-4e36a22396d3" />

#### **Tabla de ruteo:**

| Device | Interface | IP Address   | Subnet Mask     | Default Gateway |
|---------|------------|--------------|-----------------|-----------------|
| SW-1    | VLAN 1     | 192.168.1.11 | 255.255.255.0   | N/A             |
| SW-2    | VLAN 1     | 192.168.1.12 | 255.255.255.0   | N/A             |
| PC-A    | NIC        | 192.168.10.3 | 255.255.255.0   | 192.168.10.1    |
| PC-B    | NIC        | 192.168.10.4 | 255.255.255.0   | 192.168.10.1    |

<img width="828" height="181" alt="image" src="https://github.com/user-attachments/assets/3010af38-d6ec-4c51-bdd7-ce3628375e97" />

#### **a) Desde cada computadora, ingresar a la terminal y configurar los switch. Nombrar a los mismos sw1 y sw2 respectivamente.**

<img width="512" height="99" alt="image" src="https://github.com/user-attachments/assets/07c84858-d7e5-4f48-a899-03e97c63a43b" />
<img width="512" height="99" alt="image" src="https://github.com/user-attachments/assets/2a4f9e15-97c9-4f77-8e35-116317fd699e" />

#### **b) Asignar contraseñas privilegiadas, de consola y vty.**

<img width="516" height="173" alt="image" src="https://github.com/user-attachments/assets/f0cafe96-edc0-4a41-8f8b-2052e5fc403d" />
<img width="516" height="173" alt="image" src="https://github.com/user-attachments/assets/95c05639-27b3-43c8-b49b-34127fedb6b5" />

#### **c) Encriptar las contraseñas**

<img width="316" height="29" alt="image" src="https://github.com/user-attachments/assets/cfcca631-8c84-42ff-b411-52a77a31ea97" />
<img width="316" height="29" alt="image" src="https://github.com/user-attachments/assets/48ddca22-16b6-41e1-bdbe-911cb877446d" />

#### **d) Configurar las redes VLAN para ambos switch según la tabla de direcciones provista.**

<img width="367" height="103" alt="image" src="https://github.com/user-attachments/assets/bd4d0cb4-fbd1-4ca9-97bc-b8ddac3e3357" />
<img width="366" height="84" alt="image" src="https://github.com/user-attachments/assets/4e1b3e29-2379-41fa-8b8b-35bf184c71e2" />

#### **e-f) Desconectar todas las interfaces que no estén siendo utilizadas** - Guardar la configuración

<img width="567" height="490" alt="image" src="https://github.com/user-attachments/assets/c1f1e011-8e5d-4af8-940d-a55ca1cc3c47" />
<img width="567" height="490" alt="image" src="https://github.com/user-attachments/assets/8ca784e9-8fcd-4338-9b77-6d7bd1277cfd" />

#### **g) Testear comunicación usando pings entre las computadoras.**

<img width="567" height="490" alt="image" src="https://github.com/user-attachments/assets/200f57d1-006e-4553-b8e3-bb0cf090aea5" />

#### **h) Crear VLANs en ambos switches.**

<img width="502" height="159" alt="image" src="https://github.com/user-attachments/assets/5c047589-99a3-406f-97a2-3db280aebe5c" />
<img width="502" height="159" alt="image" src="https://github.com/user-attachments/assets/1c20fc8e-5175-427c-986f-c602f4fc73d5" />

#### **i) Utilizar show vlan brief para visualizar la lista de VLANs en alguno de los switch. ¿Cuál es la VLAN utilizada por defecto?.**

<img width="555" height="278" alt="image" src="https://github.com/user-attachments/assets/f251e618-5402-4027-bddc-2d1fb93f1885" />

- VLAN por defecto: vlan 1

#### **j) Asignar la PC-A a la VLAN Laboratorio.**

<img width="543" height="152" alt="image" src="https://github.com/user-attachments/assets/e40f5c39-f2f8-4b53-a6d6-3437ab1fc3d8" />

#### **k) Desde la VLAN 1, remover la ip de Management y configurarla para funcionar en la VLAN 99 (que configuramos como Management).**

<img width="542" height="280" alt="image" src="https://github.com/user-attachments/assets/42d5a7a2-931e-4d21-89ef-098b1521bbdf" />

#### **l) Verificar el estado de la VLAN utilizando show vlan brief y el estado de las interfaces utilizando show ip interface brief.**

<img width="542" height="280" alt="image" src="https://github.com/user-attachments/assets/4511b8e4-aa99-4487-8263-1fdeef9c8239" />

- VLAN 1 default: Todavía tiene casi todos los puertos, incluyendo Fa0/1 (el enlace a sw2) y Fa0/2, Fa0/3, etc.
- VLAN 10 Lab: Tiene asignado el puerto Fa0/6. Esto es correcto. Es el puerto donde está conectada la PC-A.
- VLAN 20 Bar y VLAN 99 Man: Están creadas (active) pero no tienen ningún puerto de acceso asignado, lo cual es normal.

<img width="565" height="475" alt="image" src="https://github.com/user-attachments/assets/06a9bda2-5ef1-404f-9193-b754cbef0cec" />

- FastEthernet0/1: Su estado es up y el protocolo es up. Esto confirma que el cable al sw2 está bien conectado y el enlace funciona.
- FastEthernet0/6: Su estado es up y el protocolo es up. Esto confirma que el cable a la PC-A está bien conectado y el enlace funciona.
- Vlan1: Su estado es up y up, pero unassigned (sin IP). Esto es correcto, ya le quitaste la IP. Sigue up porque (como veremos) el puerto Fa0/1 la sigue usando como VLAN nativa.
- Vlan99: Tiene la IP 192.168.1.11 y su estado es up y up.

#### **m) Asignar la PC-B a la VLAN Laboratorio en el sw2. Repetir el inciso k) pero para el sw2.**

<img width="619" height="236" alt="image" src="https://github.com/user-attachments/assets/338f4d4e-4fc4-40da-b8cc-5e9547077059" />
<img width="621" height="447" alt="image" src="https://github.com/user-attachments/assets/36d5d168-c149-433a-8c7a-6f7376d91f01" />

#### **n) Verificar la conectividad entre PC-A y PC-B utilizando pings. Verificar conectividad entre sw1 y sw2 utilizando pings.**

<img width="1363" height="598" alt="image" src="https://github.com/user-attachments/assets/a6f17fdf-05ef-4378-9f18-854a9ca88d26" />

- Conectividad entre pcs:
  - Ambas PCs pertenecen a la VLAN 10 (Laboratorio) configurada en los switches.
  - El enlace trunk entre switches permite que el tráfico de la VLAN 10 se propague entre ellos.
  - Las PCs en la VLAN 10 se comunican correctamente entre sí a través de los dos switches. Esto confirma el correcto funcionamiento de la segmentación por VLAN, la propagación de VLANs por trunk y la conectividad de capa 2.
  
<img width="1356" height="182" alt="image" src="https://github.com/user-attachments/assets/13a6f5fa-538d-4f77-9da6-1fd6141f57a0" />

- Conectividad entre switches:
  - La VLAN 99 (Man) está correctamente configurada en ambos switches.
  - Las interfaces Vlan99 están en estado up/up, indicando que hay un enlace activo y funcional.
  - El puerto Fa0/1 configurado como trunk transporta correctamente las VLANs de gestión.
  - La VLAN de gestión opera correctamente y los switches pueden administrarse mutuamente.

### **3) Utilizando lo que aprendimos sobre VLAN, e investigando la configuración de NAT y ACLs, simularemos el despliegue de una red LAN a bordo de una aeronave. La idea es la siguiente, tendremos tres segmentos:**

i) **Clase Turista:** acceso solo a un sistema de entretenimiento (server local)
ii) **Clase Business:** acceso a sistema de entretenimiento e internet.
iii) **Administración:** acceso total.

<img width="712" height="236" alt="image" src="https://github.com/user-attachments/assets/914434a0-c84b-4da1-aac9-4b8fdb6bf1bf" />

#### **Ejemplo de topología de red**

<img width="512" height="469" alt="image" src="https://github.com/user-attachments/assets/b38739c0-e74a-44cb-97b8-2aa7fbfce23b" />

#### **Tabla de Direccionamiento:**

| VLAN | Nombre          | Red IP         | Gateway      | Acceso              |
|------|------------------|----------------|---------------|---------------------|
| 10   | Turista          | 10.10.10.0/24  | 10.10.10.1    | Solo servidor       |
| 20   | Business         | 10.10.20.0/24  | 10.10.20.1    | Servidor + Internet |
| 99   | Administración   | 10.10.99.0/24  | 10.10.99.1    | Acceso total        |
| —    | Enlace ISP       | 200.0.0.0/30   | 200.0.0.1–.2  | —                   |

---

<img width="677" height="524" alt="image" src="https://github.com/user-attachments/assets/2c879a64-b2bc-4b61-9987-9bf3ee113890" />

<img width="664" height="401" alt="image" src="https://github.com/user-attachments/assets/303fdf7d-de2d-4c63-add0-f1ac74e53389" />

<img width="664" height="401" alt="image" src="https://github.com/user-attachments/assets/9238ab8f-806a-41e6-b3ac-062c5ad9e58a" />

<img width="667" height="361" alt="image" src="https://github.com/user-attachments/assets/b1e1ff4b-676a-463e-b1e2-b8c366416fd4" />

<img width="668" height="494" alt="image" src="https://github.com/user-attachments/assets/7b27b20a-68dd-425a-944e-4ca25bc723b8" />

<img width="648" height="386" alt="image" src="https://github.com/user-attachments/assets/074f2abb-51f4-4bfd-be6e-c1fa3750dfe9" />

#### **Pruebas**

| Prueba                                 | Desde       | Hacia             | Resultado esperado |
|----------------------------------------|-------------|-------------------|--------------------|
| Ping al servidor de entretenimiento    | PC Turista  | 10.10.99.10       | ✅ Responde         |
| Acceso HTTP a servidor local           | PC Turista  | http://10.10.99.10 | ✅ Carga la página  |
| Ping a Internet                        | PC Turista  | —                 | ❌ Bloqueado        |
| Acceso HTTP a servidor local           | PC Business | http://10.10.99.10 | ✅ Carga            |
| Ping a Internet (ej: 8.8.8.8)          | PC Business | —                 | ✅ Funciona         |
| Ping entre Admin y todos               | Admin PC    | —                 | ✅ Todos            |

pruebas PC0 (Tursita)

<img width="639" height="236" alt="image" src="https://github.com/user-attachments/assets/966c7b07-a85a-4672-8c14-660a8ddcd57e" />

<img width="698" height="574" alt="image" src="https://github.com/user-attachments/assets/125730ed-56d9-4780-aaed-ab8588caced0" />

<img width="659" height="205" alt="image" src="https://github.com/user-attachments/assets/d467e48e-9886-461f-85f5-7f39a8a90903" />

---

pruebas PC1 (Business)

<img width="659" height="236" alt="image" src="https://github.com/user-attachments/assets/ee6aa948-14b2-45cd-9ac0-f2fee28b1df0" />

<img width="682" height="290" alt="image" src="https://github.com/user-attachments/assets/349b1650-676f-4d66-9490-0003cf4a1376" />

---

pruebas PC2 (Administracion)

Admin -> Internet:

<img width="662" height="225" alt="image" src="https://github.com/user-attachments/assets/2ba38202-a05f-42dc-83fb-2c8d983e89f7" />

Admin -> Turista:

<img width="662" height="225" alt="image" src="https://github.com/user-attachments/assets/c4b39f8e-7445-44ce-9347-b49835af4f75" />

Admin -> Server:

<img width="662" height="225" alt="image" src="https://github.com/user-attachments/assets/b28d7fcb-cd8b-4b4d-86f1-8be996d194f5" />

Admin -> Web:

<img width="662" height="225" alt="image" src="https://github.com/user-attachments/assets/534557b6-8f4f-4a09-b093-8053604b3767" />

De lo realizado para cada segmento de la aeronave, concluimos lo siguiente:
- Clase Turista (VLAN 10): Las pruebas confirman que este segmento tiene acceso únicamente al servidor de entretenimiento local (ping y HTTP a 10.10.99.10 exitosos), mientras que el acceso a Internet (ping a 8.8.8.8) está correctamente bloqueado (100% de pérdida de paquetes). Esto se logró mediante la omisión deliberada de esta red en la lista de acceso NAT, impidiendo la traducción de sus direcciones IP.
- Clase Business (VLAN 20): Las pruebas validan que los usuarios de esta clase tienen acceso tanto al servidor de entretenimiento local como a Internet (ping a 8.8.8.8 exitoso). Esto se consiguió incluyéndola en la access-list 20 utilizada para el ip nat overload.
- Administración (VLAN 99): Las pruebas demuestran el "acceso total" requerido. Este segmento puede navegar por Internet (ping a 8.8.8.8), acceder al servidor local (ping y HTTP) y comunicarse con otras VLANs (ping a PC Turista 10.10.10.11 exitoso), confirmando un correcto enrutamiento inter-VLAN y una configuración NAT adecuada.

---

## **Bibliografia**

- Cisco Networking Academy. (2023). Introduction to Networks (Version 7.0) – Course Booklet. Cisco Press. (Disponible en: https://www.netacad.com/courses/ccna-introduction-networks)
