import java.util.LinkedList;
import java.util.Queue;

class SolutionMinimumGeneticMutation {
    public int minMutation(String startGene, String endGene, String[] bank) {
        boolean[] visited = new boolean[bank.length];
        Queue<String> gens = new LinkedList<>();
        int[] steps = new int[bank.length];
        for (int i = 0; i < bank.length; ++i) {
            steps[i] = 0;
        }

        gens.add(startGene);

        while (!gens.isEmpty()) {
            String curr = gens.poll();
            int currIndex = -1;
            for (int i = 0; i < bank.length; ++i) {
                if (curr.equals(bank[i])) currIndex = i;
            }

            if (curr.equals(endGene)) return currIndex != -1 ? steps[currIndex] : 0;

            for (int i = 0; i < bank.length; ++i) {
                if (!visited[i] && mayBeMutation(curr, bank[i])) {
                    gens.add(bank[i]);
                    visited[i] = true;
                    steps[i] = currIndex != -1 ? steps[currIndex] + 1 : 1;
                }
            }
        }

        return -1;
    }

    public boolean mayBeMutation(String from, String to) {
        int count = 0;
        if (from.length() != to.length()) return false;
        for (int i = 0; i < from.length(); ++i) {
            if (from.charAt(i) != to.charAt(i)) count++;
        }

        return count == 1;
    }

    public static void main(String[] args) {
        SolutionMinimumGeneticMutation solution = new SolutionMinimumGeneticMutation();
        String[] bank = {"AACCGGTA"};
        int result = solution.minMutation("AACCGGTT", "AACCGGTA", bank);
        System.out.println(result);
    }
}