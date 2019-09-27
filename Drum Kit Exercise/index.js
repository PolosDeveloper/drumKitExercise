// saber quantos botões existem com aquela class .drum
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  // selecionar todos os elementos com a classe .drum
  // e adicionatr um eventListener a cada botão
  // isto é para quando carregamos na imagem
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    // nós queremos o caracter que o user está a carregar
    // então retiramos o elelemtno hTML. Exemplo do resultado possível -> w
    // console.log(this)  ---> <button class="w drum">w</button>
    var buttonInnerHTML = this.innerHTML;

    // toca sempre que um botão é "carregado"
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

// addEventListener(evento que queremos que ocorra, função que deve ser chamada);
// o que são eventListeners ----> é como pedir ao teu pai para ir buscar, e quando ele
// te vai buscar, é tipo uma função que ele faz xD
// logo, estamos a adicionar um eventListener a todo o documento, isto é, a toda a página
// palavra-chave 'event' -> na concola se fizermos 'EventListener' obtemos as propos que o event tem
// e dessa forma, acedemos ao que queremos. o Key é o que foi carregado no teclado
document.addEventListener("keydown", function(event) {

  // what to do when keypress is detected
  // ou seja, pelo teclado
  makeSound(event.key);

  buttonAnimation(event.key);

});

// função que 'carrega' o som das imagens
function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3'); // new audio object
      kick.play();  // e tocamos
      break;


    default: console.log(key);  // quando não respeita nenhum dos cenários anteriores opcionais

  }
}


function buttonAnimation(currentKey) {

  // buscar a key pressionad e associá-la à class
  var activeButton = document.querySelector("." + currentKey);

  // adicionar a class "pressed" ao activeButton presionado
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed"); // agora removemos para que o CSS desapareça novamente
  }, 100);

}
