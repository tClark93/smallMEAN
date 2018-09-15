function BubbleSort(arr){
    for(i=0; i<arr.length; i++){
        for(j=0; j<arr.length-i; j++){
            if(arr[j]>arr[j+1]){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    console.log(arr)
}

BubbleSort([3,1,6,8,2,5,4,7])