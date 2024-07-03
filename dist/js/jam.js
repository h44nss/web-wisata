function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  hours = hours.toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);
  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById("jam").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);
