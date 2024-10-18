let A = prompt("Введите целое число: ");
let B = prompt("Введите целое число: ");
A = parseFloat(A);
B = parseFloat(B);

if (isNaN(A) || isNaN(B)) {
    alert("Пожалуйста, введите корректные числа");
} 
else {
    if (A % 2 === 1 || B % 2 === 1) {
        alert("Первое число: " + A + ", второе число: " + B + " = TRUE");
    } 
    else {
        alert("Первое число: " + A + ", второе число: " + B + " = FALSE");
    }
}






