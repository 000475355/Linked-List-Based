class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode();
    let current = dummy;
    
    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    if (l1 !== null) {
        current.next = l1;
    } else {
        current.next = l2;
    }
    
    return dummy.next;
}

function removeNthFromEnd(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let first = dummy;
    let second = dummy;

  
    for (let i = 0; i <= n; i++) {
        first = first.next;
    }

    
    while (first !== null) {
        first = first.next;
        second = second.next;
    }

   
    second.next = second.next.next;

    return dummy.next;
}


function printList(node) {
    let result = "";
    while (node !== null) {
        result += node.val + " -> ";
        node = node.next;
    }
    result += "null";
    console.log(result);
}



// Test case 1: Merge two sorted linked lists
let l1 = new ListNode(1, new ListNode(3, new ListNode(5)));
let l2 = new ListNode(2, new ListNode(4, new ListNode(6)));

let mergedList = mergeTwoLists(l1, l2);
console.log("Merged list:");
printList(mergedList); 

// Test case 2: Remove the N-th node from the end
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
let n = 2;

let updatedList = removeNthFromEnd(head, n);
console.log("\nRemoving the N-th node from the end:");
printList(updatedList); 