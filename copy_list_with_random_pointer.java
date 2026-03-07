import java.util.HashMap;
import java.util.Map;

class Node {
    int val;
    Node next;
    Node random;

    public Node(int val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}

class SolutionCopyListWithRandomPointer {
    public Node copyRandomList(Node head) {
        if (head == null) return null;
        
        Map<Node, Node> map = new HashMap<>();
        
        Node curr = head;
        while (curr != null) {
            map.put(curr, new Node(curr.val));
            curr = curr.next;
        }
        
        curr = head;
        while (curr != null) {
            map.get(curr).next = map.get(curr.next);
            map.get(curr).random = map.get(curr.random);
            curr = curr.next;
        }
        
        return map.get(head);
    }


    private static void printList(Node head) {
        Node temp = head;
        while (temp != null) {
            System.out.print("[" + temp.val + ", " + (temp.random != null ? temp.random.val : "null") + "] ");
            temp = temp.next;
        }
        System.out.println();
    }

    private static Node buildList(Integer[][] data) {
        if (data == null || data.length == 0) return null;
        Node[] nodes = new Node[data.length];
        for (int i = 0; i < data.length; i++) {
            nodes[i] = new Node(data[i][0]);
        }
        for (int i = 0; i < data.length; i++) {
            if (i < data.length - 1) {
                nodes[i].next = nodes[i + 1];
            }
            if (data[i][1] != null) {
                nodes[i].random = nodes[data[i][1]];
            }
        }
        return nodes[0];
    }

    public static void main(String[] args) {
        SolutionCopyListWithRandomPointer solution = new SolutionCopyListWithRandomPointer();

        // Example 1
        Integer[][] data1 = {{7, null}, {13, 0}, {11, 4}, {10, 2}, {1, 0}};
        Node head1 = buildList(data1);
        System.out.print("Original 1: ");
        printList(head1);
        Node copied1 = solution.copyRandomList(head1);
        System.out.print("Copied 1:   ");
        printList(copied1);

        // Example 2
        /*Integer[][] data2 = {{1, 1}, {2, 1}};
        Node head2 = buildList(data2);
        System.out.print("Original 2: ");
        printList(head2);
        Node copied2 = solution.copyRandomList(head2);
        System.out.print("Copied 2:   ");
        printList(copied2);

        // Example 3
        Integer[][] data3 = {{3, null}, {3, 0}, {3, null}};
        Node head3 = buildList(data3);
        System.out.print("Original 3: ");
        printList(head3);
        Node copied3 = solution.copyRandomList(head3);
        System.out.print("Copied 3:   ");
        printList(copied3);*/
    }
}