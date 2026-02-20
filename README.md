# LABORATORIO2-PROGRA

Estudiante: Yessica Raquel Reyes Juarez 

# 🎵 My Dream Playlist - Laboratorio 2 Primer Cómputo

## 📌 Descripción del Proyecto

My Dream Playlist es una página web interactiva desarrollada con HTML, CSS y JavaScript.  
Permite al usuario:

- Agregar canciones a una playlist.
- Eliminar canciones individualmente.
- Limpiar toda la playlist.
- Cambiar el estilo visual según el género seleccionado (Pop, Chill o Dark).
- Ver el total de canciones agregadas.
- Mostrar mensajes dinámicos según la acción realizada.

El diseño es moderno, centrado y dinámico, cambiando colores según el estilo seleccionado.

---

## 📋 Tabla de Selectores Utilizados

| Tipo de selector | Elemento afectado | Descripción de la tarea que realiza |
|------------------|------------------|--------------------------------------|
| getElementById | addBtn | Agrega una nueva canción a la lista |
| getElementById | clearBtn | Limpia toda la playlist |
| getElementById | playlist | Contenedor donde se agregan las canciones |
| getElementById | contador | Muestra el total de canciones |
| getElementById | mensaje | Muestra mensajes dinámicos al usuario |
| querySelector | #songInput | Captura el texto ingresado en el input |
| querySelectorAll | .tema | Permite cambiar el fondo y estilo visual |
| getElementsByClassName | control-btn | Cambia el color de los botones según el tema seleccionado |
| createElement | li y button | Crea elementos dinámicamente en la lista |

---

## ❓ Preguntas

### ¿Cuál es la ventaja de utilizar getElementById frente a querySelector?

La ventaja de getElementById es que es más rápido y específico, ya que solo busca un elemento por su ID único. Es ideal cuando sabemos exactamente qué elemento queremos modificar.

---

### ¿En qué situación es preferible usar querySelectorAll en lugar de querySelector?

Se utiliza querySelectorAll cuando queremos seleccionar varios elementos al mismo tiempo, por ejemplo cuando hay varios botones con la misma clase. Devuelve todos los elementos que coinciden con el selector.

---

### ¿Qué tipo de dato devuelve cada uno?

- getElementById → Devuelve un objeto Element.
- querySelector → Devuelve el primer Element que coincida.
- querySelectorAll → Devuelve una NodeList.
- getElementsByClassName → Devuelve una HTMLCollection.

---

## 🎨 Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript

---

