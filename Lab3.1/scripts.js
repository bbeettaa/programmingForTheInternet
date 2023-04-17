function question() {
    var quiz = new Quiz();
    quiz.promptName();
    quiz.promptGroup();

    quiz.promptQuestion("У Javascript передбачено чотири різні способи виведення та отримання інформації від користувача.", false);
    quiz.promptQuestion("Метод alert, використовується для відображення вікна повідомлення.", true);
    quiz.promptQuestion("Метод confirm, відображає вікно повідомлення з кнопками ОК і Cancel.", true);
    quiz.promptQuestion("Метод confirm. Якщо користувач натискає кнопку ОК, то метод повертає значення '1', інакше повертається '0'.", false);
    quiz.promptQuestion("Метод prompt, дозволяє відображати повідомлення і текстове поле для введення користувачем інформації.", true);


    alert(quiz.getName() + " з групи " + quiz.getGroup() + " здав тест на " + quiz.getCorrectAnswer() / quiz.getAllQuestions() * quiz.getAllQuestions());
}

class Quiz {
    constructor() {
        this.questionNum = 1;
        this.correctAnswer = 0;
        this.allQuestions = 1;
    }

    promptName() {
        while (true) {
            this.name = prompt("Введіть ФІО:");
            if ((this.name != null && this.name != "")) {
                break;
            } else {
                alert("Потрібно ввести ФІО!");
            }
        }
    }

    promptGroup() {
        while (true) {
            this.group = prompt("Введіть групу:");
            if ((this.group != null && this.group != "") && isInt(this.group)) {
                break;
            } else {
                alert("Потрібно ввести цілочисельне значення!");
            }
        }
    }

    promptQuestion(message, rightAnswer) {
        if (confirm((this.questionNum++) + ") " + message) == rightAnswer) {
            this.correctAnswer++;
        }
        this.allQuestions++;
    }

    getCorrectAnswer() {
        return Number(this.correctAnswer);
    }

    getAllQuestions() {
        return Number(this.allQuestions);
    }

    getName() {
        return this.name;
    }

    getGroup() {
        return this.group;
    }
}



// Знайти всі непарні числа, в діапазоні від меншого до більшого з введених чисел, 
// які діляться без залишку на різницю: “менше з введених чисел - 5”.

function oddNumInRange() {
    var a = enterNegativeIntNum("Введіть перше від'ємне, ціле чиисло");
    if (a == null)
        return;
    var b = enterNegativeIntNum("Введіть друге від'ємне, ціле чиисло");
    if (b == null)
        return;

    if (b < a) {
        a = a + b;
        b = a - b;
        a = a - b;
    }

    var expression = a - 5;
    var array = [];

    for (var i = a; i <= b; i++) {
        if (isOdd(i) && (expression / i % 1 == 0)) {
            array.push(i);
        }
    }

    message = "Вводимі числа: '" + a + "' ; '" + b + "'\n";
    message += "Вираз: " + expression + "\n";
    message += "Масив: {" + array + "}";
    alert(message);


}

function enterNegativeIntNum(promtMessage) {
    var isIntNum = false;
    var isNegNum = false;

    while (!(isIntNum && isNegNum)) {
        var x = prompt(promtMessage, x);
        var error = "";

        if (x == null) {
            return null;
        }

        if (isInt(x)) {
            isIntNum = true;
        } else {
            error += "Число повинно бути цілочисельним!\n\n";
        }

        if (isNegative(x)) {
            isNegNum = true;
        } else {
            error += "Число повинно бути від'ємним!";
        }

        if (error != "") {
            alert(error);
        }
    }
    return Number(x);
}



function isOdd(n) {
    return Boolean(n & 1 == 1);
}

function isInt(n) {
    return n % 1 === 0;
}

function isNegative(n) {
    return Number(n.toString().replace(",", ".")).toFixed(0) < 0;
}