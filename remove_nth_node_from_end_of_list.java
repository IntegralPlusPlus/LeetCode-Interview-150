class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class SolutionRemoveNthFromEndOfList {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode temp = head;
        int length = 0;
        while (temp != null) {
            length++;
            temp = temp.next;
        }

        temp = head;
        if (length == n) return head.next;

        for (int i = 0; i < length - n - 1; i++) {
            temp = temp.next;
        }

        ListNode elementToDelete = temp.next;
        if (elementToDelete != null) temp.next = elementToDelete.next;
        else temp.next = null;
        elementToDelete = null;

        return head;
    }
    
    public void printList(ListNode head) {
        ListNode temp = head;
        while (temp != null) {
            System.out.print(temp.val + (temp.next != null ? " -> " : ""));
            temp = temp.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        ListNode l1 = new ListNode(1);//, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
        SolutionRemoveNthFromEndOfList solution = new SolutionRemoveNthFromEndOfList();
        ListNode result = solution.removeNthFromEnd(l1, 1);
        solution.printList(result);
    }
}