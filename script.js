// كلمة السر
const password = "Love";

// الرسالة
const message = `بما إنك عايز حاجة تحفظ صورنا وكل يوم تزن 😂❤️
فحبيت أعملك حاجة كده.

يارب تبسطك ❤️

وعايزة أقولك إني بحبك أوي ❤️
وربنا يخليك ليا يا عوض ربنا ليا 🫂♥️`;

// التحقق من كلمة السر
function checkPassword() {

    const input = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (input === password) {

        document.getElementById("login").style.display = "none";
        document.getElementById("main").classList.remove("hidden");

        typeWriter();

    } else {

        error.innerHTML = "❌ كلمة السر غير صحيحة";

    }

}

// تأثير الكتابة
let i = 0;

function typeWriter() {

    if (i < message.length) {

        document.getElementById("typing").innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter, 70);

    }

}

// القلوب المتحركة
function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart-float";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = (15 + Math.random() * 30) + "px";

    heart.style.animationDuration = (4 + Math.random() * 5) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

setInterval(createHeart, 250);

// الضغط على Enter
document
.getElementById("password")
.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {

        checkPassword();

    }

});