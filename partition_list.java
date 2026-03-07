class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class SolutionPartitionList {
    public ListNode partition(ListNode head, int x) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode curr = head, prev = dummy;
        ListNode addTo = dummy;
        while (curr != null) {
            if (curr.val < x) {
                if (addTo == prev) {
                    addTo = addTo.next;
                    prev = prev.next;
                    curr = curr.next;
                } else {
                    prev.next = curr.next;
                    curr.next = addTo.next;
                    addTo.next = curr;
                    addTo = curr;
                    curr = prev.next;
                }
            } else {
                prev = curr;
                curr = curr.next;
            }
        }

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
        ListNode l1 = new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2))))));
        SolutionPartitionList solution = new SolutionPartitionList();
        ListNode result = solution.partition(l1, 3);
        solution.printList(result);
    }
}