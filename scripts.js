var menu = document.querySelector('.linksMobile');


var cont = 0;
function mouseScreen(){
    cont = window.scrollY
    // console.log(cont)
}


var interval = setInterval(mouseScreen, 100);

setInterval(() => {
    if(cont > 0){
        console.log('Foi banana, é maior que zero')

        menu.classList.add('SumirMenu')


    }else{
        // menu.classList.remove('SumirMenu')
        menu.classList.remove('SumirMenu')
    }

}, 100);
