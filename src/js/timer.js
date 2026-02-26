class DevCountdown {
  constructor(selector, targetDate) {
    this.container = document.querySelector(selector);
    this.targetDate = targetDate;

    this.daysEl = this.container.querySelector('[data-value="days"]');
    this.hoursEl = this.container.querySelector('[data-value="hours"]');
    this.minsEl = this.container.querySelector('[data-value="mins"]');
    this.secsEl = this.container.querySelector('[data-value="secs"]');

    this.start();
  }

  start() {
    this.intervalId = setInterval(() => {
      const now = Date.now();
      const timeLeft = this.targetDate - now;

      if (timeLeft <= 0) {
        clearInterval(this.intervalId);
        this.container.innerHTML = 
          "<h2 style='color:#00ffcc'>Проект завершено 🚀</h2>";
        return;
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((timeLeft / (1000 * 60)) % 60);
      const secs = Math.floor((timeLeft / 1000) % 60);

      this.daysEl.textContent = days;
      this.hoursEl.textContent = this.pad(hours);
      this.minsEl.textContent = this.pad(mins);
      this.secsEl.textContent = this.pad(secs);

    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}


// 📅 Кінець березня 2026
const projectEndDate = new Date("2026-03-31T23:59:59").getTime();

new DevCountdown("#dev-timer", projectEndDate);