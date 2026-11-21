const quizData = [
    {
        question: "What is the meaning of 'tries'?",
        options: ["فراموش می‌کند", "تلاش می‌کند", "اختراع می‌کند", "متوقف می‌شود"],
        answer: "تلاش می‌کند"
    },
    {
        question: "What does 'energetic' mean?",
        options: ["خسته", "ضعیف", "پرانرژی", "آرام"],
        answer: "پرانرژی"
    },
    {
        question: "What is the meaning of 'do experiments'?",
        options: ["آزمایش انجام دادن", "کتاب خواندن", "بازی کردن", "استراحت کردن"],
        answer: "آزمایش انجام دادن"
    },
    {
        question: "What does 'grow up' mean?",
        options: ["توقف کردن", "بزرگ شدن", "فراموش کردن", "شروع کردن"],
        answer: "بزرگ شدن"
    },
    {
        question: "What is the meaning of 'doing research'?",
        options: ["بازی کردن", "تحقیق کردن", "استراحت کردن", "تدریس کردن"],
        answer: "تحقیق کردن"
    },
    {
        question: "What does 'feels weak' mean?",
        options: ["احساس شادی می‌کند", "احساس ضعف می‌کند", "تلاش می‌کند", "بزرگ می‌شود"],
        answer: "احساس ضعف می‌کند"
    },
    {
        question: "What is the meaning of 'success'?",
        options: ["شکست", "آزمایش", "موفقیت", "باور"],
        answer: "موفقیت"
    },
    {
        question: "What does 'invented' mean?",
        options: ["اختراع کرد", "توسعه داد", "ترک کرد", "حل کرد"],
        answer: "اختراع کرد"
    },
    {
        question: "What is the meaning of 'solve'?",
        options: ["اختراع کردن", "حل کردن", "تلاش کردن", "ترک کردن"],
        answer: "حل کردن"
    },
    {
        question: "What does 'develop' mean?",
        options: ["فراموش کردن", "متوقف کردن", "توسعه دادن", "احساس کردن"],
        answer: "توسعه دادن"
    },
    {
        question: "What is the meaning of 'belief'?",
        options: ["موفقیت", "آزمایش", "باور و اعتقاد", "اختراع"],
        answer: "باور و اعتقاد"
    },
    {
        question: "What does 'quit' mean?",
        options: ["ادامه دادن", "ترک کردن و دست کشیدن", "توسعه دادن", "حل کردن"],
        answer: "ترک کردن و دست کشیدن"
    },
    {
        question: "What is the meaning of 'thousands of'?",
        options: ["چند عدد", "یک عدد", "هزاران", "هیچ‌کدام"],
        answer: "هزاران"
    },
    {
        question: "What was Thomas Edison interested in?",
        options: ["Music", "Science", "Sports", "Cooking"],
        answer: "Science"
    },
    {
        question: "At what age did Edison lose his hearing?",
        options: ["At age 5", "At age 12", "At age 20", "At age 30"],
        answer: "At age 12"
    },
    {
        question: "How did Edison learn about science?",
        options: [
            "By reading library books",
            "By watching television",
            "By playing games",
            "By traveling"
        ],
        answer: "By reading library books"
    },
    {
        question: "What did Edison do thousands of?",
        options: ["Experiments", "Sports", "Trips", "Lessons"],
        answer: "Experiments"
    },
    {
        question: "How many inventions did Edison have approximately?",
        options: ["More than 1000", "About 100", "About 10", "About 50"],
        answer: "More than 1000"
    },
    {
        question: "How did Edison find answers to problems?",
        options: ["By guessing", "By doing experiments", "By sleeping", "By playing"],
        answer: "By doing experiments"
    },
    {
        question: "Who discovered penicillin?",
        options: [
            "Thomas Edison",
            "Alexander Fleming",
            "Tahereh Saffarzadeh",
            "Albert Einstein"
        ],
        answer: "Alexander Fleming"
    },
    {
        question: "Which structure forms the Past Progressive tense?",
        options: [
            "Was/Were + verb-ing",
            "Have/Has + verb",
            "Will + verb",
            "Do/Does + verb"
        ],
        answer: "Was/Were + verb-ing"
    },
    {
        question: "Which sentence is in the Past Progressive tense?",
        options: [
            "I study English.",
            "I was studying English.",
            "I will study English.",
            "I have studied English."
        ],
        answer: "I was studying English."
    },
    {
        question: "Which sentence is negative in the Past Progressive tense?",
        options: [
            "She wasn't sleeping.",
            "She doesn't sleep.",
            "She didn't sleep.",
            "She won't sleep."
        ],
        answer: "She wasn't sleeping."
    },
    {
        question: "Which word correctly completes this sentence: They ___ playing football?",
        options: ["was", "were", "is", "am"],
        answer: "were"
    },
    {
        question: "Which word correctly completes this sentence: He ___ reading a book?",
        options: ["were", "are", "was", "am"],
        answer: "was"
    },
    {
        question: "Which sentence is a Past Progressive question?",
        options: [
            "Were you studying?",
            "Do you study?",
            "Are you studying?",
            "Will you study?"
        ],
        answer: "Were you studying?"
    },
    {
        question: "Which reflexive pronoun is used with 'I'?",
        options: ["Himself", "Myself", "Yourself", "Ourselves"],
        answer: "Myself"
    },
    {
        question: "Which reflexive pronoun is used with 'He'?",
        options: ["Herself", "Itself", "Himself", "Themselves"],
        answer: "Himself"
    },
    {
        question: "Which reflexive pronoun is used with 'She'?",
        options: ["Herself", "Himself", "Myself", "Yourself"],
        answer: "Herself"
    },
    {
        question: "Which reflexive pronoun is used with 'We'?",
        options: ["Themselves", "Ourselves", "Yourself", "Itself"],
        answer: "Ourselves"
    },
    {
        question: "Which reflexive pronoun is used with 'They'?",
        options: ["Myself", "Himself", "Themselves", "Itself"],
        answer: "Themselves"
    },
    {
        question: "What do action verbs describe?",
        options: [
            "Actions",
            "Only feelings",
            "Only thoughts",
            "Only senses"
        ],
        answer: "Actions"
    },
    {
        question: "What do state verbs usually describe?",
        options: [
            "Feelings, thoughts and senses",
            "Only physical actions",
            "Only sports",
            "Only movement"
        ],
        answer: "Feelings, thoughts and senses"
    },
    {
        question: "Which of these is an action verb?",
        options: ["Believe", "Love", "Write", "Know"],
        answer: "Write"
    },
    {
        question: "Which of these is a state verb?",
        options: ["Run", "Write", "Believe", "Play"],
        answer: "Believe"
    },
    {
        question: "Which sentence is grammatically correct?",
        options: [
            "I am knowing the answer.",
            "I know the answer.",
            "I knowing the answer.",
            "I knows the answer."
        ],
        answer: "I know the answer."
    },
    {
        question: "Which sentence describes an action happening now?",
        options: [
            "She watches TV every day.",
            "She is watching TV now.",
            "She watched TV yesterday.",
            "She will watch TV tomorrow."
        ],
        answer: "She is watching TV now."
    },
    {
        question: "What does 'narrating a story' mean?",
        options: [
            "Telling a story",
            "Writing a letter",
            "Asking a question",
            "Reading a dictionary"
        ],
        answer: "Telling a story"
    },
    {
        question: "What does Past Progressive describe in a story?",
        options: [
            "Background actions",
            "Future plans",
            "Daily habits",
            "General facts"
        ],
        answer: "Background actions"
    },
    {
        question: "What did the family hear in the story?",
        options: ["A noise", "Music", "A song", "A phone call"],
        answer: "A noise"
    },
    {
        question: "What did the family find in the kitchen?",
        options: ["A hungry kitten", "A dog", "A bird", "A rabbit"],
        answer: "A hungry kitten"
    },
    {
        question: "What was the kitten eating?",
        options: ["An apple", "A cookie", "Cheese", "Bread"],
        answer: "A cookie"
    },
    {
        question: "What is emphatic stress?",
        options: [
            "Giving special emphasis to a word",
            "Speaking very quietly",
            "Speaking without pauses",
            "Changing word order"
        ],
        answer: "Giving special emphasis to a word"
    }
];

let currentQuestions = [];
let currentQuestion = 0;
let score = 0;
let answered = false;

function shuffleQuestions(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

function startQuiz() {
    currentQuestions = shuffleQuestions(quizData).slice(0, 10);

    currentQuestion = 0;
    score = 0;
    answered = false;

    renderQuiz();
}

function renderQuiz() {
    const content = document.getElementById("content");

    if (!content) return;

    if (currentQuestion >= currentQuestions.length) {
        finishQuiz();
        return;
    }

    const q = currentQuestions[currentQuestion];

    answered = false;
    content.style.display = "block";

    content.innerHTML = `
        <div class="question-card" style="direction:ltr;text-align:left">

            <h2 style="color:#c58aff;text-align:center">
                English Quiz
            </h2>

            <p style="color:#aaa;text-align:center">
                Question ${currentQuestion + 1} of ${currentQuestions.length}
            </p>

            <div style="height:7px;background:#30203e;border-radius:10px;margin:15px 0;overflow:hidden">
                <div style="
                    width:${((currentQuestion + 1) / currentQuestions.length) * 100}%;
                    height:100%;
                    background:#a64dff;
                    border-radius:10px;
                    transition:width 0.3s;
                "></div>
            </div>

            <h3 style="
                color:white;
                margin:25px 0;
                direction:ltr;
                text-align:left;
                line-height:1.7;
            ">
                ${q.question}
            </h3>

            <div id="quizOptions">
                ${q.options.map((option, index) => `
                    <button
                        onclick="answerQuiz(this, ${index})"
                        style="direction:ltr;text-align:left;width:100%;"
                    >
                        ${String.fromCharCode(65 + index)}) ${option}
                    </button>
                `).join("")}
            </div>

            <p id="quizFeedback" style="
                margin-top:20px;
                font-weight:bold;
                text-align:center;
                direction:rtl;
                line-height:1.8;
            "></p>

            <button
                id="nextQuestion"
                onclick="nextQuizQuestion()"
                style="display:none"
            >
                سؤال بعدی
            </button>

            <button
                onclick="showHome()"
                style="background:#30203e;border-color:#555"
            >
                بازگشت به صفحه اصلی
            </button>

        </div>
    `;
}

function answerQuiz(button, selectedIndex) {
    if (answered) return;

    const q = currentQuestions[currentQuestion];

    if (!q || selectedIndex < 0 || selectedIndex >= q.options.length) {
        return;
    }

    answered = true;

    const buttons = document.querySelectorAll("#quizOptions button");
    const feedback = document.getElementById("quizFeedback");

    buttons.forEach((btn, index) => {
        btn.disabled = true;

        if (q.options[index] === q.answer) {
            btn.style.background = "#176b43";
            btn.style.borderColor = "#35d68a";
        }
    });

    if (q.options[selectedIndex] === q.answer) {
        score++;

        feedback.innerHTML = "پاسخ درست است! ✅";
        feedback.style.color = "#35d68a";

    } else {
        feedback.innerHTML = `
            پاسخ اشتباه است! ❌
            <br>
            جواب درست: ${q.answer}
        `;

        feedback.style.color = "#ff6b7a";

        button.style.background = "#8b2635";
        button.style.borderColor = "#ff6b7a";
    }

    document.getElementById("nextQuestion").style.display = "block";
}

function nextQuizQuestion() {
    if (!answered) return;

    currentQuestion++;

    renderQuiz();
}

function finishQuiz() {
    const content = document.getElementById("content");

    if (!content) return;

    content.innerHTML = `
        <div class="question-card" style="direction:rtl;text-align:center">

            <h2 style="color:#c58aff">
                نتیجه آزمون
            </h2>

            <h1 style="font-size:55px;color:#a64dff">
                ${score}/${currentQuestions.length}
            </h1>

            <h3 style="color:white">
                ${
                    score >= 9 ? "فوق‌العاده! 🌟" :
                    score >= 7 ? "آفرین! خیلی خوب بود 👏" :
                    score >= 5 ? "خوبه! ادامه بده 💪" :
                    "نیاز به تمرین بیشتری داری ❤️"
                }
            </h3>

            <p style="color:#ccc;line-height:2">
                پاسخ درست: ${score}
                <br>
                پاسخ نادرست: ${currentQuestions.length - score}
            </p>

            <button onclick="startQuiz()">
                آزمون جدید 🔄
            </button>

            <button
                onclick="showHome()"
                style="background:#30203e"
            >
                بازگشت به صفحه اصلی
            </button>

        </div>
    `;
}

const oldOpenSection = window.openSection;

window.openSection = function(section) {
    if (section === "quiz") {
        document.querySelector(".welcome").style.display = "none";
        document.querySelector(".menu").style.display = "none";

        startQuiz();
        return;
    }

    oldOpenSection(section);
};