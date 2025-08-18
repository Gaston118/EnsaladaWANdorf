# Trabajo Practico N1

- **Gastón E. Capdevila**
- **Igancio Ledesma**
- **Nicolas Seia**
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
-
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


## Referencias 

## Bibliografia 

- https://biblioteca.utb.edu.co/notas/tesis/0062312.pdf
- https://es.khanacademy.org/science/ap-chemistry/electronic-structure-of-atoms-ap/bohr-model-hydrogen-ap/a/light-and-the-electromagnetic-spectrum
- https://catedras.facet.unt.edu.ar/pds/wp-content/uploads/sites/125/2017/04/Se%C3%B1ales-y-Sistemas-de-Tiempo-Discreto_Fundamentos.pdf
- https://es.wikipedia.org/wiki/Espectro_electromagn%C3%A9tico
- 

    
