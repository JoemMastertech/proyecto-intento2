const ScreenManager = {
  startWelcomeSequence: function() {
    const welcomeScreen = document.querySelector('.welcome-screen');
    const logoScreen = document.querySelector('.logo-screen');
    const categoryTitleScreen = document.querySelector('.category-title-screen');
    const mainContentScreen = document.querySelector('.main-content-screen');
    
    // Show welcome screen for 3 seconds
    setTimeout(() => {
      welcomeScreen.classList.add('fade-out');
      setTimeout(() => {
        welcomeScreen.style.display = 'none';
        logoScreen.style.display = 'flex';
        logoScreen.classList.add('fade-in');
        
        // Show logo and title for 3 seconds
        setTimeout(() => {
          logoScreen.classList.add('fade-out');
          setTimeout(() => {
            logoScreen.style.display = 'none';
            categoryTitleScreen.style.display = 'flex';
            categoryTitleScreen.classList.add('fade-in');
            
            // Show category title for 2 seconds
            setTimeout(() => {
              categoryTitleScreen.classList.add('fade-out');
              setTimeout(() => {
                categoryTitleScreen.style.display = 'none';
                mainContentScreen.style.display = 'flex';
                mainContentScreen.classList.add('fade-in');
                
                // Load the initial content (Coctelería)
                AppInit.loadContent('cocteleria');
              }, 1000);
            }, 2000);
          }, 1000);
        }, 3000);
      }, 1000);
    }, 3000);
  }
};