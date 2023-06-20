var imagePaths = [
    'frames/frame1.png',
    'frames/frame2.png',
    'frames/frame3.png',
    'frames/frame4.png',
    'frames/frame5.png',
    'frames/frame6.png',
    'frames/frame7.png',
    'frames/frame8.png',
    'frames/frame9.png',
    'frames/frame10.png',
    'frames/frame12.png',
    'frames/frame13.png',
    'frames/frame14.png',
    'frames/frame15.png',
    'frames/frame16.png',
    'frames/frame17.png',
    'frames/frame18.png',
    'frames/frame19.png',
    'frames/frame20.png',
    'frames/frame21.png',
    'frames/frame22.png',
    'frames/frame23.png',
    'frames/frame24.png',


    
    // Adicione aqui os caminhos de todas as imagens que você deseja pré-carregar
  ];
  
  var images = [];
  var imagesLoaded = 0;
  
  function preloadImages(callback) {
    for (var i = 0; i < imagePaths.length; i++) {
      var image = new Image();
      image.src = imagePaths[i];
      image.onload = function() {
        imagesLoaded++;
        if (imagesLoaded === imagePaths.length) {
          callback();
        }
      };
      images.push(image);
    }
  }
  
  // Chamada para pré-carregar as imagens
  preloadImages(function() {
    // As imagens foram pré-carregadas, agora você pode iniciar a animação
    // ou fazer qualquer outra ação necessária
  });


var frameIndex = 1;
var totalFrames = 24;
var animationContainer = document.querySelector('#animation-container')

function playAnimation() {
  var frameImagePath = 'frames/frame' + frameIndex + '.png';
  animationContainer.style.backgroundImage = 'url(' + frameImagePath + ')';
  frameIndex++;
  if (frameIndex > totalFrames) {
    frameIndex = 1;
  }
}

setInterval(playAnimation, 100); // Ajuste a velocidade da animação conforme necessário (em milissegundos)
