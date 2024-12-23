const questions = [
    { question: "我的生日是什麼時候？", options: ["3月3號", "12月19號", "2月30號", "8月27號"], correct: "3月3號" },
    { question: "一起回文化的時間？", options: ["10月9號", "10月29號", "10月11號", "10月12號"], correct: "10月11號" },
    { question: "最喜歡的特戰造型？", options: ["蓋亞", "妳拿給我的混沌", "我拿給妳的混沌", "我用過的混沌"], correct: "妳拿給我的混沌" },
    { question: "詞歌的車風色白是不出選？", options: ["手著牽手會不會", "福幸這完走快太想不我為因", "後最到走妳揹我", "獨辜不併你當"], correct: "獨辜不併你當" },
    { question: "哪一句話是我想對妳說的？", options: ["如果這個世界上有比愛妳更重要的，那一定是學會怎麼讓妳更快樂", "無論未來有多少挑戰，只要和妳一起，所有的困難都變得微不足道", 
        "我覺得自己很幸運，能夠在這個世界上遇到你，並且陪伴在你身邊", "以上的每一句都是想對妳說的話，有妳在身邊，哪怕是最平凡的日子也變得有意義"], correct: "以上的每一句都是想對妳說的話，有妳在身邊，哪怕是最平凡的日子也變得有意義" },
];

let currentQuestionIndex = 0;
let currentPyramidLevel = 0;

function loadQuestion() {
    const questionBox = document.getElementById("question-box");
    const questionText = document.getElementById("question");
    const optionsContainer = questionBox.querySelector(".options");

    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correct) {
        addChocolateLayer();
        currentQuestionIndex++;

        if (currentQuestionIndex >= questions.length) {
            alert("恭喜~完成了巧克力金字塔！");
            displayChristmasMessage();
            return;
        }

        loadQuestion();
    } else {
        alert("回答錯誤！請再試一次。");
    }
}

function addChocolateLayer() {
    const pyramid = document.getElementById("pyramid");
    const layer = document.createElement("div");
    layer.style.display = "flex";
    layer.style.justifyContent = "center";
    layer.style.gap = "10px";

    const chocolatesInLayer = currentPyramidLevel + 1;

    for (let i = 0; i < chocolatesInLayer; i++) {
        const chocolate = document.createElement("div");
        chocolate.classList.add("chocolate");
        layer.appendChild(chocolate);
    }

    pyramid.prepend(layer);
    currentPyramidLevel++;
}

function displayChristmasMessage() {
    const container = document.querySelector(".container");
    container.innerHTML = "";

    const message = document.createElement("div");
    message.className = "christmas-message";
    message.textContent = "聖誕節快樂！";

    container.appendChild(message);
}

function createSnowflakes() {
    const snowfall = document.getElementById("snowfall");
    for (let i = 0; i < 150; i++) {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        snowflake.textContent = "❄"; // 雪花符號
        snowflake.style.left = Math.random() * 100 + "vw";
        snowflake.style.animationDuration = Math.random() * 11 + 2.5 + "s";
        snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
        snowflake.style.opacity = Math.random();
        snowfall.appendChild(snowflake);
    }
}

// 啟動下雪效果
createSnowflakes();
window.onload = loadQuestion;