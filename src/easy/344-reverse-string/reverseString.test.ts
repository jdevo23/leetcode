import reverseString from "./reverseString";

const tests = [
    {
        input: ["h","e","l","l","o"],
        output: ["o","l","l","e","h"],
    },
    {
        input: ["H","a","n","n","a","h"],
        output: ["h","a","n","n","a","H"],
    },
];

tests.forEach(({ input, output }) => {
	test(`reverseString(${input}) === ${output}`, () => {
        const cpy = [...input];
        reverseString(cpy)
		expect(cpy).toEqual(output);
	});
});