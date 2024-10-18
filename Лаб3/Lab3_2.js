let A = prompt("Введите число вещественного типа: ");
let B = prompt("Введите число вещественного типа: ");
A = parseFloat(A);
B = parseFloat(B);

if (isNaN(A) || isNaN(B)) { // isNaN проверяет, является ли значение числом
    alert("Пожалуйста, введите корректные числа");
} 
else {
    if (A > B) {
        let swap = A;
        A = B;
        B = swap;
    }

alert("Новое значение A: " + A + ", новое значение B: " + B);
}






