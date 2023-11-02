function plusMinus(arr) {
    // Write your code here
    let pos = 0;
    let neg = 0;
    let zero = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            pos++;
        } else if(arr[i] < 0){
            neg++;
        }else zero++;
    }
    console.log(pos/arr.length + "\n" + neg/arr.length + "\n" + zero/arr.length);
}

plusMinus([-4, 3, -9, 0, 4, 1]);