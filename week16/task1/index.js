function sumInput() {
    let numbers = [];
    let sum = 0;

    for (let i = 0;; i++) {
        numbers[i] = +prompt("Введите число", '');

        if (!numbers[i]) break;
        sum += numbers[i];
    }

    function compareNumbers(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    }

    numbers.sort(compareNumbers);
    alert(numbers)
    alert(sum);
}

sumInput()

