// 2. Add Two Numbers



// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.







var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode();  // Placeholder node for the result list
    let current = dummy;         // Pointer to track the end of the result list
    let carry = 0;               // Variable to store the carry

    let head1 = l1;              // Pointer to traverse the first list
    let head2 = l2;              // Pointer to traverse the second list

    while (head1 !== null || head2 !== null) {
        let val1 = head1 ? head1.val : 0;  // Get value from head1, or 0 if null
        let val2 = head2 ? head2.val : 0;  // Get value from head2, or 0 if null

        // Calculate sum and carry
        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);      // Update carry
        current.next = new ListNode(sum % 10);  // Create a new node with sum % 10

        // Move the current pointer to the next node
        current = current.next;

        // Advance head1 and head2 pointers if not null
        head1 = head1 ? head1.next : null;
        head2 = head2 ? head2.next : null;
    }

    // If there's a carry left, add a new node with carry value
    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummy.next;  // Return the next node of dummy, which is the actual result
};
