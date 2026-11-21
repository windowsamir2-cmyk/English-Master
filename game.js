let gameQuestions = [];
let gameLevel = 0;
let gameLives = 6;
let gameScore = 0;
let gameAnswered = false;

function shuffleGameQuestions(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

function startAdventure() {
    gameQuestions = shuffleGameQuestions(quizData).slice(0, 15);

    gameLevel = 0;
    gameLives = 6;
    gameScore = 0;
    gameAnswered = false;

    renderAdventure();
}

function renderAdventure() {
    const content = document.getElementById("content");

    if (!content) return;

    if (gameLives <= 0) {
        finishAdventure(false);
        return;
    }

    if (gameLevel >= gameQuestions.length) {
        finishAdventure(true);
        return;
    }

    const q = gameQuestions[gameLevel];

    gameAnswered = false;

    content.style.display = "block";

    content.innerHTML = `
        <div class="question-card" style="direction:rtl;text-align:center">

            <h2 style="color:#c58aff">
                🔐 English Adventure
            </h2>

            <h3 style="color:white">
                آزمایشگاه مخفی
            </h3>

            <p style="color:#aaa;line-height:1.8">
                برای باز کردن درهای آزمایشگاه به سؤال‌ها پاسخ بده!
            </p>

            <div style="
                display:flex;
                justify-content:space-around;
                flex-wrap:wrap;
                gap:12px;
                margin:20px 0;
            ">
                <span style="color:#c58aff">
                    مرحله ${gameLevel + 1}/15
                </span>

                <span style="color:#ff6b7a">
                    ❤️ ${gameLives}
                </span>

                <span style="color:#35d68a">
                    ⭐ ${gameScore}
                </span>
            </div>

            <div style="
                height:7px;
                background:#30203e;
                border-radius:10px;
                margin:15px 0;
                overflow:hidden;
            ">
                <div style="
                    width:${(gameLevel / gameQuestions.length) * 100}%;
                    height:100%;
                    background:#a64dff;
                    border-radius:10px;
                    transition:width 0.3s;
                "></div>
            </div>

            <h3 style="
                color:white;
                direction:ltr;
                text-align:left;
                line-height:1.8;
                margin:25px 0;
            ">
                ${q.question}
            </h3>

            <div id="gameOptions" style="direction:ltr">
                ${q.options.map((option, index) => `
                    <button
                        onclick="answerAdventure(${index})"
                        style="width:100%;direction:ltr;text-align:left"
                    >
                        ${String.fromCharCode(65 + index)}) ${option}
                    </button>
                `).join("")}
            </div>

            <p id="gameFeedback" style="
                font-weight:bold;
                margin-top:20px;
                line-height:1.8;
            "></p>

            <button
                id="gameNext"
                onclick="nextAdventure()"
                style="display:none"
            >
                مرحله بعدی 🔓
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

function answerAdventure(index) {
    if (gameAnswered) return;

    const q = gameQuestions[gameLevel];

    if (!q || index < 0 || index >= q.options.length) return;

    gameAnswered = true;

    const buttons = document.querySelectorAll("#gameOptions button");
    const feedback = document.getElementById("gameFeedback");

    buttons.forEach(button => {
        button.disabled = true;
    });

    const correctIndex = q.options.indexOf(q.answer);

    if (q.options[index] === q.answer) {
        gameScore += 10;

        buttons[index].style.background = "#176b43";
        buttons[index].style.borderColor = "#35d68a";

        feedback.innerHTML = "آفرین! در آزمایشگاه باز شد! ✅";
        feedback.style.color = "#35d68a";

    } else {
        gameLives--;

        buttons[index].style.background = "#8b2635";
        buttons[index].style.borderColor = "#ff6b7a";

        if (correctIndex !== -1) {
            buttons[correctIndex].style.background = "#176b43";
            buttons[correctIndex].style.borderColor = "#35d68a";
        }

        feedback.innerHTML = `
            پاسخ اشتباه بود! ❌
            <br>
            جواب درست: ${q.answer}
            <br>
            یک جان کم شد!
        `;

        feedback.style.color = "#ff6b7a";
    }

    document.getElementById("gameNext").style.display = "block";
}

function nextAdventure() {
    if (!gameAnswered) return;

    if (gameLives <= 0) {
        finishAdventure(false);
        return;
    }

    gameLevel++;
    renderAdventure();
}

function finishAdventure(won) {
    const content = document.getElementById("content");

    if (!content) return;

    const percentage = won
        ? 100
        : Math.min(100, Math.round((gameLevel / gameQuestions.length) * 100));

    const endings = [
        {
            min: 0,
            max: 29,
            title: "🔍 ردپای مرموز",
            stories: [
                "هنوز نتوانستی وارد محوطه آزمایشگاه شوی. فقط چند ردپای عجیب کنار در ورودی پیدا کردی!",
                "به ورودی آزمایشگاه رسیدی، اما رمز در را پیدا نکردی. یک یادداشت مرموز روی زمین افتاده است!",
                "در اطراف آزمایشگاه گشتی زدی و یک کارت شناسایی قدیمی پیدا کردی."
            ]
        },
        {
            min: 30,
            max: 49,
            title: "🚪 اتاق اشتباهی",
            stories: [
                "وارد آزمایشگاه شدی، اما در اتاق اشتباهی قرار گرفتی! روی میز یک پرونده محرمانه وجود دارد.",
                "از در پشتی وارد شدی، اما به انبار قدیمی آزمایشگاه رسیدی. تمام قفسه‌ها پر از پرونده‌های ناشناخته‌اند!",
                "وارد ساختمان شدی، اما مسیر را اشتباه رفتی و به اتاق کنترل متروکه رسیدی!"
            ]
        },
        {
            min: 50,
            max: 69,
            title: "📁 پرونده‌های محرمانه",
            stories: [
                "به بخش تحقیقاتی رسیدی و چند مدرک مهم پیدا کردی، اما راز اصلی هنوز کشف نشده است!",
                "وارد اتاق دانشمندان شدی و دفترچه تحقیقات ادیسون را پیدا کردی. چند صفحه از آن گم شده است!",
                "به آزمایشگاه مرکزی رسیدی، اما درهای بخش اصلی هنوز قفل هستند. یک سرنخ مهم پیدا کردی!"
            ]
        },
        {
            min: 70,
            max: 89,
            title: "🧪 راز نزدیک است!",
            stories: [
                "به درب اصلی آزمایشگاه رسیدی و مدارک محرمانه را پیدا کردی، اما یک اتاق مخفی دیگر باقی مانده است!",
                "وارد بخش سری آزمایشگاه شدی و نقشه یک اختراع عجیب را پیدا کردی. ادامه نقشه در اتاق دیگری است!",
                "به اتاق اسناد رسیدی و بیشتر مدارک را پیدا کردی، اما یک پرونده مهم هنوز ناپدید است!"
            ]
        },
        {
            min: 90,
            max: 99,
            title: "🗝️ اتاق آخر",
            stories: [
                "وارد اتاق مخفی شدی و به کشف بزرگی نزدیک شدی، اما رمز آخر را پیدا نکردی!",
                "تقریباً تمام مدارک را جمع‌آوری کردی. فقط یک گاوصندوق مرموز باقی مانده است!",
                "به قلب آزمایشگاه رسیدی و راز اصلی را تقریباً فهمیدی، اما آخرین صفحه پرونده وجود ندارد!"
            ]
        },
        {
            min: 100,
            max: 100,
            title: "🏆 راز آزمایشگاه کشف شد!",
            stories: [
                "تمام مدارک را پیدا کردی! راز آزمایشگاه مخفی کشف شد و مأموریت با موفقیت به پایان رسید!",
                "به اتاق نهایی رسیدی و تمام پرونده‌های محرمانه را جمع‌آوری کردی. تو راز بزرگ آزمایشگاه را کشف کردی!",
                "تمام درها را باز کردی، اختراع مخفی را پیدا کردی و با موفقیت از آزمایشگاه خارج شدی!"
            ]
        }
    ];

    const ending = endings.find(item =>
        percentage >= item.min && percentage <= item.max
    );

    const story = ending.stories[
        Math.floor(Math.random() * ending.stories.length)
    ];

    content.innerHTML = `
        <div class="question-card" style="direction:rtl;text-align:center">

            <h2 style="color:#c58aff">
                ${ending.title}
            </h2>

            <div style="font-size:55px;margin:20px">
                ${percentage === 100 ? "🏆" : "🔐"}
            </div>

            <h3 style="color:white;line-height:2">
                ${story}
            </h3>

            <div style="
                margin:25px 0;
                padding:15px;
                background:#241531;
                border-radius:15px;
            ">

                <h2 style="color:#c58aff">
                    ${percentage}٪
                </h2>

                <p style="color:#aaa">
                    میزان پیشرفت مأموریت
                </p>

                <div style="
                    height:9px;
                    background:#30203e;
                    border-radius:10px;
                    overflow:hidden;
                ">
                    <div style="
                        width:${percentage}%;
                        height:100%;
                        background:#a64dff;
                        border-radius:10px;
                    "></div>
                </div>

                <h2 style="color:#35d68a;margin-top:20px">
                    ⭐ ${gameScore}
                </h2>

                <p style="color:#aaa">
                    امتیاز نهایی
                </p>

                <p style="color:#aaa">
                    تعداد مراحل پاسخ‌داده‌شده: ${gameLevel + (won ? 0 : 1)} از 15
                </p>

            </div>

            <button onclick="startAdventure()">
                شروع دوباره 🔄
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

const previousOpenSection = window.openSection;

window.openSection = function(section) {
    if (section === "game") {
        document.querySelector(".welcome").style.display = "none";
        document.querySelector(".menu").style.display = "none";

        startAdventure();
        return;
    }

    previousOpenSection(section);
};