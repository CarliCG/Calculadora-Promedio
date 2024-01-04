// Solicitar al usuario que ingrese el nombre y las notas
let nombreAlumno = prompt("Ingrese el nombre del alumno:");

let nota1 = parseFloat(prompt("Ingrese Nota 1 (entre 0 y 10):"));//// parseFloat convertir una cadena en un número con decimales

// Verificar que la primera nota sea un número válido y esté en el rango de 1 a 10
if (isNaN(nota1) || nota1 < 1 || nota1 > 10) {
    alert("Error en la primera nota: Debes ingresar un número válido de 1 a 10.");
} else {

    let nota2 = parseFloat(prompt("Ingrese Nota 2 (entre 0 y 10):")); // parseFloat convertir una cadena en un número con decimales
    // Verificar que la segunda nota sea un número válido y esté en el rango de 1 a 10
    if (isNaN(nota2) || nota2 < 1 || nota2 > 10) {
        alert("Error en la segunda nota: Debes ingresar un número válido de 1 a 10.");
    } else {

        let nota3 = parseFloat(prompt("Ingrese Nota 3 (entre 0 y 10):"));
        // Verificar que la tercera nota sea un número válido y esté en el rango de 1 a 10
        if (isNaN(nota3) || nota3 < 1 || nota3 > 10) {
            alert("Error en la tercera nota: Debes ingresar un número válido de 1 a 10.");
        } else {

            // Calcular el promedio de las tres notas
            let promedio = (nota1 + nota2 + nota3) / 3;
            // Evaluar si el promedio es mayor o igual a 7
            if (promedio >= 7) {
                alert(`${nombreAlumno}, ¡Felicidades! Has aprobado con un promedio de ${promedio.toFixed(1)}.`);
            } else {
                alert(`${nombreAlumno}, Gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es ${promedio.toFixed(1)}.`);
            }
        }
    }
}