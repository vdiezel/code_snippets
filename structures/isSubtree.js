// solution 1

function isSubtree(t1, t2) {
    return JSON.stringify(t1).indexOf(JSON.stringify(t2)) !== -1
}



// Solution 2
function isEqual(t1, t2){
    if(!t2) return !t1
    if(!t1) return false
    if(t1.value != t2.value) return false

    return isEqual(t1.left, t2.left) && isEqual(t1.right, t2.right)
}



function isSubtree(t1, t2) {
    if(!t2) return true
    if(!t1) return false


    if(isEqual(t1, t2))
        return true


    return isSubtree(t1.left, t2) || isSubtree(t1.right, t2)
}