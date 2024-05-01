// index.js

// Callbacks
const handleClick = (ramen) => {
  // Add code
};

const addSubmitListener = () => {
  // Add code
}

const displayRamens = () => {
  fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    .then(ramenData => {
      const ramenMenu = document.getElementById('ramen-menu');
      ramenData.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.img;
        ramenMenu.appendChild(img);
      });
    })
    .catch(error => console.log(error));
};


const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};




//database link: http://localhost:3000/ramens
