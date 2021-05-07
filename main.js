// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorDiv = document.querySelector('div#modal')
let fullHeart = true
mimicServerCall()
.then((res) => {
  const allHeartsSpans = document.querySelectorAll('footer span')
  //debugger
  allHeartsSpans.forEach((heartElement) => {
    heartElement.textContent = FULL_HEART
    heartElement.className = 'activated-heart'
    console.log(heartElement)
    heartElement.addEventListener('click', (event) => {
      fullHeart = !fullHeart
      if (fullHeart) {
        heartElement.textContent = FULL_HEART
        heartElement.className = 'activated-heart'
      } else {
        heartElement.textContent = EMPTY_HEART
        heartElement.className = ''
      }
    })
  })
})
.catch((() => {
  errorDiv.className = ''
  setTimeout(() => {errorDiv.className = 'hidden'}, 3000)
}))



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
