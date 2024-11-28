import mergeAlternately from "./mergeStringsAlternately";

const tests = [
    {
        inputA: "abc",
        inputB: "pqr",
        output: "apbqcr"
    },
    {
        inputA: "ab",
        inputB: "pqrs",
        output: "apbqrs"
    },
    {
        inputA: "abcd",
        inputB: "pq",
        output: "apbqcd"
    },
];

tests.forEach(({ inputA, inputB, output }) => {
	test(`mergeAlternately(${inputA}, ${inputB}) === ${output}`, () => {
		expect(mergeAlternately(inputA, inputB)).toEqual(output);
	});
});