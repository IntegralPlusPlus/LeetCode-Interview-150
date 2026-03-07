// Definition for singly-linked list.
class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class SolutionAddTwoNumbers {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        int sum = (l1 != null ? l1.val : 0) + (l2 != null ? l2.val : 0);
        int carry = sum / 10;
        ListNode next = null;
        if (l1 != null && l1.next != null) {
            l1.next.val += carry;
            next = addTwoNumbers(l1.next, (l2 != null ? l2.next : null));
        } else if (l2 != null && l2.next != null) {
            l2.next.val += carry;
            next = addTwoNumbers((l1 != null ? l1.next : null), l2.next);
        } else if (carry > 0) {
            next = new ListNode(carry);
        }

        ListNode result = new ListNode(sum % 10, next);

        return result;
    }

    public static void main(String[] args) {
        ListNode l1 = new ListNode(9, new ListNode(9, new ListNode(9)));
        ListNode l2 = new ListNode(9, new ListNode(9));
        SolutionAddTwoNumbers solution = new SolutionAddTwoNumbers();
        ListNode result = solution.addTwoNumbers(l1, l2);
        while (result != null) {
            System.out.print(result.val + (result.next != null ? " -> " : ""));
            result = result.next;
        }
    }
}