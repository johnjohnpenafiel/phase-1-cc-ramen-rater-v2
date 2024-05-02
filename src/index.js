// index.js
//database link: http://localhost:3000/ramens

// Callbacks

const handleClick = (ramen) => {
  // Select locations
  const detailImage = document.querySelector('.detail-image');
  const name = document.querySelector('.name');
  const restaurant = document.querySelector('.restaurant');
  const rating = document.querySelector('#rating-display');
  const comment = document.querySelector('#comment-display');
  // Add values to locations variables
  detailImage.src = ramen.image;
  detailImage.alt = ramen.name;
  name.textContent = ramen.name;
  restaurant.textContent = ramen.restaurant;
  rating.textContent = ramen.rating;
  comment.textContent = ramen.comment;
};

const addSubmitListener = () => {
  document.querySelector('#new-ramen').addEventListener('submit',(event) => {
    event.preventDefault();
    const form = document.querySelector('#new-ramen')
    // Locate and read input value 
    const newName = document.querySelector('#new-name').value;
    const newRestaurant = document.querySelector('#new-restaurant').value;
    const newImage = document.querySelector('#new-image').value;
    const newRating = document.querySelector('#new-rating').value;
    const newComment= document.querySelector('#new-comment').value;
    // Create an object that contains all the new content
    const newRamen = {
      name : newName,
      restaurant : newRestaurant,
      image : newImage,
      rating : newRating,
      comment : newComment};
    // Update the ramen-menu with the image
    const ramenMenu = document.querySelector('#ramen-menu');
    const img = document.createElement('img');
    img.src = newImage
    img.addEventListener('click', () => handleClick(newRamen));
    ramenMenu.appendChild(img);
    // Select Locations (duplicated from handleClick)(make more efficient)
    const detailImage = document.querySelector('.detail-image');
    const name = document.querySelector('.name');
    const restaurant = document.querySelector('.restaurant');
    const rating = document.querySelector('#rating-display');
    const comment = document.querySelector('#comment-display');
    // Add values to locations variables
    detailImage.src = newImage;
    detailImage.alt = newName;
    name.textContent = newName;
    restaurant.textContent = newRestaurant;
    rating.textContent = newRating;
    comment.textContent = newComment;
    form.reset();
  } );
};

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

