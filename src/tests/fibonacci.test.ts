import { fibonacci } from "../core/fibonacci"

describe("Fibonacci serie test", () => {
    test("If zero is inserted, return zero", () => {
        expect(fibonacci(0)).toBe(0);
    })

    test("If one is inserted, return one", () => {
        expect(fibonacci(1)).toBe(1);
    })
})