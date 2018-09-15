function BST(){
    this.root = null;
}

function Node(val){
    this.value = val;
    this.left = null;
    this.right = null;
}

BST.prototype.insert = function (val){
    if(this.root == null){
        this.root = Node(val);
        return this;
    }
    else{
        var climber = this.root;
        while(climber != null){
            if(val < climber.value){
                if(climber.left == null){
                    climber.left = new Node(val);
                    return this
                }
                climber = climber.left
            }
            else{
                if(climber.right == null){
                    climber.right = new Node(val);
                    return this;
                }
                climber = climber.right
            }
        }
    }
}

var first = new BST(); 
first.root = new Node(30); 
first.insert(20).insert(25).insert(40).insert(50).insert(15).insert(10).insert(80).insert(100).insert(35);
console.log(first);
console.log("$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$")
console.log(first.root.right);
console.log("$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$")
console.log(first.root.left);