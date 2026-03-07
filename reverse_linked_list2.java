import java.util.Stack;

// Definition for singly-linked list.
class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class SolutionReverseLinkedList2 {
    public ListNode reverseBetween(ListNode head, int left, int right) {
        ListNode curr = head;
        int currIndex = 1;
        Stack<Integer> reverseValues = new Stack<>();

        while (curr != null) {
            if (currIndex >= left && currIndex <= right) {
                reverseValues.push(curr.val);
            }
            
            curr = curr.next;
            currIndex++;
        }  

        ListNode curr2 = head;
        int curr2Index = 1;
        while (curr2 != null) {
            if (curr2Index >= left && curr2Index <= right) {
                curr2.val = reverseValues.pop();
            }
            
            curr2Index++;
            curr2 = curr2.next;
        }
        

        return head;
    }

    public static void main(String[] args) {
        ListNode l1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
        SolutionReverseLinkedList2 solution = new SolutionReverseLinkedList2();
        ListNode result = solution.reverseBetween(l1, 1, 4);
        while (result != null) {
            System.out.print(result.val + (result.next != null ? " -> " : ""));
            result = result.next;
        }
    
    }
}