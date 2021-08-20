exports.toTitleCase = function(text) {
    if(!text || typeof text !== "string") throw "Please provide a valid text input!";

    return text.split(' ')
        .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
        .join(' ')
}