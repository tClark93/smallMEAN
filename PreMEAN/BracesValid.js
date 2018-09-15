function bracesValid(word){
    var arr = []
    var dict = {"[" : 0, "(" : 0, "{" : 0};
    for(i=0; i < word.length; i++){
        if (word[i] == "{"){
            dict["{"]++
            arr.push(word[i])
        }
        if (word[i] == "("){
            dict["("]++
            arr.push(word[i])
        }
        if (word[i] == "["){
            dict["["]++
            arr.push(word[i])
        }
        if (word[i] == "}"){
            dict["{"]--
            if(arr[arr.length-1] != "{"){
                console.log("Braces Invalid {}")
                return false
            }
            else{
                arr.pop()
            }
        }
        if (word[i] == ")"){
            dict["("]--
            if(arr[arr.length-1] != "("){
                console.log("Braces Invalid ()")
                return false
            }
            else{
                arr.pop()
            }
        }
        if (word[i] == "]"){
            dict["["]--
            if(arr[arr.length-1] != "["){
                console.log("Braces Invalid []")
                return false
            }
            else{
                arr.pop()
            }
        }
    }
    if(arr.length != 0) {
        console.log("Braces Invalid Arr")
        return false
    }
    if(dict["("] != 0 || dict["["] != 0 || dict["{"] != 0) {
        console.log("Braces Invalid dict")
        return false
    }
    console.log("true")
    return true
}

bracesValid("{e(a)f{b}g[h(c)d]i}")