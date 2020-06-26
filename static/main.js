import { canvas, circle, rect, image, gradientRect } from './painter.js'
import { append, loadImage } from './utils.js'

import { Paint } from './paint.js'

const paint = new Paint()
append(paint.canvas())

const draw2 = async () => {
    console.log('async')
    const img = await loadImage('static/pizza.jpg')
    paint.image(img)
}

// paint.style({
//     lineWidth: 2, //size
//     lineCap: 'round',
// })

class Quest {
    constructor() {
        this.painter = new Paint(400, 400)
        this.painter.rect(0, 0, 400, 400)
        this.painter.text('Avaiable Quests', 50, 50)
        this.painter.rect(100, 100, 50, 50)
        this.painter.rect(160, 100, 50, 50)
        this.painter.rect(220, 100, 50, 50)
    }

    get() {
        return this.painter.canvas()
    }
}

const q = new Quest()
console.log(q.get())

paint.image(q.get(), 50, 50)

const draw = async (src, c) => {
    const img = await loadImage(src)
    image(c, img)
}

export default () => {
    const c = canvas()
    append(c)
    gradientRect(c)
    // draw('static/pizza.jpg', c)
}
