module.exports = (str) => {
    let reversed = '';
    reversed = str.split(" ")
        .map(word => {
            return word
                .split("")
                .reverse()
                .join("");
        })
        .join(" ");
    console.log(`filter 'reverse': ${reversed}`)
    return reversed;
}