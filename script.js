// Show the card and confetti when the "Click me" button is clicked
document.getElementById('play-button').addEventListener('click', function() {
    // Show the card content and trigger the opacity transition
    const cardContent = document.getElementById('card-content');
    cardContent.style.display = 'block'; // Ensure the display is set to block
    setTimeout(function() {
      cardContent.classList.add('show'); // Trigger opacity transition
    }, 100); // Small delay to allow display to take effect before transition
  
    // Trigger confetti
    confetti();
  
    // Show the new "Click me for a surprise!" button after the card appears
    document.getElementById('surprise-button').style.display = 'block';
  });
  
  // Re-trigger confetti when clicking the "Click me" button (which remains visible while the card is shown)
  document.getElementById('play-button').addEventListener('click', function() {
    // Re-trigger confetti
    confetti();
  });
  
  // Show the YouTube video and hide the card when "Click me for a surprise!" is clicked
  document.getElementById('surprise-button').addEventListener('click', function() {
    // Hide the card content by removing the show class and setting display to none after the transition
    const cardContent = document.getElementById('card-content');
    cardContent.classList.remove('show');
    setTimeout(function() {
      cardContent.style.display = 'none';
    }, 1000); // Wait for the opacity transition to finish before hiding
  
    // Hide the "Click me" button for confetti while the YouTube video is playing
    document.getElementById('play-button').style.display = 'none';
  
    // Show the YouTube content
    document.getElementById('youtube-container').style.display = 'block';
  });
  
  // Show the card and hide the YouTube video when "Go back to the card" is clicked
  document.getElementById('back-button').addEventListener('click', function() {
    // Hide the YouTube content
    document.getElementById('youtube-container').style.display = 'none';
  
    // Show the card content again
    const cardContent = document.getElementById('card-content');
    cardContent.style.display = 'block'; // Ensure display is set to block
    setTimeout(function() {
      cardContent.classList.add('show'); // Trigger opacity transition again
    }, 100);
  
    // Bring back the "Click me" button for confetti after the card is shown again
    document.getElementById('play-button').style.display = 'block';
  });
  
  function confetti() {
    for (let i = 0; i < 59; i++) {
      const confettiElement = document.createElement('div');
      confettiElement.classList.add('confetti');
      
      const colors = ['#ff64b4', '#ff1493', '#ffa07a', '#87ceeb', '#ff4500'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      confettiElement.style.backgroundColor = randomColor;
      
      const randomX = Math.random() * 100;
      confettiElement.style.left = `${randomX}%`;
  
      const randomDelay = Math.random() * 2;
      confettiElement.style.animationDelay = `${randomDelay}s`;
  
      const randomSize = Math.floor(Math.random() * 10) + 5;
      confettiElement.style.width = `${randomSize}px`;
      confettiElement.style.height = `${randomSize}px`;
      
      document.body.appendChild(confettiElement);
      
      setTimeout(() => {
        confettiElement.remove();
      }, 5000);
    }
  }
  