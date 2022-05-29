import { sum } from "../core/sum";

describe('sum file cases', () => {
    
    test('Should sum two numbers', () => {
    
        // Arrange
        const a = 1;
        const b = 2;
        const expected = 3;
    
        // Act
        const result = sum(a,b);
    
        // Assertion
        expect(result).toBe(expected);
    })
    
    test('Should compare two objects', () => {
        
        // Arrange
        const result = {one: 1, two: 2};
        const expected = {one: 1, two: 2};
    
        // Assertion
        expect(result).toEqual(expected);
    })
    
});