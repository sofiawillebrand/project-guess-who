// All the DOM selectors stored as short variables
const playerArea = document.getElementById('question-aside')
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const question = document.getElementById('question')
const startBtn = document.getElementById('play')
const restartBtn = document.getElementById('restart')
const filterBtn = document.getElementById('filter')
const playAgainBtn = document.getElementById('playAgain')
const playerValue = document.getElementById('playername')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['hat'],
    other: ['smoker']
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['glasses'],
    other: ['smoker']
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses', 'hat'],
    other: ['smoker']
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['hat'],
    other: []
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: []
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['glasses', 'hat'],
    other: []
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: [],
    other: []
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: [],
    other: []
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'hat'],
    other: []
  },
]

// Global variables
let secret
let currentQuestion
let charactersInPlay
let numberOfGuesses

// Draw the game board
const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += /*html*/`
      <div class="card">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
  })
}

const generatePlayerBoard = () => {
  question.insertAdjacentHTML('beforebegin', /*html*/`
    <div>
      <h1>Player: ${playerValue.value}</h1>
      <h1>Guesses: ${numberOfGuesses}</h1>
  `)

  // playerArea.innerHTML.prepend(`<h3>Hellloo</h3>`)
}

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
  console.log(secret)
}

// This function to start (and restart) the game
const start = () => {
  // Here we're setting charactersInPlay array to be all the characters to start with
  startBtn.style.display = "none"
  restartBtn.style.display = "block"

  document.getElementById("board").style.display = "flex";
  document.getElementById("winOrLose").style.display = "none";

  document.getElementById("start-aside").style.display = "none";
  document.getElementById("question-aside").style.display = "flex";

  charactersInPlay = CHARACTERS
  generatePlayerBoard()
  setSecret()  
  generateBoard()
}

const validate = () => {
  if (playerValue.value == "") {
    alert("Name must be filled out");
  }
  else
   start()
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  // selectedIndex gives the choosen indexnumber of the array. https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedIndex
  // This variable stores what option group (category) the question belongs to.
  const category = questions.options[questions.selectedIndex].parentNode.label
  
  // We also need a variable that stores the actual value of the question we've selected.
  const value = questions.options[questions.selectedIndex].label
  const value2 = questions.options[questions.selectedIndex].value

  //currentQuestion is a global variable
  currentQuestion = {
    category: category,
    value: value,
    value2: value2
  }
}

// This function should be invoked when you click on 'Find Out' button.
const checkQuestion = () => {
  selectQuestion()
  const { category, value } = currentQuestion //what is guessed
  const {name, img, hair, eyes, accessories, other} = secret //who is the secret person

  // Compare the currentQuestion details with the secret person details in a different manner based on category (hair/eyes or accessories/others).
  // See if we should keep or remove people based on that
  // Then invoke filterCharacters
  if (category === 'hair' || category === 'eyes') {
    //.includes searches for value in hair, and if hair contains value it is true.
    if (value.includes(hair) || value.includes(eyes))
      filterCharacters(true)
    else {
      filterCharacters(false)
    }

  } 
  
  else if (category === 'accessories') {
    //check which category it is
    //create a const of the list from the persons attributes
    //check if the choosen value exits within the secret persons attributes
    //want to comapre accesories or other with value
    //want to loop trough the secret persons attributes and others, and compare with value
    if(accessories.length === 0){
      filterCharacters(false)
    }
    else { 
      accessories.forEach((accessory) => { 
        if (accessory === value) 
          filterCharacters(true)
        else
          filterCharacters(false)
      })
    }
  } 
  
  else if (category === 'other') {
    if(other.length === 0){
      filterCharacters(false)
    }

    else { 
      other.forEach((otherItem) => { 
        if (otherItem === value) 
            filterCharacters(true)
        else
          filterCharacters(false)
        })
    }
  }
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const { category, value, value2 } = currentQuestion
  // Show the correct alert message for different categories
  if (category === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value2}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value))
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value2}`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value))
    }
  } else if (category === 'other') {
    if (keep) {
      alert(
        `Yes, the person wears ${value}! Keep all people that wears ${value2}`
      )
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value2))
    } else {
      alert(
        `No, the person doesn't wear ${value}! Remove all people that wears ${value2}`
      )
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value2))
    }
  } else {
    if (keep) {
      alert(
        `Yes, the person has ${value}! Keep all people with ${value}`
        )
        charactersInPlay = charactersInPlay.filter((person) => person[category] === value2)
    } else {
      alert(
        `No, the person does not have ${value}! Remove all people with ${value}`
        )
       charactersInPlay = charactersInPlay.filter((person) => person[category] !== value2) 
    }
  }

  generateBoard()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  
  guessAnswer = confirm(`Do you want to guess on ${personToConfirm}?`)

  if (guessAnswer) {
    checkMyGuess(personToConfirm)
  }
  else {
    alert(`Okay then, think a bit more and guess again!`)
  }
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
const checkMyGuess = (personToCheck) => {
  const {name} = secret
  document.getElementById("board").style.display = "none";
  document.getElementById("winOrLose").style.display = "flex";
  if(personToCheck === name){
    document.getElementById("winOrLoseText").innerText = `Yay, ${personToCheck} is the right answer!`;
  }
  else{
    document.getElementById("winOrLoseText").innerText = `Oh no, ${personToCheck} is not the right answer!`;
  }

  // 1. Check if the personToCheck is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
}

// Invokes the start function when website is loaded
// start()


// All the event listeners
startBtn.addEventListener('click', validate)
restartBtn.addEventListener('click', () => window.location.reload(false))
filterBtn.addEventListener('click', checkQuestion)
playAgainBtn.addEventListener('click', start)
