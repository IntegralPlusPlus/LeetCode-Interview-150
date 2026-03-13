class SolutionFactorialTrailingZeroes {
    public int trailingZeroes(int n) {
        int count = n / 5;
        int pow = 25;
        while (pow <= n) {
            count += n / pow;
            pow *= 5;
        }

        return count;
    }

    public static void main(String[] args) {
        SolutionFactorialTrailingZeroes solution = new SolutionFactorialTrailingZeroes();
        int result = solution.trailingZeroes(30);
        System.out.println(result);
    }
}