// 013 roman to integer

function romToInt(x) {
    const values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let result = 0;

    for(let i = 0; i < x.length; i++){
        let current = values[x[i]]
        let next = values[x[i+1]]

        if(current < next){
            result = result - current;
        }else{
            result = result + current;
        }
    }
    return result
}
console.log(romToInt("XI"))