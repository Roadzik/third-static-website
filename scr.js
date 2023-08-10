let work = 1
let work2 = 1
let work3 = 1
let el = document.querySelector('.second')
let all = document.querySelectorAll('.second p')
let el2 = document.querySelector('.third')
let all2 = document.querySelectorAll('.p')
let el3 = document.querySelector('.id')
let all3 = document.querySelectorAll('.data>div, .data>h1, .data>h4')
let all4 = document.querySelector('.me')
let sec = 1
function xdd(num){
    if(num==1){
        return'5vw'
    }
    if(num==2){
        return '35vw'
    }
    if(num==3){
        return '65vw'
    }
}

el.addEventListener('mouseover', e =>{
    if(work){
        all.forEach(f => {
            f.style = `transition: calc(1s*${sec});top:6vh;visibility:visible;`
            sec++
        });
    work = 0
    sec =1
    }
})



el2.addEventListener('mouseover', e=>{
        if(work2){
        all2.forEach(f=>{
            console.log(sec)
            f.style = `transition-delay: calc(1s*${sec});left:${xdd(sec)};`
            sec++
        })
        work2 = 0
        sec =1
    }

})


el3.addEventListener('mouseover', e=>{
        if(work3){
        all3.forEach(f=>{
            console.log(f.innerHTML)
            f.style.transitionDelay = `calc(1s*${sec}`
            f.style.left = '10vw'
            sec++
            if(f.innerHTML.includes('img', 'p')){
                f.style.left = '9.5vw'
            }
        })
        all4.style.right='14vw'
        work3 = 0
        sec =1
    }
})


