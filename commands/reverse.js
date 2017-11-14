function reverse(str, arr){
    let commandArgs = str;
    
    if(commandArgs === 'reverse'){
        arr.reverse();
    }else{
        throw new Error('Error: invalid command parameters')
    }

    return arr.join(' ');
}

module.exports = reverse;