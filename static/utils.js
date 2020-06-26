const append = (item, where = document.body) => {
    where.append(item)
}

const loadImage = async src => {
    const img = new Image()
    img.src = src
    await img.decode()
    return img
}

export { append, loadImage }
