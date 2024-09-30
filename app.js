var quiz = {
    "JS": [
        {
            "id": 1,
            "question": "What is the difference between '==' and '===' in JavaScript?",
            "options": [
                {
                    "a": "'==' compares value, '===' compares both value and type",
                    "b": "'==' compares both value and type, '===' compares value only",
                    "c": "There is no difference",
                    "d": "'===' is only used in strict mode"
                }
            ],
            "answer": "'==' compares value, '===' compares both value and type",
            "score": 0,
            "status": ""
        },
        {
            "id": 2,
            "question": "What is the purpose of closures in JavaScript?",
            "options": [
                {
                    "a": "To create private variables and functions",
                    "b": "To store functions in memory",
                    "c": "To manage global variables",
                    "d": "To avoid callbacks"
                }
            ],
            "answer": "To create private variables and functions",
            "score": 0,
            "status": ""
        },
        {
            "id": 3,
            "question": "How does JavaScript handle asynchronous code execution?",
            "options": [
                {
                    "a": "Using the call stack",
                    "b": "With an event loop and callback queue",
                    "c": "With synchronous execution only",
                    "d": "Using promises and async/await"
                }
            ],
            "answer": "With an event loop and callback queue",
            "score": 0,
            "status": ""
        },
        {
            "id": 4,
            "question": "Which of the following is not a way to handle asynchronous JavaScript?",
            "options": [
                {
                    "a": "Callbacks",
                    "b": "Promises",
                    "c": "Async/await",
                    "d": "Synchronous loops"
                }
            ],
            "answer": "Synchronous loops",
            "score": 0,
            "status": ""
        },
        {
            "id": 5,
            "question": "How do you prevent 'this' keyword from being redefined inside a callback?",
            "options": [
                {
                    "a": "Use 'bind()' to bind 'this' to the function",
                    "b": "Use 'call()' to bind 'this' to the function",
                    "c": "Use arrow functions",
                    "d": "All of the above"
                }
            ],
            "answer": "All of the above",
            "score": 0,
            "status": ""
        },
        {
            "id": 6,
            "question": "What is the purpose of the 'async' keyword in JavaScript?",
            "options": [
                {
                    "a": "To mark a function as asynchronous",
                    "b": "To make a function return a promise",
                    "c": "To enable 'await' inside the function",
                    "d": "All of the above"
                }
            ],
            "answer": "All of the above",
            "score": 0,
            "status": ""
        },
        {
            "id": 7,
            "question": "What is the difference between 'let', 'var', and 'const'?",
            "options": [
                {
                    "a": "'let' and 'const' have block scope, 'var' has function scope",
                    "b": "'const' can be reassigned, 'let' and 'var' cannot",
                    "c": "'var' has block scope, 'let' and 'const' have function scope",
                    "d": "'let' is used for constants, 'const' for variables"
                }
            ],
            "answer": "'let' and 'const' have block scope, 'var' has function scope",
            "score": 0,
            "status": ""
        },
        {
            "id": 8,
            "question": "What is the output of the following code? \n\nconsole.log(typeof NaN);",
            "options": [
                {
                    "a": "'undefined'",
                    "b": "'number'",
                    "c": "'NaN'",
                    "d": "'object'"
                }
            ],
            "answer": "'number'",
            "score": 0,
            "status": ""
        },
        {
            "id": 9,
            "question": "How can you optimize the performance of large-scale JavaScript applications?",
            "options": [
                {
                    "a": "Debouncing and throttling event listeners",
                    "b": "Using lazy loading for images and scripts",
                    "c": "Using web workers for heavy computation",
                    "d": "All of the above"
                }
            ],
            "answer": "All of the above",
            "score": 0,
            "status": ""
        },
        {
            "id": 10,
            "question": "What is the purpose of the 'prototype' in JavaScript?",
            "options": [
                {
                    "a": "To define methods that are shared among all instances of an object",
                    "b": "To create new classes",
                    "c": "To improve code reusability",
                    "d": "Both A and C"
                }
            ],
            "answer": "Both A and C",
            "score": 0,
            "status": ""
        }
    ]
};

var quizApp = function () {
    this.score = 0;
    this.qno = 1;
    this.currentque = 0;
    var totalque = quiz.JS.length;
    this.displayQuiz = function (cque) {
        this.currentque = cque;
        if (this.currentque < totalque) {
            $("#tque").html(totalque);
            $("#previous").attr("disabled", false);
            $("#next").attr("disabled", false);
            $("#qid").html(quiz.JS[this.currentque].id + '.');
            $("#question").html(quiz.JS[this.currentque].question);
            $("#question-options").html("");
            for (var key in quiz.JS[this.currentque].options[0]) {
                if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
                    $("#question-options").append(
                        "<div class='form-check option-block'>" +
                        "<label class='form-check-label'>" +
                        "<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
                        quiz.JS[this.currentque].options[0][key] +
                        "</span></label>"
                    );
                }
            }
        }
        if (this.currentque <= 0) {
            $("#previous").attr("disabled", true);
        }
        if (this.currentque >= totalque) {
            $('#next').attr('disabled', true);
            for (var i = 0; i < totalque; i++) {
                this.score = this.score + quiz.JS[i].score;
            }
            return this.showResult(this.score);
        }
    }
    this.showResult = function (scr) {
        $("#result").addClass('result');
        $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
        for (var j = 0; j < totalque; j++) {
            var res;
            if (quiz.JS[j].score == 0) {
                res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
            } else {
                res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
            }
            $("#result").append(
                '<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
                '<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
                '<div class="last-row"><b>Score:</b> &nbsp;' + res +
                '</div>'
            );
        }
    }
    this.checkAnswer = function (option) {
        var answer = quiz.JS[this.currentque].answer;
        option = option.replace(/</g, "&lt;") //for <
        option = option.replace(/>/g, "&gt;") //for >
        option = option.replace(/"/g, "&quot;")
        if (option == quiz.JS[this.currentque].answer) {
            if (quiz.JS[this.currentque].score == "") {
                quiz.JS[this.currentque].score = 1;
                quiz.JS[this.currentque].status = "correct";
            }
        } else {
            quiz.JS[this.currentque].status = "wrong";
        }
    }
    this.changeQuestion = function (cque) {
        this.currentque = this.currentque + cque;
        this.displayQuiz(this.currentque);
    }
}
var jsq = new quizApp();
var selectedopt;
$(document).ready(function () {
    jsq.displayQuiz(0);
    $('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
        //var radio = $(this).find('input:radio');
        $(this).prop("checked", true);
        selectedopt = $(this).val();
    });
});
$('#next').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
        jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(1);
});
$('#previous').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
        jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(-1);
});