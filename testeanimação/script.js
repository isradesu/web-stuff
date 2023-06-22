var imagePaths = [
    'frame1.png',
    'frame2.png',
    'frame3.png',
    'frame4.png',
    'frame5.png',
    'frame6.png',
    'frame7.png',
    'frame8.png',
    'frame9.png',
    'frame10.png',
    'frame11.png',
    'frame12.png',
    'frame13.png',
    'frame14.png',
    'frame15.png',
    'frame16.png',
    'frame17.png',
    'frame18.png',
    'frame19.png',
    'frame20.png',
    'frame21.png',
    'frame22.png',
    'frame23.png',
    'frame24.png',


    
    // Adicione aqui os caminhos de todas as imagens que você deseja pré-carregar
  ];
  
  // Função para pré-carregar as imagens
  function preloadImages() {
    for (var i = 0; i < imagePaths.length; i++) {
      var img = new Image();
      img.src = imagePaths[i];
    }
  }

  // Função para executar a animação
  function runAnimation() {
    var animation = document.querySelector('#animation');
    var currentFrame = 1;

    setInterval(function() {
      animation.style.backgroundImage = 'url(' + imagePaths[currentFrame] + ')';
      currentFrame = (currentFrame % 24) + 1;
    }, 1000 / 24); // Framerate de 24fps
  }

  // Carregar as imagens antes de executar a animação
  window.onload = function() {
    preloadImages();
    
  };
  runAnimation();