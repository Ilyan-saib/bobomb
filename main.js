let bluegnr = document.getElementById('bluegnr')
let redgnr = document.getElementById('redgnr')
let main = document.getElementById('main')
let spawn_red = document.getElementById('spawn_red')
let spawn_blue = document.getElementById('spawn_blue')





function createelm(color) {




 let bomb = document.createElement('img')
 bomb.classList.add(`bomb_${color}`)
bomb.src = `./sprites/bomb_${color}.png`
main.appendChild(spawn_red)
main.appendChild(spawn_blue)

    


}










bluegnr.addEventListener('click', ()=>{


createelm('blue')


})


redgnr.addEventListener('click', ()=>{


    createelm('red')
    
    
    })


 