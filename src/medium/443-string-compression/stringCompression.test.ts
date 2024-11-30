import compress from "./stringCompression";

const tests = [
    {
        input: ["a","a","b","b","c","c","c"],
        output: 6
    },
    {
        input: ["a"],
        output: 1
    },
    {
        input: ["a","b","b","b","b","b","b","b","b","b","b","b","b"],
        output: 4
    },
    {
        input: ["a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a"],
        output: 4
    },
];

tests.forEach(({ input, output }) => {
	test(`compress(${input}) === ${output}`, () => {
		expect(compress(input)).toEqual(output);
	});
});