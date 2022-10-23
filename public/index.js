const menu = document.querySelector('#menu');

const burger = document.querySelector('#burger');

// if(!burger.classList.contains('hidden')){
//     menu.classList.add('hidden')
// }

burger.addEventListener('click',()=>{
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');

    }else{
        menu.classList.add('hidden')
    }
})

