function bite(color) {
    const r = parseInt((color[0] + color[1]), 16)
    const g = parseInt((color[2] + color[3]), 16)
    const b = parseInt((color[4] + color[5]), 16)

    return [r, g, b]
}

function bval(x) {
    return x.toString().length == 1 ? "0" + x : x
} 

function mixHEX(color1, color2) {
    if(color1.indexOf("#") == -1 || color2.indexOf("#") == -1) return "No hex value!"
    const color1body = color1.split("#").join("")
    const color2body = color2.split("#").join("")

    if(color1body.length != 6 || color2body.length != 6) {
        return "Color must be: #RRGGBB"
    }

    const color1_ = bite(color1body)
    const color2_ = bite(color2body)

    const mixin = [
        Math.min(color1_[0] + color2_[0], 255),
        Math.min(color1_[1] + color2_[1], 255),
        Math.min(color1_[2] + color2_[2], 255)
    ]

    return "#" + mixin.map(x => bval(x.toString(16))).join("")
}

module.exports = mixHEX