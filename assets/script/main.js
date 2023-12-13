let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}


// Info button

let info = document.querySelector('h1')

info.addEventListener('click', infoHandler)

function infoHandler() {
  info.classList.toggle('hulp');

  const popup = document.querySelector('.pop-up');
  if (info.classList.contains('hulp')) {
    popup.style.display = "block";
    popup.classList.toggle("opacity");
  } else {
    popup.style.display = "none";
  }
}



// Button 1
let frontend = document.querySelector('a:nth-of-type(1)')
console.log(frontend); // hierdoor weet je of je script werkt, maar ik begrijp niet goed hoe je dat ziet
frontend.addEventListener('click', function() {
  frontend.classList.toggle('color-change');
  console.log("wadafak");;
})

// Button 2
let design = document.querySelector('a:nth-of-type(2)')

design.addEventListener('dblclick', function() {
  design.classList.toggle('scale-up');
})

// Button 3
let and = document.querySelector('a:nth-of-type(3)')

document.addEventListener('keydown', key1) //schrijf 'document' in plaats van de let (naam) want anders werkt de keydown niet goed

// BELANGRIJK -------------------------------------------------
// als je eerst de let (naam) schrijft dan werkt het event alleen wanneer je gefocust bent op de functie. Met document hoef je niet gefocust te zijn op de functie.
// ------------------------------------------------------------
  function key1(event) {
    if (event.key === "1") {
      and.classList.toggle("flip");
    }
  }

// Button 4
// ik maak er nog een met een keydown, want hier zit veel ruimte voor verbetering en herhaling aka iteratief werken
let dev = document.querySelector('a:nth-of-type(4)')

document.addEventListener('keydown', key2)

function key2(event) {
  if (event.key === "2") {
    dev.classList.toggle("flipper");
  }
}

// Button 5
// ik ga met hover een animatie laten gebeuren
let sprint = document.querySelector('a:nth-of-type(5)')

sprint.addEventListener('mouseover', sprintHandler)

  function sprintHandler(event) {
    sprint.classList.toggle("bounce");
  }

  // Button 6
  // wanneer je je muis van het element afhaald, start de interactie, als je muis dan weer het element in gaat dan reset de interactie
let fix = document.querySelector('a:nth-of-type(6)')

fix.addEventListener('mouseleave', fixHandler)

  function fixHandler(event) {
    fix.classList.toggle("size-down")
  }

// Button 7
// wanneer je op de pagina kopieert, dan zal de knop groter worden

let the = document.querySelector('a:nth-of-type(7)')

document.addEventListener('copy', theHandler)

function theHandler(event) {
  the.classList.toggle('scale-up')
}

// Button 8
// wanneer je op de pagina plakt, zal de button kleiner worden

let flow = document.querySelector('a:nth-of-type(8)')

document.addEventListener('paste', flowHandler)

function flowHandler() {
  flow.classList.toggle('scale-down')
}