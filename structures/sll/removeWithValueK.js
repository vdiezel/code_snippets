function removeKFromList(l, k) {
    if(l===null) return null;
    else {
        l.next = removeKFromList(l.next,k);
        return (l.value===k)? l.next : l
    }
}

