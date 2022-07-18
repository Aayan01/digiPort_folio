const toggle=document.querySelector('.nav__wrapper__toggle');
const ul=document.querySelector('.nav__wrapper__ul');

//add click event on toggle
toggle.addEventListener('click', ()=>{
    ul.classList.toggle('nav__active');
});

// name typewrite effect
const nameElement=document.querySelector('.header__data__contents__heading');
const nameText="Aayan Nayak"

let start = 0;
const typeWrite= () =>{
    if(start < nameText.length){
        // console.log(nameText.charAt(start));
        nameElement.innerHTML += nameText.charAt(start);
        start++;
        setTimeout(typeWrite, 300);
    }
}
typeWrite();

//open close modal
const modalBtn=document.querySelector('.modal-btn');
const modal=document.querySelector('.modal');
const modalClose=document.querySelector('.modal__wrapper__close');

//open modal
modalBtn.addEventListener('click', () => {
    modal.style.display="flex";
})
//close modal
modalClose.addEventListener('click', () =>{
    modal.style.display="none";
})