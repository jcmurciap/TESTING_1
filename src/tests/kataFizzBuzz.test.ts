import { getFizzBuzz } from "../core/kataFizzBuzz"

describe("Fizz Buzz kata", () => {
    
    test("If input is one result is 1", () => {
        expect(getFizzBuzz(1)).toBe(1);
    });

    test("If input is two result is two", () => {
        expect(getFizzBuzz(2)).toBe(2);
    });

    test("Return Fizz if input is multiple of three", () => {
        expect(getFizzBuzz(12)).toBe("Fizz");
    });

    test("Return Buzz if input is multiple of five", () => {
        expect(getFizzBuzz(10)).toBe("Buzz");
    });

    test("Return FizzBuzz if input is multiple of five and three", () => {
        expect(getFizzBuzz(15)).toBe("FizzBuzz");
    });    
})