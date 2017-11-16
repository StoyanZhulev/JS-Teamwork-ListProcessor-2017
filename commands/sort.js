function sort(str, arr) {
    if (str === 'sort') {
        return arr.sort().join(' ')
    } else {
        throw new Error('Error: invalid command parameters')
    }
}

module.exports = sort