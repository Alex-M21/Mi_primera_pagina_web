document.addEventListener("DOMContentLoaded", function () {
    // Espera a que la página se haya cargado completamente antes de ejecutar el código.

    const contactForm = document.getElementById("contactForm");
    // Obtiene el formulario de contacto en el documento.

    contactForm.addEventListener("submit", function (e) {
        // Agrega un evento "submit" al formulario y previene su comportamiento predeterminado (enviar a una nueva página).

        e.preventDefault();

        // Recolectar datos del formulario
        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const mensaje = document.getElementById("mensaje").value;
        // Obtiene los valores ingresados en los campos del formulario.

        // Validar los datos
        if (nombre === "") {
            alert("Por favor, ingresa tu nombre.");
            return;
        }
        // Verifica si el campo de nombre está vacío y muestra una alerta si es el caso.

        if (correo === "") {
            alert("Por favor, ingresa tu correo electrónico.");
            return;
        }
        // Verifica si el campo de correo electrónico está vacío y muestra una alerta si es el caso.

        if (!/\w+@\w+\.\w+/.test(correo)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }
        // Comprueba si el formato del correo electrónico es válido utilizando una expresión regular y muestra una alerta si no lo es.

        // Construir el cuerpo del correo
        const cuerpoCorreo = `Nombre: ${nombre}\nCorreo Electrónico: ${correo}\nMensaje: ${mensaje}`;
        // Crea el contenido del correo que se enviará, incluyendo el nombre, correo y mensaje.

        // Reemplaza 'tu-correo@gmail.com' con tu dirección de correo electrónico
        const correoDestino = 'b.alex.mejia@gmail.com';
        // Establece la dirección de correo electrónico de destino a la que se enviará el formulario. Debes reemplazar esto con tu propia dirección de correo.

        // Enviar el correo electrónico
        window.location.href = `mailto:${correoDestino}?subject=Formulario de contacto&body=${cuerpoCorreo}`;
        // Abre el cliente de correo predeterminado del usuario, con la dirección de destino, asunto y cuerpo del correo prellenados.

        // Mostrar un mensaje de confirmación
        alert("El correo electrónico se ha enviado.");
        // Muestra una alerta al usuario confirmando que el correo se ha enviado con éxito.

        // Puedes agregar una lógica adicional aquí, como enviar los datos a un servidor
    });
});