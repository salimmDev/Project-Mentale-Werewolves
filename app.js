const items = document.querySelectorAll('.slide-img');
const nbSlide = items.length;
const suivant = document.querySelectorAll('.right');
const precedent = document.querySelectorAll('.left');
let count = 0;

function slideSuivante(){
    items[count].classList.remove("active");

    if(count < nbSlide -1){
        count++;
    }
    else{
        count = 0;
    }

    items[count].classList.add("active")
}
suivant[0].addEventListener('click', slideSuivante);

function slidePrecedente() {
    items[count].classList.remove("active");
    if(count > 0){
        count --;
    }
    else{
            count = nbSlide -1;
        }
        items[count].classList.add("active")
}
precedent[0].addEventListener('click', slidePrecedente);