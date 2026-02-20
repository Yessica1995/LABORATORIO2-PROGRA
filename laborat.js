document.addEventListener("DOMContentLoaded", function() {

    const addBtn = document.getElementById("addBtn");
    const clearBtn = document.getElementById("clearBtn");
    const songInput = document.querySelector("#songInput");
    const playlist = document.getElementById("playlist");
    const contador = document.getElementById("contador");
    const mensaje = document.getElementById("mensaje");
    const temas = document.querySelectorAll(".tema");
    const controlBtns = document.getElementsByClassName("control-btn");

    let total = 0;

    // AGREGAR CANCIÓN
    addBtn.addEventListener("click", function() {
        const song = songInput.value.trim();

        if (song === "") {
            mensaje.textContent = "Escribe una canción primero 🎶";
            return;
        }

        const li = document.createElement("li");
        li.textContent = song;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("deleteBtn");

        deleteBtn.addEventListener("click", function() {
            li.remove();
            total--;
            contador.textContent = total;
        });

        li.appendChild(deleteBtn);
        playlist.appendChild(li);

        total++;
        contador.textContent = total;

        mensaje.textContent = "Canción agregada 💖";
        songInput.value = "";
    });

    // LIMPIAR PLAYLIST
    clearBtn.addEventListener("click", function() {
        playlist.innerHTML = "";
        total = 0;
        contador.textContent = total;
        mensaje.textContent = "Playlist limpiada ✨";
    });

    // CAMBIAR TEMA
    temas.forEach(function(boton) {
        boton.addEventListener("click", function() {

            // quitar clase activa
            temas.forEach(b => b.classList.remove("tema-activo"));

            // activar el actual
            boton.classList.add("tema-activo");

            if (boton.textContent.includes("Pop")) {
                document.body.style.background = "linear-gradient(135deg, #ff9a9e, #fad0c4)";
                cambiarColorBotones("#ff6f91");
                cambiarEstiloTema("#ff6f91");
            }

            if (boton.textContent.includes("Chill")) {
                document.body.style.background = "linear-gradient(135deg, #a18cd1, #fbc2eb)";
                cambiarColorBotones("#6a5acd");
                cambiarEstiloTema("#6a5acd");
            }

            if (boton.textContent.includes("Dark")) {
                document.body.style.background = "linear-gradient(135deg, #434343, #000000)";
                cambiarColorBotones("#222");
                cambiarEstiloTema("#222");
            }
        });
    });

    function cambiarColorBotones(color) {
        for (let i = 0; i < controlBtns.length; i++) {
            controlBtns[i].style.backgroundColor = color;
        }
    }

    function cambiarEstiloTema(color) {
        temas.forEach(function(boton) {
            boton.style.borderColor = color;
            boton.style.color = color;
        });
    }

});