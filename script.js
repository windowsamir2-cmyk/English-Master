const vocabulary = [
    ["tries", "تلاش می‌کند"],
    ["energetic", "پرانرژی"],
    ["do experiments", "آزمایش انجام دادن"],
    ["grow up", "بزرگ شدن"],
    ["doing research", "تحقیق کردن"],
    ["feels weak", "احساس ضعف می‌کند"],
    ["success", "موفقیت"],
    ["invented", "اختراع کرد"],
    ["solve", "حل کردن"],
    ["develop", "توسعه دادن"],
    ["belief", "باور، اعتقاد"],
    ["quit / give up", "ترک کردن، دست کشیدن"],
    ["thousands of", "هزاران"],
    ["knowledge", "دانش"],
    ["famous", "مشهور"],
    ["medicine", "دارو، پزشکی"],
    ["useful", "مفید"],
    ["interesting", "جالب"],
    ["lives", "زندگی‌ها"],
    ["hospital", "بیمارستان"],
    ["observatory", "رصدخانه"],
    ["planets", "سیاره‌ها"],
    ["library", "کتابخانه"],
    ["laboratory", "آزمایشگاه"],
    ["students", "دانش‌آموزان"],
    ["children", "کودکان"],
    ["rapidly", "به‌سرعت"],
    ["blood cells", "سلول‌های خونی"],
    ["flu", "آنفولانزا"],
    ["possible", "ممکن"],
    ["without", "بدون"],
    ["hard work", "کار سخت"],
    ["light bulb", "لامپ"],
    ["scientists", "دانشمندان"],
    ["find answers", "پاسخ‌ها را پیدا کردن"]
];


function openSection(section) {

    const welcome = document.querySelector(".welcome");
    const menu = document.querySelector(".menu");
    const content = document.getElementById("content");

    welcome.style.display = "none";
    menu.style.display = "none";

    if (section === "vocabulary") {

        content.innerHTML = `
            <button class="back-button" onclick="showHome()">بازگشت به صفحه اصلی</button>

            <h2>Vocabulary</h2>
            <p class="subtitle">آموزش لغات درس اول</p>

            <div class="word-grid">
                ${vocabulary.map((item, index) => `
                    <div class="word-card">
                        <span class="word-number">${index + 1}</span>
                        <h3>${item[0]}</h3>
                        <p>${item[1]}</p>
                    </div>
                `).join("")}
            </div>
        `;
    }

    else if (section === "reading") {

        content.innerHTML = `
            <button class="back-button" onclick="showHome()">بازگشت به صفحه اصلی</button>

            <h2>Reading</h2>
            <p class="subtitle">متن و درک مطلب</p>

            <div class="reading-card">
                <h3>The Value of Hard Work</h3>

                <p>
                    Scientists work hard to discover facts,
                    solve problems and invent new things.
                    Their success comes from hard work
                    and never giving up.
                </p>

                <p>
                    Thomas Edison was interested in science
                    when he was a young boy. He lost his
                    hearing at the age of twelve, but he
                    continued learning by reading books
                    in the library.
                </p>

                <p>
                    Edison did thousands of experiments
                    and had more than one thousand inventions.
                    He never quit until he achieved his goals.
                </p>
            </div>

            <h3 class="translation-title">ترجمه فارسی</h3>

            <div class="reading-card persian">
                <p>
                    دانشمندان برای کشف حقایق، حل مشکلات و
                    اختراع چیزهای جدید سخت تلاش می‌کنند.
                    موفقیت آن‌ها نتیجه تلاش و تسلیم نشدن است.
                </p>

                <p>
                    توماس ادیسون در کودکی به علم علاقه داشت.
                    او در دوازده‌سالگی شنوایی خود را از دست داد،
                    اما با خواندن کتاب در کتابخانه به یادگیری ادامه داد.
                </p>

                <p>
                    ادیسون هزاران آزمایش انجام داد و بیش از
                    هزار اختراع داشت. او تا رسیدن به هدفش
                    دست از تلاش برنداشت.
                </p>
            </div>

            <h3 class="translation-title">Reading Comprehension | درک مطلب</h3>

            <div class="question-card">
                <p>1. Where did Edison learn science?</p>
                <button onclick="checkAnswer(this, false)">At school</button>
                <button onclick="checkAnswer(this, true)">In the library</button>
                <button onclick="checkAnswer(this, false)">At home</button>
            </div>

            <div class="question-card">
                <p>2. How did Edison find answers to problems?</p>
                <button onclick="checkAnswer(this, false)">By sleeping</button>
                <button onclick="checkAnswer(this, true)">By doing experiments</button>
                <button onclick="checkAnswer(this, false)">By giving up</button>
            </div>

            <div class="question-card">
                <p>3. What is the key to scientists' success?</p>
                <button onclick="checkAnswer(this, true)">Hard work</button>
                <button onclick="checkAnswer(this, false)">Luck</button>
                <button onclick="checkAnswer(this, false)">Money</button>
            </div>
        `;
    }

    else if (section === "grammar") {

        content.innerHTML = `
            <button class="back-button" onclick="showHome()">بازگشت به صفحه اصلی</button>

            <h2>Grammar</h2>
            <p class="subtitle">آموزش گرامر درس اول</p>

            <div class="reading-card">
                <h3>1. Past Progressive</h3>
                <p>گذشته استمراری</p>
                <p><b>Structure:</b> Subject + was/were + Verb-ing</p>
                <p>I was studying.</p>
                <p>They were playing.</p>
                <p>She wasn't reading.</p>
                <p>Were you working?</p>
            </div>

            <div class="reading-card">
                <h3>2. Self Pronouns</h3>
                <p>ضمیرهای انعکاسی</p>
                <p>I → myself</p>
                <p>You → yourself</p>
                <p>He → himself</p>
                <p>She → herself</p>
                <p>It → itself</p>
                <p>We → ourselves</p>
                <p>You → yourselves</p>
                <p>They → themselves</p>
            </div>

            <div class="reading-card">
                <h3>3. Action Verbs</h3>
                <p>فعل‌هایی که یک عمل را نشان می‌دهند.</p>
                <p>He is writing a letter.</p>
                <p>My brother drinks milk.</p>
            </div>

            <div class="reading-card">
                <h3>4. State Verbs</h3>
                <p>فعل‌هایی که حالت، احساس یا فکر را نشان می‌دهند.</p>
                <p>We believe in Allah.</p>
                <p>We love our country.</p>
                <p>She feels happy.</p>
            </div>

            <div class="reading-card">
                <h3>Simple and Continuous Forms</h3>
                <p>برای فعل‌های عملی می‌توان از شکل ساده یا استمراری استفاده کرد.</p>
                <p>I cleaned my room yesterday.</p>
                <p>I am cleaning my room now.</p>
                <br>
                <p>فعل‌های حالتی معمولاً به شکل ساده استفاده می‌شوند.</p>
                <p>I don't know the name.</p>
                <p>Kids love chocolate.</p>
            </div>

            <h2 class="translation-title">Grammar Quiz | آزمون گرامر</h2>

            <div class="question-card">
                <p>1. She _____ studying yesterday.</p>
                <button onclick="checkAnswer(this, false)">were</button>
                <button onclick="checkAnswer(this, true)">was</button>
                <button onclick="checkAnswer(this, false)">are</button>
            </div>

            <div class="question-card">
                <p>2. Self pronoun of He is:</p>
                <button onclick="checkAnswer(this, false)">herself</button>
                <button onclick="checkAnswer(this, false)">yourself</button>
                <button onclick="checkAnswer(this, true)">himself</button>
            </div>

            <div class="question-card">
                <p>3. Which one is a State Verb?</p>
                <button onclick="checkAnswer(this, true)">Believe</button>
                <button onclick="checkAnswer(this, false)">Run</button>
                <button onclick="checkAnswer(this, false)">Write</button>
            </div>

            <div class="question-card">
                <p>4. Kids _____ chocolate.</p>
                <button onclick="checkAnswer(this, true)">love</button>
                <button onclick="checkAnswer(this, false)">are loving</button>
            </div>
        `;
    }

    else if (section === "speaking") {

        content.innerHTML = `
            <button class="back-button" onclick="showHome()">بازگشت به صفحه اصلی</button>

            <h2>Speaking</h2>
            <p class="subtitle">مکالمه و داستان‌گویی</p>

            <div class="reading-card">
                <h3>Narrating a Story</h3>

                <p>
                    Last night at 8 o'clock, we were sitting
                    in the hall. We were talking about our day.
                    Suddenly, we heard a noise.
                    My father went out to see what was making
                    the noise.
                </p>

                <p>
                    When my father was walking in the yard,
                    we went to the kitchen.
                    We saw a kitty in the kitchen.
                    It was eating a cookie.
                    The poor kitty was hungry.
                </p>
            </div>

            <h3 class="translation-title">ترجمه فارسی</h3>

            <div class="reading-card persian">
                <p>
                    دیشب ساعت هشت، ما در سالن نشسته بودیم.
                    درباره روزمان صحبت می‌کردیم.
                    ناگهان صدایی شنیدیم.
                    پدرم بیرون رفت تا ببیند چه چیزی باعث آن صدا شده است.
                </p>

                <p>
                    وقتی پدرم در حیاط قدم می‌زد،
                    ما به آشپزخانه رفتیم.
                    یک بچه‌گربه در آشپزخانه دیدیم.
                    داشت یک کلوچه می‌خورد.
                    آن بچه‌گربه بیچاره گرسنه بود.
                </p>
            </div>

            <div class="reading-card">
                <h3>نکته آموزشی</h3>
                <p><b>Past Progressive:</b> برای بیان کاری که در گذشته در حال انجام بوده است.</p>
                <p><b>Simple Past:</b> برای بیان اتفاقی که در گذشته رخ داده است.</p>
                <p>I was studying when my friend called.</p>
                <p>وقتی دوستم زنگ زد، داشتم درس می‌خواندم.</p>
            </div>

            <h3 class="translation-title">تمرین مکالمه</h3>

            <div class="question-card">
                <p>What were you doing yesterday at 8?</p>
                <p>دیروز ساعت ۸ مشغول چه کاری بودی؟</p>

                <button onclick="this.nextElementSibling.innerHTML='I was studying. (داشتم درس می‌خواندم.)'">
                    نمایش نمونه پاسخ
                </button>

                <p></p>
            </div>

            <div class="question-card">
                <p>What was happening yesterday at 8?</p>
                <p>دیروز ساعت ۸ چه اتفاقی در حال رخ دادن بود؟</p>

                <button onclick="this.nextElementSibling.innerHTML='My family was watching TV. (خانواده‌ام در حال تماشای تلویزیون بودند.)'">
                    نمایش نمونه پاسخ
                </button>

                <p></p>
            </div>
        `;
    }

    else if (section === "writing") {

        content.innerHTML = `
            <button class="back-button" onclick="showHome()">بازگشت به صفحه اصلی</button>

            <h2>Writing</h2>
            <p class="subtitle">آموزش نوشتن - درس اول</p>

            <div class="reading-card">
                <h3>1. Verb</h3>
                <p>فعل کلمه‌ای است که یک عمل یا حالت را بیان می‌کند.</p>
                <p><b>A verb expresses an action or a state of being.</b></p>
            </div>

            <div class="reading-card">
                <h3>2. Action Verbs</h3>
                <p>فعل‌های عملی</p>
                <p>فعل‌هایی که انجام یک کار را نشان می‌دهند.</p>

                <p>He is writing a letter.</p>
                <p>او در حال نوشتن یک نامه است.</p>

                <p>The children went to school by bus yesterday.</p>
                <p>بچه‌ها دیروز با اتوبوس به مدرسه رفتند.</p>

                <p>My brother drinks milk every day.</p>
                <p>برادرم هر روز شیر می‌نوشد.</p>
            </div>

            <div class="reading-card">
                <h3>3. State Verbs</h3>
                <p>فعل‌های حالتی</p>
                <p>فعل‌هایی که به‌جای عمل، یک حالت را بیان می‌کنند و معمولاً به احساسات، افکار و حواس مربوط هستند.</p>

                <p>We believe in Allah.</p>
                <p>ما به خدا ایمان داریم.</p>

                <p>We love our country.</p>
                <p>ما کشورمان را دوست داریم.</p>

                <p>She feels happy.</p>
                <p>او احساس خوشحالی می‌کند.</p>
            </div>

            <div class="reading-card">
                <h3>4. Simple and Continuous Forms</h3>
                <p>شکل ساده و استمراری فعل‌ها</p>

                <p>برای فعل‌های عملی می‌توان از شکل ساده یا استمراری استفاده کرد.</p>

                <p>I cleaned my room yesterday.</p>
                <p>دیروز اتاقم را تمیز کردم.</p>

                <p>I am cleaning my room now.</p>
                <p>الان دارم اتاقم را تمیز می‌کنم.</p>

                <br>

                <p>برای فعل‌های حالتی معمولاً از شکل ساده استفاده می‌کنیم.</p>

                <p>I don't know the name of the street.</p>
                <p>نام خیابان را نمی‌دانم.</p>

                <p>Kids love chocolate.</p>
                <p>بچه‌ها شکلات را دوست دارند.</p>
            </div>

            <h2 class="translation-title">Writing Exercise | تمرین نوشتاری</h2>
            <p>گزینه درست را انتخاب کنید.</p>

            <div class="question-card">
                <p>1. I _____ reading newspapers.</p>
                <button onclick="checkAnswer(this, true)">don't like</button>
                <button onclick="checkAnswer(this, false)">am not liking</button>
            </div>

            <div class="question-card">
                <p>2. At 3 o'clock yesterday, I _____ a taxi.</p>
                <button onclick="checkAnswer(this, true)">needed</button>
                <button onclick="checkAnswer(this, false)">was needing</button>
            </div>

            <div class="question-card">
                <p>3. She _____ television at the moment.</p>
                <button onclick="checkAnswer(this, false)">watches</button>
                <button onclick="checkAnswer(this, true)">is watching</button>
            </div>

            <div class="question-card">
                <p>4. I _____ to go to the cinema tonight.</p>
                <button onclick="checkAnswer(this, true)">want</button>
                <button onclick="checkAnswer(this, false)">am wanting</button>
            </div>

            <div class="question-card">
                <p>5. Unfortunately, he _____ my name.</p>
                <button onclick="checkAnswer(this, true)">didn't remember</button>
                <button onclick="checkAnswer(this, false)">wasn't remembering</button>
            </div>
        `;
    }

    else {

        content.innerHTML = `
            <button class="back-button" onclick="showHome()">بازگشت به صفحه اصلی</button>
            <h2>${section.toUpperCase()}</h2>
            <p>این بخش به‌زودی آماده می‌شود.</p>
        `;
    }

    addSectionSearch(content, section);
}


function addSectionSearch(content, section) {

    const allowedSections = [
        "vocabulary",
        "reading",
        "grammar",
        "speaking",
        "writing"
    ];

    if (!allowedSections.includes(section)) return;

    const backButton = content.querySelector(".back-button");

    backButton.insertAdjacentHTML("afterend", `
        <div class="section-search">
            <input
                type="text"
                id="sectionSearchInput"
                placeholder="عبارت موردنظر را جست‌وجو کن..."
                autocomplete="off"
            >

            <button type="button" onclick="searchSection()">🔍</button>

            <button type="button" onclick="clearSectionSearch()">✖</button>
        </div>

        <p id="searchMessage"></p>
    `);

    document.getElementById("sectionSearchInput")
        .addEventListener("keydown", function(event) {

            if (event.key === "Enter") {
                searchSection();
            }

        });
}


function normalizeSearchText(text) {

    return text
        .toLowerCase()
        .replace(/ي/g, "ی")
        .replace(/ك/g, "ک")
        .replace(/‌/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}


function searchSection() {

    const input = document.getElementById("sectionSearchInput");
    const message = document.getElementById("searchMessage");

    const query = normalizeSearchText(input.value);

    const items = document.querySelectorAll(
        "#content .word-card, #content .reading-card, #content .question-card"
    );

    let found = 0;

    if (!query) {
        clearSectionSearch();
        message.innerText = "عبارت موردنظر را وارد کن.";
        return;
    }

    items.forEach(item => {

        const text = normalizeSearchText(item.innerText);
        const match = text.includes(query);

        item.style.display = match ? "" : "none";

        if (match) {
            found++;
        }

    });

    if (found === 0) {
        message.innerText = "موردی پیدا نشد! ❌";
    } else {
        message.innerText = `${found} نتیجه پیدا شد! ✅`;
    }
}


function clearSectionSearch() {

    const input = document.getElementById("sectionSearchInput");
    const message = document.getElementById("searchMessage");

    if (!input || !message) return;

    input.value = "";
    message.innerText = "";

    const items = document.querySelectorAll(
        "#content .word-card, #content .reading-card, #content .question-card"
    );

    items.forEach(item => {
        item.style.display = "";
    });
}


function checkAnswer(button, correct) {

    const buttons = button.parentElement.querySelectorAll("button");

    buttons.forEach(btn => {
        btn.disabled = true;
    });

    button.style.background = correct ? "#168542" : "#a52b35";
    button.style.color = "white";

}


function showHome() {

    document.querySelector(".welcome").style.display = "block";
    document.querySelector(".menu").style.display = "grid";

    document.getElementById("content").innerHTML = `
        <h2>آماده یادگیری هستید؟</h2>

        
        <p>برای ورود به هر قسمت، روی دکمه موردنظر کلیک کنید.</p>
    `;

}

window.handleAppBack = function () {
    const welcome = document.querySelector('.welcome');
    const menu = document.querySelector('.menu');

    const isHome =
        welcome &&
        menu &&
        getComputedStyle(welcome).display !== 'none' &&
        getComputedStyle(menu).display !== 'none';

    if (isHome) {
        return false;
    }

    showHome();
    return true;
};
