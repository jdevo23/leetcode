import missingNumber from "./missingNumber";

const tests = [
    {
        input: [3,0,1],
        output: 2,
    },
    {
        input: [0,1],
        output: 2,
    },
    {
        input: [9,6,4,2,3,5,7,0,1],
        output: 8,
    },
];

tests.forEach(({ input, output }) => {
	test(`missingNumber(${input}) === ${output}`, () => {
		expect(missingNumber(input)).toEqual(output);
	});
});