function MMA(arr){
    var max = arr[0]
    var min = arr[0]
    var sum = 0
    var count = 0
    for(i=0; i<arr.length; i++){
        if (arr[i] < min){
            min = arr[i]
        }
        if (arr[i] > max){
            max = arr[i]
        }
        sum += arr[i]
        count++
    }
    var avg = sum/count;
    console.log("The minimum is "+min+", the maximum is "+max+", the average is "+avg+"."); 
}

MMA([1,2,3,4,5])