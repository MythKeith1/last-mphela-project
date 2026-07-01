
// TYPEWRITER LOOP
const words = [
  "Design. Create. Master.",
  "Jewellery Meets Art.",
  "Build Your Future.",
  "Turn Creativity Into Income."
];

let i = 0, j = 0, deleting = false;

function type() {
  const el = document.querySelector(".hero h1");
  const word = words[i];

  el.textContent = word.substring(0, j);

  if (!deleting) {
    j++;
    if (j > word.length) {
      deleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    j--;
    if (j < 0) {
      deleting = false;
      i = (i + 1) % words.length;
    }
  }

  setTimeout(type, deleting ? 60 : 120);
}

type();


// NAV TOGGLE
function toggleNav() {
  document.getElementById("navMenu").classList.toggle("active");
}


// FORM
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Application submitted successfully!");
});
