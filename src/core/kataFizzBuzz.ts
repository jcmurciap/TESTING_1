export function getFizzBuzz(n: any): any {

    const divisibleBy = (divider: number, n: number): boolean => n % divider == 0;

    if(divisibleBy(3, n)) {
        return "Fizz";
    }

    if(divisibleBy(5, n)) {
        return "Buzz";
    }

    if(divisibleBy(15, n)) {
        return "FizzBuzz";
    }

    return n;
}
  