function FizzBuzz(x){
    if(typeof(x) == String || x < 1){
        console.log("This function only accepts positive integers")
        return
    }
    string = ""
    for(i=1; i<=x; i++){
        if(i % 3 == 0 && i % 5 == 0){
            string+="Fizzbuzz";
        }
        else if(i % 3 == 0){
            string+="Fizz, ";
        }
        else if(i % 5 == 0){
            string+="Buzz, ";
        } 
        else{
            string+=i+", "
        }
    }
    console.log(string)
}

FizzBuzz(42)


