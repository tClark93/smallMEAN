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
        this.root = new Node(val);
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

BST.prototype.height = function(climber) {
    if(climber != null){
        return 1 + Math.max(this.height(climber.left), this.height(climber.right))
    }
    else{
        return 0
    }
}

var tree = new BST();
tree.insert(50).insert(40).insert(60).insert(45).insert(55).insert(30).insert(20).insert(10);
console.log(tree.height(tree.root));