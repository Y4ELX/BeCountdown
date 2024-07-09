function startCountdown() {
    // Fecha objetivo: sábado 13 de julio
    const targetDate = new Date("July 13, 2024 00:00:00").getTime();

    // Función para agregar un 0 al principio si el número es de un solo dígito
    function addLeadingZero(number) {
        return number < 10 ? '0' + number : number;
    }

    // Actualizar la cuenta regresiva cada segundo
    const interval = setInterval(function () {
        // Fecha y hora actual
        const now = new Date().getTime();

        // Diferencia entre la fecha objetivo y la fecha actual
        const distance = targetDate - now;

        // Cálculo del tiempo en días, horas, minutos y segundos
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Mostrar la cuenta regresiva en el elemento <p>
        document.getElementById("horaRestante").innerHTML =
            addLeadingZero(days) + ":" + addLeadingZero(hours) + ":" + addLeadingZero(minutes) + ":" + addLeadingZero(seconds);

        // Si la cuenta regresiva ha terminado, mostrar un mensaje
        if (distance < 0) {
            clearInterval(interval);
            document.getElementById("horaRestante").innerHTML = "¡El tiempo se ha agotado!";
        }
    }, 1000);
}

// Iniciar la cuenta regresiva cuando se cargue la página
window.onload = startCountdown;
