String.prototype.hashCode = function(){
        var hash = 0;
        if(this.length == 0){
            return hash;
        }
        for(i=0; i<this.length; i++){
            var char = this.charCodeAt(i);
            hash = ((hash<<5)-hash) + char;
            hash &= hash;                
        }
        return hash;
    }
    var hashedKey = "role".hashCode();

function hashInsert(dict, cap){
    var arr = []
    arr.length = cap;
    for(var key in dict){
        var idx = Math.abs(Math.trunc(key.hashCode() % arr.length))
        if(arr[idx] == null){
            arr[idx] = [[key, dict[key]]]
        }
        else{
            for(j=0; j<arr[idx].length; j++){
                if (arr[idx][j][0] == key){
                    arr[idx][j] = [key, dict[key]]
                    break;
                }
                if(j == arr[idx].length-1 && arr[idx][j][0] != key){
                    arr[idx].push([key, dict[key]])
                }
            }
        }
    }
    return arr;    
}

function lookUp(dict, arr){
    for(var key in dict){
        var idx = Math.abs(Math.trunc(key.hashCode() % arr.length))
        if(arr[idx] != null){
            for(j=0; j <arr[idx].length; j++){
                if(arr[idx][j][0] == key){
                    return true
                }         
            }
        }
    }
    return false
}

function grow(arr){
    len = arr.length;
    arr.length = Math.trunc(len * 1.5);
    for(var i = 0 ; i < len; i++){
        for(var j = 0; j < arr[i].length-1; j++){
            console.log(arr.length+" This is the length")
            h = Math.abs((arr[i][j][0]).hashCode() % arr.length)
            console.log(h+" This is h")
            if(h == i){
                continue
            }
            else{
                
                z = (arr[i].length)-1
                console.log("z: "+z+" arr[i][z]: "+arr[i][z])
                var temp = arr[i][z]
                arr[i][z] = arr[i][j]
                console.log("j: "+j+" arr[i][j]: "+arr[i][j])
                arr[i][j] = temp
                console.log(arr[h]+" This is array[h]")
                if(arr[h] == null){
                    arr[h] = arr[i][z]
                }
                else{
                    arr[h].push(arr[i][z])
                }
                arr[i].pop()
                j--
            }
        }
    }
    return arr
}

var test = hashInsert({Troy: "Clark", Dan: "Engle", Frank:"DePaul", Claire:"Elliott", Phil:"Krull", Evan:"Hobbs", Tom:"Reese", Jesus:"Christ", Miami:"Vice", Troy: "Miller"}, 4)
console.log(test)
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
console.log(grow(test))
// console.log(lookUp({Ty: "Towry"}, names))