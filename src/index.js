// index.js
//database link: http://localhost:3000/ramens

// Callbacks

const handleClick = (ramen) => {
  // Select locations
  const detailImage = document.querySelector('.detail-image')
  const name = document.querySelector('.name')
  const restaurant = document.querySelector('.restaurant')
  const rating = document.querySelector('#rating-display')
  const comment = document.querySelector('#comment-display')
  // Add values to locations variables
  detailImage.src = ramen.image
  detailImage.alt = ramen.name
  name.textContent = ramen.name
  restaurant.textContent = ramen.restaurant
  rating.textContent = ramen.rating
  comment.textContent = ramen.comment
};

const addSubmitListener = () => {
  document.querySelector('#new-ramen').addEventListener('submit',(event) => {
    event.preventDefault()
    // Locate and read input value 
    const newName = document.querySelector('#new-name').value
    const newRestaurant = document.querySelector('#new-restaurant').value
    const newImage = document.querySelector('#new-image').value
    const newRating = document.querySelector('#new-rating').value
    const newComment= document.querySelector('#new-comment').value
    // Add input value to the ramen list
    const img = document.createElement('img');


  } )
}

const displayRamens = () => {
  fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    .then(ramenData => {
      const ramenMenu = document.getElementById('ramen-menu');
      ramenData.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        ramenMenu.appendChild(img);
        // Add click event, make sure it's inside for each function *SCOPE*
        img.addEventListener('click', () => handleClick(ramen));
      });
    })
    .catch(error => console.log(error));
};


const main = () => {
  displayRamens();
  addSubmitListener();
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};

