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

function inOrder(climber){
    if(climber != null){
        if(climber.left != null){
            inOrder(climber.left);
        }
        console.log(climber.value)
        if(climber.right != null){
            inOrder(climber.right); 
        }
    }
}

function preOrder(climber){
    if(climber != null){
        console.log(climber.value)
        if(climber.left != null){
            preOrder(climber.left);
        }
        if(climber.right != null){
            preOrder(climber.right); 
        }
    }
}

function postOrder(climber){
    if(climber != null){
        if(climber.left != null){
            postOrder(climber.left);
        }
        if(climber.right != null){
            postOrder(climber.right); 
        }
        console.log(climber.value)
    }
}


var first = new BST(); 
var second = new BST(); 
first.root = new Node(30); 
first.insert(50).insert(40).insert(35).insert(25).insert(45).insert(55).insert(65).insert(15);
// console.log(first);
// console.log("$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$")
// console.log(first.root.right);
// console.log("$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$")
// console.log(first.root.left);
postOrder(first.root);
// inOrder(second)