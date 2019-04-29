// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function mergeTwoLinkedLists(l1, l2) {
    if (l1===null)
        return l2;
    if (l2===null)
        return l1;
    var ret = new ListNode(Math.min(l1.value,l2.value));
    if (l1.value<l2.value)
        ret.next = mergeTwoLinkedLists(l1.next,l2);
    else
        ret.next = mergeTwoLinkedLists(l1,l2.next);
    return ret;
}
