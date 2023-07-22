document.addEventListener('DOMContentLoaded', function() {
    // Update the clock display every second
    setInterval(updateClock, 1000);
  
    // Set Alarm button event listener
    document.getElementById('setAlarmBtn').addEventListener('click', setAlarm);
  
    // Clear Alarm button event listener
    document.getElementById('clearAlarmBtn').addEventListener('click', clearAlarm);
  });
  
  function updateClock() {
    var now = new Date();
    var time = formatTime(now.getHours()) + ':' + formatTime(now.getMinutes()) + ':' + formatTime(now.getSeconds());
    var date = now.toDateString();
  
    document.getElementById('time').textContent = time;
    document.getElementById('date').textContent = date;
  
    // Check if alarm time matches the current time
    var alarmTime = document.getElementById('alarmTime').value;
    if (time === alarmTime) {
      alert('Wake up!');
    }
  }
  
  function formatTime(time) {
    return time < 10 ? '0' + time : time;
  }
  
  function setAlarm() {
    var alarmTime = document.getElementById('alarmTime').value;
    alert('Alarm set for ' + alarmTime);
  }
  
  function clearAlarm() {
    document.getElementById('alarmTime').value = '00:00';
    alert('Alarm cleared');
  }
  