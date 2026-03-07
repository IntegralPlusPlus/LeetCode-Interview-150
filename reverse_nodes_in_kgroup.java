import java.util.Stack;

class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class SolutionReverseNodesInKGroups {
    public ListNode reverseKGroup(ListNode head, int k) {
        ListNode curr = head;
        ListNode startDummy = new ListNode(0);
        startDummy.next = head;
        ListNode dummy = startDummy;
        int count = 0;
        Stack<ListNode> reverseNexts = new Stack<>();

        while (curr != null) {
            //printList(startDummy);
            reverseNexts.push(curr);

            if (count == k - 1) {
                ListNode nextGroup = curr.next;
                
                ListNode prev = reverseNexts.pop();
                dummy.next = prev;

                while (!reverseNexts.isEmpty()) {
                    prev.next = reverseNexts.peek();
                    prev = reverseNexts.pop();
                }

                dummy = prev;
                prev.next = nextGroup;
                curr = nextGroup;
                count = 0;
                continue;
            }

            curr = curr.next;     
            count++;
        }

        return startDummy.next;
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
        ListNode l1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));
        SolutionReverseNodesInKGroups solution = new SolutionReverseNodesInKGroups();
        ListNode result = solution.reverseKGroup(l1, 2);
        solution.printList(result);
    }
}