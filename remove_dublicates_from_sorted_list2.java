class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class SolutionRemoveDuplicatesFromSortedList2 {
    public ListNode deleteDuplicates(ListNode head) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode lastSave = dummy;
        ListNode curr = head;
        boolean isDuplicate = false;

        while (curr != null) {
            if (curr.next != null && curr.val == curr.next.val) {
                curr.next = curr.next.next;
                isDuplicate = true;
            } else {
                if (isDuplicate) {
                    lastSave.next = curr.next;
                    isDuplicate = false;
                } else {
                    lastSave = curr;
                }

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
        ListNode l1 = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(2, new ListNode(3, new ListNode(4))))));
        SolutionRemoveDuplicatesFromSortedList2 solution = new SolutionRemoveDuplicatesFromSortedList2();
        ListNode result = solution.deleteDuplicates(l1);
        solution.printList(result);
    }
}