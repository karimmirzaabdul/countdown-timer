document.getElementById('startBtn').addEventListener('click', function () {
    const targetDateInput = document.getElementById('targetDate').value;
    if (targetDateInput) {
      const targetDate = new Date(targetDateInput);
      startCountdown(targetDate);
    }
  });
  
  function startCountdown(targetDate) {
    const countdownInterval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeRemaining = targetDate - currentTime;
  
      if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        document.getElementById('message').innerHTML = 'Time is up!';
        document.getElementById('countdown').style.display = 'none';
        return;
      }
  
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
      document.getElementById('days').innerHTML = `${days}d`;
      document.getElementById('hours').innerHTML = `${hours}h`;
      document.getElementById('minutes').innerHTML = `${minutes}m`;
      document.getElementById('seconds').innerHTML = `${seconds}s`;
    }, 1000);
  }
  