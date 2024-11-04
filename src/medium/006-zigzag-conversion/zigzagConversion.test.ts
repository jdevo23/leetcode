import convert from "./zigzagConversion";

const tests = [
    {
        str: "PAYPALISHIRING",
        numRows: 3,
        output: "PAHNAPLSIIGYIR",
    },
    {
        str: "PAYPALISHIRING",
        numRows: 4,
        output: "PINALSIGYAHRPI",
    },
    {
        str: "A",
        numRows: 1,
        output: "A",
    },
    {
        str: "AB",
        numRows: 1,
        output: "AB",
    },
];

tests.forEach(({ str, numRows, output }) => {
	test(`convert(${str}, ${numRows}) === ${output}`, () => {
		expect(convert(str, numRows)).toEqual(output);
	});
});