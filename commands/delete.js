function delete_(str, arr) {
    let commandArgs = str.split(' ')
    if (commandArgs.length === 2 && commandArgs[0] === 'delete') {
        let i = Number(commandArgs[1])
        let arrLen = arr.length
        if (i < 0 || i > arrLen - 1) {
            return 'Error: invalid index: ' + i 
        } else {
            arr.splice(i, 1)
            return arr.join(' ')            
        }
    } else {
        throw new Error('Error: invalid command parameters')
    }
}

module.exports = delete_