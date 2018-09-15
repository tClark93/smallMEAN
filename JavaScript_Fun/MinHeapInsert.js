function insertIntoHeap(heap, val){
    if (heap.length == 0){
        heap.push(undefined);
        heap.push(val);
        console.log(heap);
        return;
    }
    heap.push(val)
    var idx = heap.length-1
    while(idx){
        if(heap[idx] < heap[Math.floor(idx/2)]){
            var temp = heap[idx];
            heap[idx] = heap[Math.floor(idx/2)];
            heap[Math.floor(idx/2)] = temp;
            idx = Math.floor(idx/2)
        }
        else{
            console.log(heap);
            return;
        }
    }
}
    // sample outputs:
    // insertIntoHeap([], 13);  // alters the empty array to be [undefined, 13]
    // insertIntoHeap([undefined, 3, 8, 10, 11, 9, 20, 14], 7); // alters the array to [undefined, 3, 7, 10, 8, 9, 20, 14, 11]

insertIntoHeap([undefined, 3, 8, 10, 11, 9, 20, 14], 7);
insertIntoHeap([undefined, 3, 8, 10, 11, 9, 20, 14], 28);
insertIntoHeap([undefined, 3, 8, 10, 11, 9, 20, 14], 1);