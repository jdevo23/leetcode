import reverseVowels from "./reverseVowelsOfAString";

const tests = [
    {
        input: "IceCreAm",
        output: "AceCreIm",
    },
    {
        input: "leetcode",
        output: "leotcede",
    },
];

tests.forEach(({ input, output }) => {
	test(`reverseVowels(${input}) === ${output}`, () => {
		expect(reverseVowels(input)).toEqual(output);
	});
});