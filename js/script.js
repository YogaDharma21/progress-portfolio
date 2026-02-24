const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuBtn.textContent = "[CLOSE]";
        } else {
            menuBtn.textContent = "[MENU]";
        }
    });
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = contactForm.querySelector('input[type="text"]').value;
        const phone = contactForm.querySelector('input[type="tel"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject =
            contactForm.querySelectorAll('input[type="text"]')[1].value;
        const message = contactForm.querySelector("textarea").value;

        if (
            name.trim() === "" ||
            phone.trim() === "" ||
            email.trim() === "" ||
            subject.trim() === "" ||
            message.trim() === ""
        ) {
            showPopUp("Please fill in all fields", "error");
            return;
        }

        const isValidPhone =
            !isNaN(phone) && phone.replace(/\s/g, "").length >= 8;
        if (!isValidPhone) {
            showPopUp("Please enter a valid phone number", "error");
            return;
        }

        const atIndex = email.indexOf("@");
        const isValidEmail =
            atIndex > 0 && email.indexOf(".", atIndex) > atIndex;
        if (!isValidEmail) {
            showPopUp("Please enter a valid email address", "error");
            return;
        }

        showPopUp("Message Sent Successfully", "success");
        contactForm.reset();
    });
}

const showPopUp = (message, type) => {
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popupMessage");
    const popupIcon = document.getElementById("popupIcon");
    const popupClose = document.getElementById("popupClose");

    if (popup && popupMessage && popupIcon && popupClose) {
        popupMessage.textContent = message;
        popupIcon.textContent = type === "error" ? "❌" : "✅";
        popup.classList.add("show");

        popupClose.addEventListener("click", function () {
            popup.classList.remove("show");
        });
    }
};
