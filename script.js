document.getElementById('loveButton').addEventListener('click', function () {
    const messages = [
      "You are the chocolate to my heart! 🍫❤️",
      "Every day with you is sweeter than chocolate!",
      "I'm so lucky to have you in my life!",
      "You make my heart melt like chocolate!",
      "I love you more than all the chocolates in the world!"
    ];
  
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('surpriseMessage').textContent = randomMessage;
  });