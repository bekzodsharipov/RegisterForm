document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");
  const nameError = document.getElementById("nameError");
  const phoneError = document.getElementById("phoneError");

  // Form submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();

    // Name validation
    if (name.length < 2) {
      nameError.style.display = "block";
      valid = false;
    } else {
      nameError.style.display = "none";
    }

    // Phone check 90 123 45 67 format
    const phoneRegex = /^\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/;
    if (!phoneRegex.test(phone)) {
      phoneError.style.display = "block";
      valid = false;
    } else {
      phoneError.style.display = "none";
    }

    if (!valid) return;

    // Save & redirect
    localStorage.setItem("userData", JSON.stringify({
      name,
      phone: "+998 " + phone
    }));

    window.location.href = "thankYou.html";
  });

  // Auto format phone input
  phoneInput.addEventListener("input", () => {
    let v = phoneInput.value.replace(/\D/g, "").substring(0, 9);
    phoneInput.value = v.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4");
    phoneError.style.display = "none";
  });
});
