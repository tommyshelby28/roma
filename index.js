const userInput = document.getElementById('userNameInput');
const userNameDisplay = document.getElementById('userName');

// Event listener para detectar la pulsación de la tecla "Enter" en el campo de entrada de texto
userInput.addEventListener('keypress', function(event) {
    // Comprueba si la tecla presionada es "Enter" (código de tecla 13)
    if (event.key === 'Enter') {
        generateUsername(); // Genera el nombre de usuario cuando se presiona "Enter"
    }
});

document.getElementById('generateButton').addEventListener('click', generateUsername);

function generateUsername() {
    const inputName = userInput.value.trim();
    const finalUsername = 'X' + inputName + generateRandomNumbers();
    userNameDisplay.textContent = finalUsername;
    copyToClipboard(); // Copia al portapapeles después de generar el nombre de usuario
}

function copyToClipboard() {
    const message = "Paso a dejarte informacion! 🍀\n\n" +
                    "Carga minima 1000.\n" +
                    "Retiro minimo 2000\n" +
                    "Horario de pagos de 08am a 00:00pm\n\n" +
                    "Nombre de usuario: " + userNameDisplay.textContent + "\n" +
                    "Tu contraseña es: *hola123*\n\n" +
                    "Link para ingresar a jugar: Somos cas.rome https://jugalodos.com/\n\n" +
                    "*DE QUERER REALIZAR LA CARGA CONSULTAR CBU*";

    const el = document.createElement('textarea');
    el.value = message;
    el.setAttribute('readonly', ''); 
    el.style.position = 'absolute';
    el.style.left = '-9999px'; 
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    // Muestra un mensaje de confirmación
    alert("El mensaje ha sido copiado al portapapeles:\n\n" + message);
}

function generateRandomNumbers() {
    let randomNumbers = '';
    for (let i = 0; i < 3; i++) {
        randomNumbers += Math.floor(Math.random() * 10); 
    }
    return randomNumbers;
}

// Porcentajes
document.getElementById("fifteenButton").addEventListener("click", function() {
    sumarPorcentaje(15);
});

document.getElementById("twentyButton").addEventListener("click", function() {
    sumarPorcentaje(20);
});

document.getElementById("thirtyButton").addEventListener("click", function() {
    sumarPorcentaje(30);
});

function sumarPorcentaje(porcentaje) {
    var numberInput = document.getElementById("numberInput");
    var resultElement = document.getElementById("result");

    var numero = parseFloat(numberInput.value);

    if (!isNaN(numero)) {
        var porcentajeCalculado = numero * (porcentaje / 100);
        resultElement.textContent = numero + " + " + porcentajeCalculado.toFixed(2);
    } else {
        resultElement.textContent = "Por favor ingrese un número válido.";
    }
}
