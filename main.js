const readMoreBtn = document.querySelector('.read-more-btn');
const moreText = document.querySelector('.more-text');
const text = document.querySelector('.text');
const readMoreBtn2 = document.querySelector('.read-more-btn2');
const moreText2 = document.querySelector('.more-text2');
const text2 = document.querySelector('.text2');


readMoreBtn.addEventListener('click', () => {
   text.classList.toggle("show-more");
   if (readMoreBtn.innerText === 'Read More'){
       moreText.style.display = 'inline';
       readMoreBtn.innerText = 'Read Less';
   }
   else{
       readMoreBtn.innerText = 'Read More';
       moreText.style.display = 'none';
   }
   
})

readMoreBtn2.addEventListener('click', () => {
    text2.classList.toggle("show-more");
    if (readMoreBtn2.innerText === 'Read More'){
        moreText2.style.display = 'inline';
        readMoreBtn2.innerText = 'Read Less';
    }
    else{
        readMoreBtn2.innerText = 'Read More';
        moreText2.style.display = 'none';
    }
    
 })