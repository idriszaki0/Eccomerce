const productImages = document.querySelectorAll(".product-images img"); //selecting all images thumbs
const productImageSlide = document.querySelector(".image-slider"); //selecting image slider element

let activeImageSlide = 0; // default sldier image

productImages.forEach((item, i) => { // looping thrrough each image thumb
    item.addEventListener('click', () => { // adding click event to each image thumbnail
        productImages[activeImageSlide].classList.remove('active'); //removing active class from current image thumb
        item.classList.add('active'); // adding active class to the current or clicked image thuimb
        productImageSlide.getElementsByClassName.backgroundImage = `url('${item.src}')`; //setting up image slider's background images
        activeImageSlide = i; // updating the image slider varibale to track current thumb
    })
})

// toggle size buttons
const sizeBtns = document.querySelectorAll('.size-radio-btn'); //selecting size buttons
let checkedBtn = 0; //current selected button

sizeBtns.forEach((item, i) => { // looping through each button
    item.addEventListener('click', () => {  // adding click event to each
        sizeBtns[checkedBtn].classList.remove('check'); // removing check clas from the current button
        item.classList.add('check'); //adding check class to cliked button
        checkedBtn = i; //upading the variable
    })
})