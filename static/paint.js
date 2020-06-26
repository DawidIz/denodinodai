const canvas = (width = 800, height = 600) => {
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    return canvas
}

const context = canvas => canvas.getContext('2d')

//no wrap
const getLines = (ctx, text, maxWidth) => {
    const words = text.split(' ')
    const lines = []
    let line = ''

    const compare = word => {
        const text = line ? `${line} ${word}` : word
        const width = ctx.measureText(text).width
        if (width > maxWidth) return true
    }

    words.forEach(word => {
        if (compare(word)) {
            lines.push(line)
            line = word
        } else line = line + ' ' + word
    })

    console.log(lines)
}

const brush = {
    fillStyle: 'red',
    strokeStyle: 'blue',
    lineJoin: 'round',
}

class Paint {
    constructor(ctx = null) {
        if (ctx instanceof HTMLCanvasElement) {
            this.ctx = ctx.getContext('2d')
        } else if (ctx instanceof CanvasRenderingContext2D) {
            this.ctx = ctx
        } else {
            this.ctx = context(canvas())
        }
    }

    //@desc draw line from point (x,y) to point (x2,y2)
    line(x, y, x2, y2) {
        this.ctx.beginPath()
        this.ctx.moveTo(x, y)
        this.ctx.lineTo(x2, y2)
        this.ctx.stroke()
    }

    // @desc draw rectangle
    rect(x, y, w, h) {
        this.ctx.strokeRect(x, y, w, h)
    }

    // @desc draw square
    square(x, y, side) {
        this.ctx.strokeRect(x, y, side, side)
    }

    text(string, x, y) {
        this.ctx.strokeText(string, x, y)
    }

    clear(x = 0, y = 0, w = this.ctx.canvas.width, h = this.ctx.canvas.height) {
        this.ctx.clearRect(x, y, w, h)
    }

    image(img, x = 0, y = 0) {
        this.ctx.drawImage(img, x, y)
    }

    style(style) {
        this.ctx.save()
        for (let [key, value] of Object.entries(style)) {
            this.ctx[key] = value
        }
    }

    canvas() {
        return this.ctx.canvas
    }
}

export { Paint }

// Paint.prototype.fun = () => {}
// const p = Paint()
// p.fun()

// //static
// Paint.fun = () => {}
// Paint.fun()
