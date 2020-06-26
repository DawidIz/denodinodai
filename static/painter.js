const canvas = (width = 800, height = 600) => {
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    return canvas
}

const context = canvas => canvas.getContext('2d')

const circle = (canvas, x = 0, y = 0, r = 10) => {
    const ctx = context(canvas)
    ctx.beginPath()
    ctx.arc(x, y, r, 0, 2 * Math.PI)
    ctx.stroke()
}

const rect = (canvas, x = 0, y = 0, width = 100, height = 50) => {
    const ctx = context(canvas)
    ctx.beginPath()
    ctx.rect(x, y, width, height)
    ctx.stroke()
}

const image = (canvas, img) => {
    const ctx = context(canvas)
    ctx.drawImage(img, 0, 0)
}

const gradient = () => {
    const ctx = context(canvas(20, 20))
    const gradient = ctx.createLinearGradient(
        -ctx.canvas.width,
        0,
        ctx.canvas.width * 2,
        0
    )

    gradient.addColorStop(0, 'green')
    gradient.addColorStop(0.8, 'yellow')
    gradient.addColorStop(1, 'grey')

    return gradient
}

const pattern = () => {
    const canva = canvas(20, 20)
    const ctx = context(canva)
    ctx.fillStyle = gradient()
    ctx.fillRect(0, 0, 20, 20)
    return canva
}

const gradientRect = canvas => {
    const ctx = context(canvas)
    ctx.fillStyle = ctx.strokeStyle = ctx.createPattern(pattern(), 'repeat')
    ctx.lineWidth = 4.0
    ctx.lineJoin = 'round'
    ctx.beginPath()
    ctx.rect(50, 50, 100, 100)
    ctx.stroke()
    // ctx.fill()
    ctx.closePath()

    ctx.strokeRect(200, 200, 100, 100)

    ctx.fillRect(400, 400, 100, 100)
}

const painter = {
    context: '',
    show: () => {
        console.log('xd')
    },
}

painter.show()

export { canvas, circle, rect, image, gradientRect, context }
