import gcdOfStrings from "./greatestCommonDivisorOfStrings";

const tests = [
    {
        inputA: "ABCABC",
        inputB: "ABC",
        output: "ABC"
    },
    {
        inputA: "ABABAB",
        inputB: "ABAB",
        output: "AB"
    },
    {
        inputA: "LEET",
        inputB: "CODE",
        output: ""
    },
    {
        inputA: "ABCDEF",
        inputB: "ABC",
        output: ""
    },
    {
        inputA: "TAUXXTAUXXTAUXXTAUXXTAUXX",
        inputB: "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX",
        output: "TAUXX"
    },
];

tests.forEach(({ inputA, inputB, output }) => {
	test(`gcdOfStrings(${inputA}, ${inputB}) === ${output}`, () => {
		expect(gcdOfStrings(inputA, inputB)).toEqual(output);
	});
});