/****
 * 1. Construct a binary search tree
 * 2. Insertion in a binary search tree
 * 3. Deletion in a binary search tree
 * 4. Searching a key in the BST
 * 5. Inorder Predecessor of the BST
 * 6. Inorder Successor of the BST
 */


const newNode = (data) =>  {
    return { data, left: null, right: null };
}

function insertNode(root, node) {
    let current = root;
    while(current && current.data) {
        if(node.data < current.data) {
            if(current.left && current.left.data) current = current.left;
            else {
                current.left = node;
                break;
            }
        } else {
            if(current.right && current.right.data) current = current.right;
            else {
                current.right = node;
                break;
            }
        }
    }
    return root;
}

function constructBST(arr) {
    let obj = newNode(arr[0]);
    for(let i = 1; i < arr.length; i++) {
        const ob = newNode(arr[i]);
        obj = insertNode(obj, ob);
    }
    console.log(obj);
    return obj;
}

// construction also includes insertion of nodes

const tree = constructBST([15, 10, 20, 8, 12, 16, 25]);

console.log(tree);

// deletion means two tress will be the correct result - inorder predeccessor / inorder successor

// SEARCHING

function searchInTheTree(root, key) {
    let res;
    while(root && root.data) {
        if(root.data === key) {
            res = root;
            break;
        }
        else if (key > root.data) root = root.right;
        else root = root.left;
    }
    return res;
}

const result = searchInTheTree(tree, 20);

console.log(result);

function inorderPredecessor(root, key){
    // largest element in the left subtree
    let tree = searchInTheTree(root, key).left;
    let res;
    while(tree){
        res = tree.data;
        tree = tree.right;
    }
    return res;
}

console.log(inorderPredecessor(tree, 15));


function inorderSuccessor(root, key) {
    // smallest element in the right subtree
    let tree = searchInTheTree(root, key).right;
    let res;
    while(tree){
        res = tree.data;
        tree = tree.left;
    }
    return res;
}

console.log(inorderSuccessor(tree, 15));
