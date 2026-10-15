
/* ==================================
   1. Add interactive control buttons
================================== */

const toolbar = document.createElement("div");
toolbar.className = "js-toolbar";

toolbar.innerHTML = `
    <button id="themeBtn" type="button">🌙 Dark Mode</button>
    <button id="printBtn" type="button">📄 Save as PDF</button>
`;

document.body.appendChild(toolbar);


/* ==================================
   2. Add JavaScript styles
================================== */

const style = document.createElement("style");

style.textContent = `
    .js-toolbar {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 12px;
        margin: 20px auto;
    }

    .js-toolbar button,
    #topBtn {
        border: 1px solid rgba(255, 255, 255, 0.7);
        border-radius: 30px;
        padding: 12px 20px;
        background: rgba(255, 255, 255, 0.5);
        color: #1d2d50;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        transition: transform 0.2s ease;
    }

    .js-toolbar button:hover,
    #topBtn:hover {
        transform: translateY(-3px);
    }

    body.dark-mode {
        color: #f0f4ff;
        background: linear-gradient(
            135deg, #101827, #20243f, #342641
        );
    }

    body.dark-mode header,
    body.dark-mode section,
    body.dark-mode footer {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.18);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    }

    body.dark-mode header h1,
    body.dark-mode section h2,
    body.dark-mode strong {
        color: #ffffff;
    }

    body.dark-mode p,
    body.dark-mode li {
        color: #d4ddf2;
    }

    body.dark-mode .js-toolbar button,
    body.dark-mode #topBtn {
        color: #ffffff;
        background: rgba(255, 255, 255, 0.12);
        border-color: rgba(255, 255, 255, 0.2);
    }

    #topBtn {
        position: fixed;
        right: 22px;
        bottom: 22px;
        z-index: 1000;
        display: none;
    }

    @media print {
        body {
            padding: 0;
            background: white !important;
            color: black !important;
        }

        header, section, footer {
            background: white !important;
            color: black !important;
            border: 1px solid #cccccc;
            box-shadow: none !important;
            transform: none !important;
            break-inside: avoid;
        }

        .js-toolbar,
        #topBtn {
            display: none !important;
        }

        body.dark-mode p,
        body.dark-mode li,
        body.dark-mode h1,
        body.dark-mode h2,
        body.dark-mode strong {
            color: black !important;
        }
    }
`;

document.head.appendChild(style);


/* ==================================
   3. Dark and Light Mode
================================== */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️ Light Mode";
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
    }
});


/* ==================================
   4. Typing Animation
================================== */

const role = document.getElementById("typing-text");

if (role) {
    const originalText = role.textContent;
    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!reducedMotion) {
        role.textContent = "";
        let index = 0;

        function typeText() {
            if (index < originalText.length) {
                role.textContent += originalText.charAt(index);
                index++;
                setTimeout(typeText, 80);
            }
        }

        typeText();
    }
}


/* ==================================
   5. Print or Save Resume as PDF
================================== */

document.getElementById("printBtn").addEventListener(
    "click",
    function () {
        window.print();
    }
);


/* ==================================
   6. Scroll-to-Top Button
================================== */

const topBtn = document.createElement("button");

topBtn.id = "topBtn";
topBtn.type = "button";
topBtn.textContent = "↑ Top";
topBtn.setAttribute("aria-label", "Scroll to top");

document.body.appendChild(topBtn);

window.addEventListener("scroll", function () {
    if (window.scrollY > 250) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
