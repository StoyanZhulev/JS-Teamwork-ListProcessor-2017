function end(str, arr){
    let commandArgs = str;
    
    if(commandArgs !== 'end'){
        throw new Error('Error: invalid command parameters')
    }

    return 'Finished';
}

module.exports = end;