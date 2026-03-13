import java.util.LinkedList;
import java.util.Queue;
import java.util.List;

class SolutionWordLadder {
    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        int size = wordList.size();
        boolean[] visited = new boolean[size];
        boolean startWord = true;
        Queue<String> words = new LinkedList<>();
        int[] steps = new int[size];
        for (int i = 0; i < size; ++i) {
            steps[i] = 0;
        }

        words.add(beginWord);

        while (!words.isEmpty()) {
            String curr = words.poll();
            //System.out.println(curr);
            int currIndex = -1, ind = 0;
            if (!startWord) {
                for (String word : wordList) {
                    if (curr.equals(word)) currIndex = ind;
                    ind++;
                }
            } else {
                startWord = false;
            }

            if (curr.equals(endWord)) return currIndex != -1 ? steps[currIndex] : 1;

            ind = 0;
            for (String word : wordList) {
                if (!visited[ind] && mayBeTransformation(curr, word)) {
                    words.add(word);
                    visited[ind] = true;
                    steps[ind] = currIndex != -1 ? steps[currIndex] + 1 : 2;
                }
                ind++;
            }
        }

        return 0;
    }

    public boolean mayBeTransformation(String from, String to) {
        int count = 0;
        if (from.length() != to.length()) return false;
        for (int i = 0; i < from.length(); ++i) {
            if (from.charAt(i) != to.charAt(i)) count++;
        }

        return count == 1;
    }

    public static void main(String[] args) {
        SolutionWordLadder solution = new SolutionWordLadder();
        List<String> bank = new LinkedList<>();
        /*bank.add("hot");
        bank.add("dot");
        bank.add("dog");
        bank.add("lot");
        bank.add("log");
        bank.add("cog");*/
        bank.add("a"); bank.add("b"); bank.add("c");

        int result = solution.ladderLength("a", "c", bank);//solution.ladderLength("hit", "cog", bank);
        System.out.println(result);
    }
}