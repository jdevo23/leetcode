import maxArea from "./containerWithMostWater";

const tests = [
    {
        input: [1,8,6,2,5,4,8,3,7],
        output: 49,
    },
    {
        input: [1,1],
        output: 1,
    },
];

tests.forEach(({ input, output }) => {
	test(`maxArea(${input}) === ${output}`, () => {
		expect(maxArea(input)).toEqual(output);
	});
});