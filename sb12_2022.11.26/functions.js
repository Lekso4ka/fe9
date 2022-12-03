const getRandom = function(max = 100, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}

const getColor = function(a = 100) {
    return `rgba(${getRandom()}, ${getRandom()}, ${getRandom()}, ${a / 100})`;
}

const getGradient = function(colors = [], dir = "to left bottom", cnt = 3) {
    if (!colors.length) {
        while(cnt--) {
            colors.push(getColor(getRandom(101, 70)));
        }
    }
    return `linear-gradient(${dir}, ${colors.join(", ")})`;
}