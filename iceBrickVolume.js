function iceBrickVolume(radius, bottleLength, rimLength) {
    // Your code should be here ;)
    var brickVolume = 2 * Math.pow(radius, 2) * (bottleLength - rimLength);
    return brickVolume;
}