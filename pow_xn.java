class SolutionPowXN {
    public double myPow(double x, int n) {
        if (n > 0) return powPositive(x, n);
        else return 1 / powPositive(x, -n);
    }

    public double powPositive(double x, int n) {
        if (n == 0) return 1;
        if (n == 1) return x;
        double temp = powPositive(x, n / 2);
        if (n % 2 == 0) return temp * temp;
        else return temp * temp * x;
    }

    public static void main(String[] args) {
        SolutionPowXN solution = new SolutionPowXN();
        double result = solution.myPow(2.00000, -10);
        System.out.println(result);
    }
}