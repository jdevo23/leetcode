import lengthOfLastWord from "./lengthOfLastWord";

const tests = [
    {
        input: "Hello World",
        output: 5,
    },
    {
        input: "   fly me   to   the moon  ",
        output: 4,
    },
    {
        input: "luffy is still joyboy",
        output: 6,
    },
];

tests.forEach(({ input, output }) => {
	test(`lengthOfLastWord(${input}) === ${output}`, () => {
		expect(lengthOfLastWord(input)).toBe(output);
	});
});