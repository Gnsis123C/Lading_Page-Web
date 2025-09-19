document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulario_gnsis");
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("mensaje");
    const mensajeExito = document.getElementById("mensaje-exito");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let valido = true;

        // Validación Nombre
        if (nombre.value.trim() === "") {
            nombre.classList.add("is-invalid");
            valido = false;
        } else {
            nombre.classList.remove("is-invalid");
        }

        // Validación Email
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email.value.trim())) {
            email.classList.add("is-invalid");
            valido = false;
        } else {
            email.classList.remove("is-invalid");
        }

        // Validación Mensaje
        if (mensaje.value.trim() === "") {
            mensaje.classList.add("is-invalid");
            valido = false;
        } else {
            mensaje.classList.remove("is-invalid");
        }

        // Mostrar mensaje de éxito si todo está correcto
        if (valido) {
            mensajeExito.classList.remove("d-none");
            form.reset();

            // Ocultar mensaje después de 3 segundos
            setTimeout(() => {
                mensajeExito.classList.add("d-none");
            }, 3000);
        }
    });
});
