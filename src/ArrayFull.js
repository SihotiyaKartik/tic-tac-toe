const ArrayFull = (squares) => {
    for(let i=0;i<squares.length;i++){
        if(!squares[i])return false;
    }
    return true;

}
export default ArrayFull