document.addEventListener('DOMContentLoaded', () => {
    // Set the date we're counting down to
    const countDownDate = new Date("August 14, 2024 00:00:00").getTime();
  
    // Update the count down every 1 second
    const x = setInterval(function() {
      // Get today's date and time
      const now = new Date().getTime();
  
      // Find the distance between now and the count down date
      const distance = countDownDate - now;
  
      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Display the result in the corresponding elements
      document.getElementById("days").innerText = days;
      document.getElementById("hours").innerText = hours;
      document.getElementById("minutes").innerText = minutes;
      document.getElementById("seconds").innerText = seconds;
  
      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Happy Independence Day!";
        document.getElementById("confetti").classList.add("show");
      }
    }, 1000);
  });
  