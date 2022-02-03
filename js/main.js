/* DOM SELECTORS -- EVENT LISTENERS */
const canvas = document.querySelector('#canvas')
document.addEventListener('keydown', movementHandler)
// document.addEventListener('keyup', movementHandler) // useful for stretch goals
const movementDisplay = document.querySelector('#movement')

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
// const hero = {
//     x: 10,
//     y: 10,
//     width: 20,
//     height: 20,
//     color: 'hotpink',
//     render: () => {
//         ctx.fillStyle = hero.color
//         ctx.fillRect(hero.x, hero.y, hero.width, hero.height)
//     }
// }

// const ogre = {
//     x: 250,
//     y: 250,
//     width: 40,
//     height: 50,
//     color: 'green',
//     render: () => {
//         ctx.fillStyle = ogre.color
//         ctx.fillRect(ogre.x, ogre.y, ogre.width, ogre.height)
//     }
// }

// use the Crawler class to make canvas crawlers -- heroes or ogres
// ABSTRACTION -- making an object factory
class Crawler{
    constructor(x, y, width, height, color) {
        // define all the properties
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
    }

    // render method
    render() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height, this.color)
    }
}

// INSTANTIATE AN OGRE AND A HERO
const hero = new Crawler(10, 10, 20, 20, 'hotpink')
const ogre = new Crawler(250, 250, 40, 50, 'green')


function movementHandler(e) {
    //console.log(e)
    const speed = 10
    // movementDisplay.innerText = "X:" + hero.x + ' ' + 'Y:' + hero.y
    movementDisplay.innerText = `X:${hero.x} Y:${hero.y}`
    // conditional logic based on what key was pressed
    if (e.key === 'a' || e.key === 'ArrowLeft') {
        hero.x -= speed
    }
    if (e.key === 'd' || e.key === 'ArrowRight') hero.x += speed // if written on same line
    if (e.key === 's' || e.key === 'ArrowDown') hero.y += speed
    if (e.key === 'w' || e.key === 'ArrowUp') hero.y -= speed
}

function gameLoop() {
    // clear the canvas and then render
    // clear the entire canvas from top left to bottom right
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // render all gameplay elements (aka the hero and ogre)
    ogre.render()
    hero.render() // depending on what was rendered first, the pink box will appear under or above the green ogre
    // ogre.render()
    // add gameplay logic in here -- such as win conditions and collision detection

}