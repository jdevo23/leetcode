import plusOne from "./plusOne";

const tests = [
    {
        input: [1,2,3],
        output: [1,2,4],
    },
    {
        input: [4,3,2,1],
        output: [4,3,2,2],
    },
    {
        input: [9],
        output: [1,0],
    },
    {
        input: [9,9,9],
        output: [1,0,0,0],
    },
    {
        input: [8,9,9,9],
        output: [9,0,0,0],
    },
];

tests.forEach(({ input, output }) => {
	test(`plusOne(${input}) === ${output}`, () => {
		expect(plusOne(input)).toStrictEqual(output);
	});
});