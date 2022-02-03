/* DOM SELECTORS */
const canvas = document.querySelector('#canvas')

/* GAME STATE / CANVAS RENDERING STUFF */
// setup the renderer
const ctx = canvas.getContext('2d')
// set canvas size to be the same as window
// after the window computers -- set canvas to be actual size of space it takes up
canvas.setAttribute('height', getComputedStyle(canvas)['height'])
canvas.setAttribute('width', getComputedStyle(canvas)['width'])
// setup the gameloop
const gameLoopInterval = setInterval(gameLoop, 60) // game logic + rendering is tied to speed loop runs
// console.log(ctx)

// if you wanted the canvas size to be a static size of 800 pixels


/* GAME FUNCTIONS */
console.log(canvas)

// // set the color property of the context
// ctx.fillStyle = 'red' // any valid css color will work
// // set the line width
// // ctx.lineWidth = 10 // always in pixels

// // use a context rendering method
// // (x position, y position, width, height)
// ctx.fillRect(10, 10, 100, 100)

// ctx.lineWidth = 30 // always in pixels
// ctx.strokeStyle = 'green'
// // (x position, y position, width, height)
// ctx.strokeRect(300, 300, 100, 100) // empty square

// // encapsulate square drawing into a function
// function drawBox(x, y, width, height, color) {
//     ctx.fillStyle = color
//     ctx.fillRect(x, y, width, height)
// }

// drawBox(150, 150, 30, 30, "purple")
// drawBox(200, 150, 45, 60, "#FFFFFF") // white hex



// data and functions to update the game element
// we have encapsulated the methods and data that the methods use together -- OOP ENCAPSULATION
const hero = {
    x: 10,
    y: 10,
    width: 20,
    height: 20,
    color: 'hotpink',
    render: () => {
        ctx.fillStyle = hero.color
        ctx.fillRect(hero.x, hero.y, hero.width, hero.height)
    }
}

const ogre = { }

function gameLoop() {
    // render all gameplay elements (aka the hero and ogre)
    hero.render()
    // add gameplay logic in here -- such as win conditions and collision detection

}