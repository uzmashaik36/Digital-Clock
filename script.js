const clock = document.getElementById("clock");
const dateEl = document.getElementById("date");
const toggleBtn = document.getElementById("toggleBtn");

let is24Hour = false;

function updateTime() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  let ampm = "";

  if (!is24Hour) {
    ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
  }

  const timeString = `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${is24Hour ? "" : ampm}`;
  clock.textContent = timeString;

  const dateString = now.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  dateEl.textContent = dateString;
}

function pad(n) {
  return n.toString().padStart(2, "0");
}

toggleBtn.addEventListener("click", () => {
  is24Hour = !is24Hour;
  toggleBtn.textContent = is24Hour
    ? "Switch to 12 Hour Format"
    : "Switch to 24 Hour Format";
  updateTime(); // update immediately after toggling
});

setInterval(updateTime, 1000);
updateTime();
