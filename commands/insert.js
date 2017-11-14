function insert(str, arr){
    let commandArgs = str.split(' ');
    
    if(commandArgs.length === 3 && commandArgs[0] === 'insert'){
        arr.splice(commandArgs[1], 0, commandArgs[2])
    }else{
        console.log(str)
        console.log(arr)
        throw new Error('Error: invalid command parameters')
    }

    return arr.join(' ');
}

module.exports = insert;