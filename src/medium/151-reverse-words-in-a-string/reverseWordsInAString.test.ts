import reverseWords from "./reverseWordsInAString";

const tests = [
    {
        input: "the sky is blue",
        output: "blue is sky the",
    },
    {
        input: "  hello world  ",
        output: "world hello",
    },
    {
        input: "a good   example",
        output: "example good a",
    },
    {
        input: "   single   ",
        output: "single",
    },
];

tests.forEach(({ input, output }) => {
	test(`reverseWords(${input}) === ${output}`, () => {
		expect(reverseWords(input)).toEqual(output);
	});
});