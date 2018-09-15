function removeFromMinHeap(heap){
    if (heap.length < 2){
        console.log("invalid heap");
        return false
    }
    else if (heap.length == 2){
        heap.pop()
        console.log(heap)
        return;
    }
    else{
        for(idx = 1; idx < heap.length;){
            if(idx*2 > heap.length){
                var temp = heap[idx];
                heap[idx] = heap[heap.length-1]
                heap[heap.length-1] = temp;
                idx = idx*2
            }
            else if(heap[idx*2] < heap[idx*2+1]){
                var temp = heap[idx*2];
                heap[idx*2] = heap[idx];
                heap[idx] = temp;
                idx = idx*2
            }
            else{
                var temp = heap[idx*2+1];
                heap[idx*2+1] = heap[idx];
                heap[idx] = temp;
                idx = idx*2+1
            }
        }
    }
    heap.pop();
    console.log(heap);
    return;
}
    // sample outputs:
// 
    // changes the heap to [undefined, 8, 12, 10, 17, 13, 15] and returns 3
// removeFromMinHeap([undefined, 8]);
    // changes the heap to [undefined] and returns 8

removeFromMinHeap([undefined, 3, 12, 8, 17, 13, 15, 10]);
// console.log("hello")