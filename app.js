const keys = document.querySelectorAll('.key');
let input = document.querySelector('input');
const deleteLast = document.querySelector('.key-delete');
const deleteAll = document.querySelector('.key-return');
const space = document.querySelector('.key-space')
const shift = document.querySelector('.key-shift')
const key123 = document.querySelector('.key-123')
const keyGlobe = document.querySelector('.key-globe')

keys.forEach((key) => {
key.addEventListener('click', function() {
    input.value += key.innerText
    key.classList.toggle('active')
    setTimeout(() => {
        key.classList.remove('active')
    }, 200);
    
    })
})

deleteAll.addEventListener('click', () => {
    input.value = '';
})

deleteLast.addEventListener('click', () => {
   const newInputValue = input.value.slice(0, -1)
   input.value = newInputValue;
})
   
space.addEventListener('click', () => {
   input.value += ' ';
   space.style.backgroundColor = 'yellow';
   space.style.color = 'rgb(29, 29, 29)';
   setTimeout(() => {
      space.style.backgroundColor = 'rgb(93, 0, 180)';
      space.style.color = 'rgb(252, 193, 117)';
   }, 300);
   
})  

key123.addEventListener ('click', () =>{
    key123.classList.toggle('switch')
   keys.forEach((key) => {
       key.classList.toggle('change')
       key.classList.remove('globe')
       key.classList.remove('active')
   })
   key123.style.backgroundColor = 'yellow';
   key123.style.color = 'rgb(29, 29, 29)';
   setTimeout(() => {
      key123.style.backgroundColor = 'rgb(93, 0, 180)';
      key123.style.color = 'rgb(252, 193, 117)';
   }, 300);
})
keyGlobe.addEventListener ('click', () =>{
   keys.forEach((key) => {
       key.classList.toggle('globe')
       key.classList.remove('change')
       key123.classList.remove('switch')
   })
 
})

shift.addEventListener('click', () => {
  keys.forEach((key) => {
      key.classList.toggle('louer-case')
  })
});



// console.log(keys)
