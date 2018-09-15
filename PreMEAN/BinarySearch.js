// function binarySearch(arr, val, idx){
//     if(idx == null){
//         idx = Math.floor((arr.length-1)/2)
//     }
//     console.log(idx)
//     if(arr[idx] == val){
//         console.log(idx)
//         return true
//     }
//     else if (arr[idx + 1] == val){
//         console.log(idx+1)
//         return true
//     }
//     else if (arr[idx - 1] == val){
//         console.log(idx-1)
//         return true
//     }
//     else{
//         if((val < arr[idx+1] && val > arr[idx]) || (val < arr[idx] && val > arr[idx-1]) || val > arr[arr.length-1]){
//             console.log("Value not in array")
//             return false
//         }
//         else if(val > arr[idx]){
//             binarySearch(arr, val, idx=Math.floor((idx+arr.length-1)/2))
//         }
//         else{
//             binarySearch(arr, val, idx=Math.floor(idx/2))
//         }
//     }
// }

// binarySearch([2,4,5,7,9,11,14,18,20], 2)

function noRecur(arr, val){
    var idx = Math.floor((arr.length-1)/2);
    while(idx != null){
        if(arr[idx] == val){
            console.log(idx)
            return true
        }
        else if (arr[idx + 1] == val){
            console.log(idx+1)
            return true
        }
        else if (arr[idx - 1] == val){
            console.log(idx-1)
            return true
        }
        else{
            if((val < arr[idx+1] && val > arr[idx]) || (val < arr[idx] && val > arr[idx-1]) || val > arr[arr.length-1]){
                console.log("Value not in array")
                return false
            }
            else if(val > arr[idx]){
                idx = Math.floor((idx+arr.length-1)/2)
            }
            else{
                idx = Math.floor(idx/2)
            }
        }
    }
}

noRecur([1,3,5,7,9], 6)