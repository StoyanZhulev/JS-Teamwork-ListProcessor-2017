function count(str, arr) {
    let commandArgs = str.split(' ')
    if (commandArgs.length === 2 && commandArgs[0] === 'count') {
        const len = arr.length
        let count = 0
        for (let i = 0; i < len; i += 1) {
            if (commandArgs[1] === arr[i]) {
                count += 1
            }
        }

        return count
    } else {
        throw new Error('Error: invalid command parameters')
    }
}

module.exports = count