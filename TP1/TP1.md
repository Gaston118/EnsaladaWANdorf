# Trabajo Practico N1

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
- 

## Resumen

## Introducción

## Desarrollo 

### 1)
- **Ondas electromagneticas:**
La radiación electromagnética es una de muchas maneras como la energía viaja a través del espacio. Las ondas son simplemente perturbaciones en un medio físico particular o en un campo, que resultan en vibraciones u oscilaciones. Por ende, las ondas electromagnéticas son similares pero también distintas, pues de hecho consisten en 2 ondas que oscilan perpendicularmente la una de la otra. Una de las ondas es un campo magnético que oscila; la otra, un campo eléctrico que oscila.
<img width="529" height="267" alt="image" src="https://github.com/user-attachments/assets/57379c0a-d9b1-472d-aa21-230549b5cb87" />

- **Modulacion:**
Básicamente, la modulación radica en hacer que un parámetro de una señal portadora, cambie o varié, sistemática de valor conforme con las variaciones de la señal moduladora o modulante, que es mensaje que se desea transmitir. La modulación abarca el conjunto de técnicas empleadas para transmitir información sobre una onda portadora.

- **Demodulacion:**
La demodulación es el proceso mediante el se recuperar la información transportada por una onda portadora; previamente modulada en el extremo transmisor.

- **Señales de tiempo Continuo y Discreto:** 
Las señales se clasifican de una manera amplia en señales continuas y señales discretas.
Una señal analógica/continua será denotada por f(t), una función del tiempo, en la cual la variable t puede representar una cantidad física, pero para nuestros fines supondremos que representa al tiempo en segundos. Una señal discreta se denota por x(k), en la cual la variable k es valuada entera y representa los instantes discretos del tiempo. En consecuencia es también llamada “señal discreta en el tiempo”, la cual es una secuencia de números.

<img width="903" height="318" alt="image" src="https://github.com/user-attachments/assets/93ef814f-0dc4-4c9e-b5f4-fbc2076e9bc7" />

---
**a)** 

<img width="667" height="198" alt="image" src="https://github.com/user-attachments/assets/c10d0252-104a-4aaf-88bd-505705b2a60a" />

**b)** 
       
       Longitud de onda: 0.06 [m]

       F = c / lambda = 3x10^8 / 0.06 = 5 [GHz]

 **c)** 
En este caso, dada la frecuencia obtenida, podemos ver que la onda se encuentra en el espectro conocido como "microondas", especificamente dentro de la region de las Frecuencias Superaltas (SHF) que van en el rango de 3GHz hasta 30GHz. Si hacemos un analisis mas profundo vemos que la onda se encuentra en la banda tipo "C", que va desde los 4GHz hasta los 8GHz. Este fue el primer rango de frecuencia utilizado en operación transmisiones satelitales. Normalmente se usa polarización horizontal y vertical.

**d)**
Dispositivos y sistemas típicos que operan en banda C:
- Enlaces satelitales
- Sistemas de radar
- Enlaces para estaciones base 5G

**e)**
La linea de trazos roja en la figura representa la atenuacion de la onda a medida que se propaga en el tiempo. Se puede ver como la onda electromagnetica disminuye su amplitud con la distancia. Esto se puede deber por muchos factores, como perdidas por absorcion o como propagacion en el medio.

**f)**
El efecto mencionado en el punto "e", se puede ver reflejado integramente en el ejemplo mencionado de "Enlaces para estaciones base 5G". Esto puede verse como en el dia a dia hay zonas en la ciudad, por ejemplo Cordoba, que si te alejas del centro el rango de 5G se ve afectado y otro rango como 4G, ya sea por alguno de los factores mencionados anteriormente.

**g)**
Como afecta el fenomeno descrito anteriormente:
- Telefonia celular: En este caso afecta mucho, ya que las ondas pierden intesidad con obstaculos y distancia, lo que limita la cobertura y su velocidad.
- Cable coaxial: En el cable afecta, pero a un menor nivel, ya que al ser un medio guiado no sufre como el de telefonia celular, pero el coaxial presenta perdidas resistivas y dielectricas, por lo que se necesita de amplificadores o repetidores.
- Fibra optica: En el ultimo caso, afecta pero mucho menos que en los anteriores, ya que es muy baja la atenuacion que se pierde por dispersion en el vidrio.

---
 
### 2)

<img width="969" height="332" alt="image" src="https://github.com/user-attachments/assets/6bfe6c05-05fe-4f41-9aa6-845d9f4b2ca2" />

**a)** 
El clock que utilizan ambos modulos es el mismo, y la transmision es en un solo sentido, por lo tanto es una transmision simple sincronica. 

**b)**
El esquema de la figura es muy bueno para velocidad pero es en un solo sentido. Si se busca rapidez y bidireccionalidad, no es suficiente.

**c)**
``` A = D'65 = B'01000001```

<img width="963" height="276" alt="Diagrama sin título drawio (3)" src="https://github.com/user-attachments/assets/0f08c6ed-9bac-463e-8659-ff5a9f532aa5" />

**d)**
En los puntos medios de cada período de bit, por que ahi ya es estable la señal.

---

### 3)

<img width="981" height="364" alt="image" src="https://github.com/user-attachments/assets/aa7c6fea-5256-4836-b154-6f2b3ec92d30" />

**a)** La tecnica es BPSK (Binary Phase Shift Keying). 

**b)**

<img width="1330" height="354" alt="Diagrama sin título drawio" src="https://github.com/user-attachments/assets/24a253e2-0006-4b46-ad20-e1666f4c699f" />

**c)** 

- Modulación por Amplitud (ASK - Amplitude Shift Keying)
- Modulación por Fase (PSK - Phase Shift Keying)
- Modulación por Frecuencia (FSK - Frequency Shift Keying)
- Modulación por Ancho de Pulso

**d)**
El BER (Bit Error Rate) es una métrica que mide la calidad de una transmisión digital. Se define como:

```BER = Número de bits erróneos / Número total de bits transmitidos```

Creemos que la tecnica que tiene mejores prestaciones a nivel de BER es BPSK

- Menor BER para un SNR dado
- Máxima separación entre símbolos (180°)
- Más resistente al ruido
- Solo transmite 1 bit/símbolo

---

### 4)

#### Pruebas de conectividad en una Red Simulada en Packet Tracer

Se realizaron pings entre un router, una PC de escritorio (conectada por Ethernet) y dos notebooks (conectadas por Wi-Fi):

<img width="810" height="278" alt="image" src="https://github.com/user-attachments/assets/ec3a38af-fa83-4918-b84d-a1079728fd27" />

* **Dentro de la oficina:**

  * Respuestas correctas.
  * Latencias entre **10 ms y 41 ms**.
  * 0% pérdida de paquetes.

<img width="810" height="637" alt="Test office" src="https://github.com/user-attachments/assets/66659d26-e82e-42d0-8f8a-f5411b76125c" />
<img width="405" height="190" alt="Conexion Oficina" src="https://github.com/user-attachments/assets/6b9dc0f2-414a-4c8f-87c3-f8f0bfd1185e" />
<img width="405" height="190" alt="Terminal Office" src="https://github.com/user-attachments/assets/c6c47472-155e-47ec-bb4e-822324ba0e72" />

* **En el límite del rango:**

  * Respuestas correctas pero con señal débil.
  * Latencias entre **10 ms y 24 ms**.
  * 0% pérdida de paquetes en la prueba, pero el nivel de señal era bajo ($~11%$).

<img width="810" height="637" alt="Test Rango" src="https://github.com/user-attachments/assets/21371720-7e9c-485b-b18d-9194d0e46c1f" />
<img width="405" height="190" alt="Conexion Rango" src="https://github.com/user-attachments/assets/5a40c34a-941d-4448-ab2e-9e1e21a22494" />
<img width="405" height="190" alt="Terminal Rango" src="https://github.com/user-attachments/assets/293fd362-4646-4e91-b68d-132c9d8ca453" />


* **Fuera del área de cobertura (out of range):**

  * El ping no tuvo respuesta.
  * **100% pérdida de paquetes.**

<img width="810" height="637" alt="Test Out" src="https://github.com/user-attachments/assets/2ba21458-8bc9-4742-b523-086b8cf16316" />
<img width="405" height="190" alt="Conexion Out" src="https://github.com/user-attachments/assets/a663115d-ee4a-4c72-9620-fc8f7f8a9d02" />
<img width="405" height="190" alt="Terminal Out" src="https://github.com/user-attachments/assets/91d4f7a9-1ddb-4dfe-a722-cd98262a1295" />

#### Conclusiones

* La conectividad depende directamente de la distancia al router y, en la práctica, de la interferencia con los obstáculos (paredes, salas).
* Dentro de la oficina la conexión fue estable, con latencias bajas.
* Al acercarse al límite de cobertura, la señal cae drásticamente y pueden aparecer pérdidas de paquetes o desconexiones.
* Esto reproduce el comportamiento real de redes Wi-Fi, donde el rango efectivo es limitado y depende tanto de la potencia del AP como de las interferencias y obstáculos en el medio.

El router genera un **círculo de cobertura** que representa el alcance de la señal Wi-Fi. Dentro de la oficina, la señal es estable. A medida que la notebook se aleja, la señal disminuye (ejemplo: 47% → 11% → desconexión). Al salir de la zona morada, la notebook ya no detecta la red y la conexión se pierde.

## Discusión y Conclusiones

El desarrollo del trabajo permitió conectar la teoría de las comunicaciones digitales con un escenario práctico de simulación. En la primera parte se repasaron conceptos clave como la clasificación de señales, el espectro electromagnético y las técnicas de modulación, resaltando su importancia en la transmisión confiable de datos.

La implementación en Packet Tracer mostró de manera tangible cómo factores físicos como la distancia, la atenuación y los obstáculos afectan la calidad de la comunicación inalámbrica. Se comprobó que dentro de la cobertura la red funciona de manera estable, mientras que en el límite o fuera de rango aparecen pérdidas de paquetes y desconexiones.

En conclusión, el trabajo evidencia la relevancia de comprender tanto la teoría como la práctica: la primera brinda las herramientas conceptuales, y la segunda permite experimentar los efectos reales en un entorno controlado. Este enfoque integral fortalece la formación en comunicaciones de datos y prepara a los estudiantes para escenarios más complejos en redes e infraestructura digital.

## Bibliografia

- [Perna González, A. J. (2010). *Modulación y demodulación en frecuencia (Diseño y construcción de módulos de entrenamiento para FM)*. Universidad Tecnológica de Bolívar.](https://biblioteca.utb.edu.co/notas/tesis/0062312.pdf)
- [Khan Academy. (s.f.). *Luz y el espectro electromagnético*. Khan Academy.](https://es.khanacademy.org/science/ap-chemistry/electronic-structure-of-atoms-ap/bohr-model-hydrogen-ap/a/light-and-the-electromagnetic-spectrum)
- [Cátedras FACET UNT. (2017). *Fundamentos de señales y sistemas de tiempo discreto*. Facultad de Ciencias Económicas y Tecnología, Universidad Nacional de Tucumán.](https://catedras.facet.unt.edu.ar/pds/wp-content/uploads/sites/125/2017/04/Se%C3%B1ales-y-Sistemas-de-Tiempo-Discreto_Fundamentos.pdf)
- [Espectro electromagnético. (s.f.). *Wikipedia*](https://es.wikipedia.org/wiki/Espectro_electromagn%C3%A9tico) (consultado el 18 de agosto de 2025)
- [Radio Inquiry Unit. (2016). *United States Spectrum Allocation Chart* [Gráfico PDF]. IEEE REACH.](https://reach.ieee.org/wp-content/uploads/2021/07/IEEE_REACH_United-States-Spectrum-Allocation-Chart.pdf)

    
