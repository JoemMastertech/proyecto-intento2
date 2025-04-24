const AppInit = {
  initialize: function() {
    // Start the welcome sequence
    this.startWelcomeSequence();
    
    // Initialize navigation
    this.initializeNavigation();
  },
  
  startWelcomeSequence: function() {
    ScreenManager.startWelcomeSequence();
  },
  
  initializeNavigation: function() {
    // Add click event to navigation buttons
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        // Remove active class from all buttons
        navButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get the target content
        const target = button.getAttribute('data-target');
        
        // Update page title
        document.querySelector('.page-title').textContent = button.textContent;
        
        // Load the content
        this.loadContent(target);
      });
    });
  },
  
  loadContent: function(contentType) {
    const contentContainer = document.getElementById('content-container');
    contentContainer.innerHTML = ''; // Clear current content
    
    // Load content based on type
    switch(contentType) {
      case 'cocteleria':
        ProductRenderer.renderCocktails(contentContainer);
        break;
      case 'refrescos':
        ProductRenderer.renderRefrescos(contentContainer);
        break;
      case 'licores':
        ProductRenderer.renderLicores(contentContainer);
        break;
      case 'cervezas':
        ProductRenderer.renderCervezas(contentContainer);
        break;
      case 'pizzas':
        ProductRenderer.renderPizzas(contentContainer);
        break;
      case 'alitas':
        ProductRenderer.renderAlitas(contentContainer);
        break;
      case 'sopas':
        ProductRenderer.renderSopas(contentContainer);
        break;
      case 'ensaladas':
        ProductRenderer.renderEnsaladas(contentContainer);
        break;
      case 'carnes':
        ProductRenderer.renderCarnes(contentContainer);
        break;
      case 'cafe':
        ProductRenderer.renderCafe(contentContainer);
        break;
      case 'postres':
        ProductRenderer.renderPostres(contentContainer);
        break;
      default:
        contentContainer.innerHTML = '<p>Contenido no disponible</p>';
    }
  }
};