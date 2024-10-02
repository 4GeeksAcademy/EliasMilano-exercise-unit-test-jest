test("1 euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = Math.round(3.5 * 1.07); 
    
    // This is the comparison for the unit test
     expect(dollars).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("1 dollar should be 146.262 yen", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');
    //1 dollar should be 146.262 yen
    const expected = Math.round(1 * 146.262); 
    expect(fromDollarToYen(1)).toBe(expected); 
    expect(fromDollarToYen(1)).not.toBe(NaN); 
    expect(fromDollarToYen(1)).not.toBe(undefined); 
    expect(fromDollarToYen(1)).toBeGreaterThanOrEqual(0);
})

test("20 dollar should be 2925.234 yen", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');
    //1 dollar should be 146.262 yen
    const expected = Math.round(20 * 146.262); 
    expect(fromDollarToYen(20)).toBe(expected); 
    expect(fromDollarToYen(20)).not.toBe(NaN); 
    expect(fromDollarToYen(20)).not.toBe(undefined); 
    expect(fromDollarToYen(20)).toBeGreaterThanOrEqual(0);
})

test("500 dollar should be 73130.841 yen", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');
    //1 dollar should be 146.262 yen    
    const expected = Math.round(500 * 146.262); 
    expect(fromDollarToYen(500)).toBe(expected); 
    expect(fromDollarToYen(500)).not.toBe(NaN); 
    expect(fromDollarToYen(500)).not.toBe(undefined); 
    expect(fromDollarToYen(500)).toBeGreaterThanOrEqual(0);
})

test("1 yen should be 0.006 pound", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');
    //1 yen should be 0.006 pound
    const expected = Math.round(1 * 0.006); 
    expect(fromYenToPound(1)).toBe(expected); 
    expect(fromYenToPound(1)).not.toBe(NaN); 
    expect(fromYenToPound(1)).not.toBe(undefined); 
    expect(fromYenToPound(1)).toBeGreaterThanOrEqual(0);
})

test("300 yen should be 1.668 pound", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');
    //1 yen should be 0.006 pound
    const expected = Math.round(300 * 0.006); 
    expect(fromYenToPound(300)).toBe(expected); 
    expect(fromYenToPound(300)).not.toBe(NaN); 
    expect(fromYenToPound(300)).not.toBe(undefined); 
    expect(fromYenToPound(300)).toBeGreaterThanOrEqual(0);
})

test("500 yen should be 2.780 pound", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');
    //1 yen should be 0.006 pound
    const expected = Math.round(500 * 0.006); 
    expect(fromYenToPound(500)).toBe(expected); 
    expect(fromYenToPound(500)).not.toBe(NaN); 
    expect(fromYenToPound(500)).not.toBe(undefined); 
    expect(fromYenToPound(500)).toBeGreaterThanOrEqual(0);
})