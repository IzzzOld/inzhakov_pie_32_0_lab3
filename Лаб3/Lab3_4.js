let a = 1.8;
let b = 3.3;
let x = Number(prompt("Введите x из предложенных: 3, 4, 6: "));
let y;

if (isNaN(x) || (x != 3 && x != 4 && x != 6)) {
    alert("Введите корректное значение x!");
}
else {
    switch(x) {
        case 3:
            y = (a * x + 1)**4;
            alert("Если x = 3, то y = (a * x + 1)**4 будет равняться: " + y + " при x = " + x);
            break
        case 4:
            y = (1) / (2 * x**2 + b * Math.log(x));
            alert("Если x = 4, то y = (1) / (2 * x**2 + b * log(x)) будет равняться: " + y + " при x = " + x);
            break
        case 6:
            y = (a * Math.cos(b + x)**2);
            alert("Если x = 6, то y = (a * cos(b + x)**2) будет равняться: " + y + " при x = " + x);
            break
}
}