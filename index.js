const clock = document.getElementById('clock');

    function updateClock() {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', { hour12: false }) + ':' + now.getMilliseconds().toString().padStart(3, '0');
      clock.textContent = timeString;
      requestAnimationFrame(updateClock);
    }

updateClock(); 