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

### Información de los autores
 
- gaston.capdevila@mi.unc.edu.ar
- nicolas.seia@unc.edu.ar
- iledesma@mi.unc.edu.ar
- tomas.viberti@mi.unc.edu.ar

## Resumen

## Introducción

## Desarrollo

### 1) Alcance de Redes y Virtualización

#### a) Investigar cómo se clasifican las redes según su alcance. Mencionar brevemente las características principales de cada una y colocar en cada cuadro de la Figura el acrónimo de red que corresponda

#### b) ¿Qué es una VLAN? ¿Cómo se clasifican?

#### c) Investigar y resumir el protocolo IEEE 802.1Q. ¿Cómo se relaciona con las VLAN?

#### d) En el contexto de los dos ítems anteriores ¿Qué es el Tagging?

### 1) Implementaremos la siguiente topología en Packet-Tracer:

# [IMAGEN]

#### Tabla de ruteo:

| Device | Interface | IP Address   | Subnet Mask     | Default Gateway |
|---------|------------|--------------|-----------------|-----------------|
| SW-1    | VLAN 1     | 192.168.1.11 | 255.255.255.0   | N/A             |
| SW-2    | VLAN 1     | 192.168.1.12 | 255.255.255.0   | N/A             |
| PC-A    | NIC        | 192.168.10.3 | 255.255.255.0   | 192.168.10.1    |
| PC-B    | NIC        | 192.168.10.4 | 255.255.255.0   | 192.168.10.1    |

#### a) Desde cada computadora, ingresar a la terminal y configurar los switch. Nombrar a los mismos sw1 y sw2 respectivamente. Ayuda: investigar los comandos necesarios online si no te acordás, por ejemplo, para cambiar el nombre del switch.

```cmd
switch>
switch>en
switch#conf t
switch(config)#hostname nombre
```

#### b) Asignar contraseñas privilegiadas, de consola y vty. Ayuda:

```cmd
enable secret contrasena_exec
line console 0
password contrasena_consola
login
exit
line vty 0 15
password contrasena_vty
login
exit
```

#### c) Encriptar las contraseñas (Ayuda: utilizar `service password-encryption`)

#### d) Configurar las redes VLAN para ambos switch según la tabla de direcciones provista. Ayuda:

```cmd
interface vlan 1
ip address <IP_address> <subnet_mask>
no shutdown
exit
```

#### e) Desconectar todas las interfaces que no estén siendo utilizadas (Ayuda: podés ver las interfaces utilizando `show ip interface brief`)

#### f) Guardar la configuración (`write memory`)

#### g) Testear comunicación usando pings entre las computadoras.

#### h) Crear VLANs en ambos switches. Ayuda:

```cmd
sw1(config)# vlan 10
sw1(config-vlan)# name Laboratorio
sw1(config-vlan)# vlan 20
sw1(config-vlan)# name Bar
sw1(config-vlan)# vlan 99
sw1(config-vlan)# name Management
sw1(config-vlan)# end
```

#### i) Utilizar show vlan brief para visualizar la lista de VLANs en alguno de los switch. ¿Cuál es la VLAN utilizada por defecto?. Colocar el output en el informe.

#### j) Asignar la PC-A a la VLAN Laboratorio. Ayuda:

```cmd
sw1(config)# interface f0/6
sw1(config-if)# switchport mode access
sw1(config-if)# switchport access vlan 10
```

#### k) Desde la VLAN 1, remover la ip de Management y configurarla para funcionar en la VLAN 99 (que configuramos como Management). Ayuda:

```cmd
sw1(config)# interface vlan 1
sw1(config-if)# no ip address
sw1(config-if)# interface vlan 99
sw1(config-if)# ip address IP MASCARA
sw1(config-if)# end
```

#### l) Verificar el estado de la VLAN utilizando show vlan brief y el estado de las interfaces utilizando show ip interface brief. Colocar los output en el informe e interpretar.

#### m) Asignar la PC-B a la VLAN Laboratorio en el sw2. Repetir el inciso k) pero para el sw2.

#### n) Verificar la conectividad entre PC-A y PC-B utilizando pings. Verificar conectividad entre sw1 y sw2 utilizando pings. Interpretar los resultados.

### 3) Utilizando lo que aprendimos sobre VLAN, e investigando la configuración de NAT y ACLs, simularemos el despliegue de una red LAN a bordo de una aeronave. La idea es la siguiente, tendremos tres segmentos:

i) Clase Turista: acceso solo a un sistema de entretenimiento (server local)
ii) Clase Business: acceso a sistema de entretenimiento e internet.
iii) Administración: acceso total.

# [IMAGEN]

#### Ejemplo de topología de red

# [IMAGEN]

#### Tabla de Direccionamiento:

| VLAN | Nombre          | Red IP         | Gateway      | Acceso              |
|------|------------------|----------------|---------------|---------------------|
| 10   | Turista          | 10.10.10.0/24  | 10.10.10.1    | Solo servidor       |
| 20   | Business         | 10.10.20.0/24  | 10.10.20.1    | Servidor + Internet |
| 99   | Administración   | 10.10.99.0/24  | 10.10.99.1    | Acceso total        |
| —    | Enlace ISP       | 200.0.0.0/30   | 200.0.0.1–.2  | —                   |

Se puede modificar en tanto el espíritu de la actividad se mantenga.

#### Pruebas

# [IMAGEN]

Se puede simular “internet” con cualquier cosa que responda del lado del ISP.

Detallar en el informe el diagrama de red (hecho en PT), capturas de pantalla, y conclusiones.
