/* =========================================================
   FARAH ISMAIL — PORTFOLIO
========================================================= */


/* =========================
   THEME
========================= */

const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

const savedTheme = localStorage.getItem("farah-portfolio-theme");

if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
}

function updateThemeIcon() {
  const currentTheme = root.getAttribute("data-theme");

  themeIcon.textContent =
    currentTheme === "dark"
      ? "☀"
      : "☾";
}

updateThemeIcon();


themeToggle.addEventListener("click", () => {

  const current =
    root.getAttribute("data-theme") || "light";

  const next =
    current === "light"
      ? "dark"
      : "light";

  root.setAttribute("data-theme", next);

  localStorage.setItem(
    "farah-portfolio-theme",
    next
  );

  updateThemeIcon();

});


/* =========================
   CURRENT YEAR
========================= */

document.getElementById("year").textContent =
  new Date().getFullYear();


/* =========================
   COPY EMAIL
========================= */

const copyEmailButton =
  document.getElementById("copyEmail");

const toast =
  document.getElementById("toast");


copyEmailButton.addEventListener("click", async () => {

  const email =
    "farah.sameh.ismail@gmail.com";

  try {

    await navigator.clipboard.writeText(email);

    showToast("Email copied");

  } catch {

    const temporaryInput =
      document.createElement("textarea");

    temporaryInput.value = email;

    document.body.appendChild(temporaryInput);

    temporaryInput.select();

    document.execCommand("copy");

    temporaryInput.remove();

    showToast("Email copied");

  }

});


function showToast(message) {

  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(showToast.timeout);

  showToast.timeout =
    setTimeout(() => {

      toast.classList.remove("show");

    }, 1800);

}


/* =========================
   SUBTLE SCROLL REVEAL
========================= */

const revealItems = document.querySelectorAll(
  ".work-card, .experience-row, .about, .contact-item"
);


revealItems.forEach(item => {
  item.classList.add("reveal");
});


const revealObserver =
  new IntersectionObserver(

    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          revealObserver.unobserve(
            entry.target
          );

        }

      });

    },

    {
      threshold: 0.08
    }

  );


revealItems.forEach(item => {
  revealObserver.observe(item);
});


/* =========================
   NAV HIGHLIGHT / HEADER
========================= */

const siteHeader =
  document.querySelector(".site-header");


window.addEventListener(
  "scroll",
  () => {

    if (window.scrollY > 15) {

      siteHeader.style.borderBottomColor =
        "var(--line)";

    } else {

      siteHeader.style.borderBottomColor =
        "transparent";

    }

  },
  { passive: true }
);
