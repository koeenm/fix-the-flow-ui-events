let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}


// Button 1
let frontend = document.querySelector('a:nth-of-type(1)')
console.log(frontend); // hierdoor weet je of je script werkt, maar ik begrijp niet goed hoe je dat ziet
frontend.addEventListener('click', function() {
  frontend.classList.toggle('color-change');
})

// Button 2
let design = document.querySelector('a:nth-of-type(2)')

design.addEventListener('dblclick', function() {
  design.classList.toggle('scale-up')
})

// Button 3
let and = document.querySelector('a:nth-of-type(3)')

document.addEventListener('keydown', key1) //schrijf 'document' in plaats van de let (naam) want anders werkt de keydown niet goed

// als je eerst de let (naam) schrijft dan werkt het event alleen wanneer je gefocust bent op de functie. Met document hoef je niet gefocust te zijn op de functie.
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

