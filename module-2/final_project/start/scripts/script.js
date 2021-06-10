//grabbing all buttons
let arrButtons = document.querySelectorAll('.filter');
//grabbing all images
let arrImages = document.querySelectorAll('.animal');

// console.log(arrButtons);
// console.log(arrImages);

//creating a loop for all buttons
for(counter=0; counter < arrButtons.length; counter++){
    //grabbing individual button from the array by the key
    let currentButton = arrButtons[counter];
    //adding event listener to button when clicked
    currentButton.addEventListener('click',function(){
        //grabbing the current animal to show and hide
        let animialToShow = this.getAttribute('animal');
        // console.log(animialToShow);
        //looping through all images to show/ hide them
        for(imageCounter=0; imageCounter < arrImages.length; imageCounter++){
            //grabbing current image from array using key
            let currentImage = arrImages[imageCounter];
            // console.log(currentImage);
            //if the image contains the animal name in it's classes
            if(currentImage.classList.contains(animialToShow)){
                // currentImage.style.display = 'inline';
                //show image
                currentImage.parentNode.style.display = 'block';
            } else {
                //hide image
                currentImage.parentNode.style.display = 'none';
            }
            //override for show all
            if(animialToShow == 'all'){
                currentImage.parentNode.style.display = 'block';
            }
        }
    });
}