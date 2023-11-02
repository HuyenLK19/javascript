function miniMaxSum(arr) {
    // Write your code here
    arr.sort((a, b ) => a - b );
    let min = 0;
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        if(i < arr.length - 1){
            min += arr[i];
        }
        if(i > 0){
            max += arr[i];
        }
    }
    console.log(min + " " + max);
}

miniMaxSum([4, 6, 1, 9, 3]);