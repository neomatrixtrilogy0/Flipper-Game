document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'fries',
        img: 'images/fries.jpg'
      },
      {
        name: 'cheese_burger',
        img: 'images/cheese_burger.jpg'
      },
      {
        name: 'ice-cream',
        img: 'images/ice_cream.jpg'
      },
      {
        name: 'pizza',
        img: 'images/pizza.jpg'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.jpg'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.jpg'
      },
      {
        name: 'fries',
        img: 'images/fries.jpg'
      },
      {
        name: 'cheese_burger',
        img: 'images/cheese_burger.jpg'
      },
      {
        name: 'ice-cream',
        img: 'images/ice_cream.jpg'
      },
      {
        name: 'pizza',
        img: 'images/pizza.jpg'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.jpg'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.jpg'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/black_background.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/black_background.png')
        cards[optionTwoId].setAttribute('src', 'images/black_background.png')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/black_background.png')
        cards[optionTwoId].setAttribute('src', 'images/black_background.png')
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })