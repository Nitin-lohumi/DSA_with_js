class Node{
    constructor(val){
      this.value= val;
      this.left=null;
      this.right=null;
    }
}
class Bstree{
    constructor(){
        this.root=null;
    }
    isTreeEpmty(){
       return this.root===null;
    }
    CreateTree(val){
     let newnode = new Node(val);
     if(this.root===null){
        return  this.root=newnode;
     }
     else{
        this.insertNode(this.root, newnode);
     }
    }

    insertNode(root,newnode){
        if(root.value>newnode.value){
         if(root.left===null){
            root.left=newnode;
         }
         else{
            this.insertNode(this.root.left,newnode);
         }
        }
        else{
            if(root.right===null){
                root.right=newnode;
             }
             else{
                this.insertNode(this.root.right,newnode);
             }
        }
    }
}
let bst = new Bstree();
bst.CreateTree(10);
bst.CreateTree(4);
bst.CreateTree(2);
bst.CreateTree(25);
bst.CreateTree(26);
bst.CreateTree(8);
bst.CreateTree(12);
console.log(bst);