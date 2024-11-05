import letterCombinations from "./letterCombinationsOfAPhoneNumber";

const tests = [
    {
        input: "23",
        output: ["ad","ae","af","bd","be","bf","cd","ce","cf"],
    },
    {
        input: "69",
        output: ["mw","mx","my","mz","nw","nx","ny","nz","ow","ox","oy","oz"],
    },
    {
        input: "67",
        output: ["mp","mq","mr","ms","np","nq","nr","ns","op","oq","or","os"],
    },
    {
        input: "",
        output: [],
    },
    {
        input: "2",
        output: ["a","b","c"],
    },
];

tests.forEach(({ input, output }) => {
	test(`letterCombinations(${input}) === ${output}`, () => {
		expect(letterCombinations(input)).toEqual(output);
	});
});