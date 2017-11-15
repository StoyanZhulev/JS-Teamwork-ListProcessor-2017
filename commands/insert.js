function insert(str, arr){
    let commandArgs = str.split(' ');
    
    if(commandArgs.length === 3 && commandArgs[0] === 'insert'){
        let index = Number(commandArgs[1]);
        let string = commandArgs[2];
        if (index > (arr.length + 1) || index < 0) {
            throw new Error('Error: index is out of range')
        }
        arr.splice(commandArgs[1], 0, commandArgs[2])
    }else{
        throw new Error('Error: invalid command parameters')
    }

    return arr.join(' ');
}

module.exports = insert;