class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class SolutionRotateList {
    public ListNode rotateRight(ListNode head, int k) {
        int size = 0;
        ListNode temp = head;
        while (temp != null) {
            size++;
            temp = temp.next;
        }
        
        if (size != 0) k %= size;
        else return head;

        if (k == 0) return head;
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        temp = dummy;
        for (int i = 0; i < size - k; i++) {
            temp = temp.next;
        }

        ListNode nextHead = temp.next;
        temp.next = null;
        dummy.next = nextHead;
        while (nextHead.next != null) {
            nextHead = nextHead.next;
        }
        nextHead.next = head;

        return dummy.next;
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
        ListNode l1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
        SolutionRotateList solution = new SolutionRotateList();
        ListNode result = solution.rotateRight(l1, 2);
        solution.printList(result);
    }
}