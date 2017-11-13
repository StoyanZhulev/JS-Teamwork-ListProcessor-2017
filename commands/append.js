function append(str, arr){
    let commandArgs = str.split(' ');
    if(commandArgs.length === 2 && commandArgs[0] === 'append'){
        arr.push(commandArgs[1]);
    }else{
        throw new Error('Error: invalid command parameters')
    }

    return arr.join(' ');
}

module.exports = append;