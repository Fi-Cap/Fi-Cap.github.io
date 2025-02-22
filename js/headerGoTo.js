
const hash = window.location.hash.slice(1);
if (hash) {
  const targetElement = document.getElementById(hash);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior:'smooth' });
  }
}