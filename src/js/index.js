const title = document.querySelector('.title')
const eq1 = document.querySelector('.equation.gauss')
const eq2 = document.querySelector('.equation.gauss-2')
const eq3 = document.querySelector('.equation.faraday')
const eq4 = document.querySelector('.equation.ampere')
const modal1 = document.querySelector('.modal.one')
const modal2 = document.querySelector('.modal.two')
const modal3 = document.querySelector('.modal.three')
const modal4 = document.querySelector('.modal.four')

const tl = new TimelineMax({delay:.5})
tl.fromTo(title, .5, {y: '30', opacity:0}, {y:0, opacity:1})
tl.fromTo(eq1, .5, {x: '-50', opacity:0}, {x:0, opacity:1})
tl.fromTo(eq2, .5, {x: '50', opacity:0}, {x:0, opacity:1})
tl.fromTo(eq3, .5, {x: '-50', opacity:0}, {x:0, opacity:1})
tl.fromTo(eq4, .5, {x: '50', opacity:0}, {x:0, opacity:1})

eq1.addEventListener('click', ()=>{
    modal1.classList.toggle('visible')    
    tl.fromTo(modal1, .5, {x: '50', opacity:0}, {x:0, opacity:1})
})

eq2.addEventListener('click', ()=>{
    modal2.classList.toggle('visible')    
    tl.fromTo(modal2, .5, {x: '-50', opacity:0}, {x:0, opacity:1})
})

eq3.addEventListener('click', ()=>{
    modal3.classList.toggle('visible')    
    tl.fromTo(modal3, .5, {x: '50', opacity:0}, {x:0, opacity:1})
})

eq4.addEventListener('click', ()=>{
    modal4.classList.toggle('visible')    
    tl.fromTo(modal4, .5, {x: '-50', opacity:0}, {x:0, opacity:1})
})

