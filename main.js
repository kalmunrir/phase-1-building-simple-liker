// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.querySelector(`#modal`);
const hearts = document.querySelectorAll(`.like-glyph`);

for(const heart of hearts){
  heart.addEventListener(`click`, (e) => {
    const currentHeart = e.target;
    mimicServerCall(`theBestURL`)
      .then(function(){
        if (currentHeart.textContent === EMPTY_HEART){
          currentHeart.textContent = FULL_HEART;
          currentHeart.className += ` activated-heart`;
        } else {
          currentHeart.textContent = EMPTY_HEART;
          currentHeart.className = ``;
        }
      })
      .catch(error => {
        modal.className = ''
        modal.innerText = `Something Went Wrong`
        setTimeout(function(){
          modal.className = `hidden`
        }, 3000)
      })
  })
}



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
