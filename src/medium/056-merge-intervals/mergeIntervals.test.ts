import merge from "./mergeIntervals";

const tests = [
    {
        input: [[1,3],[2,6],[8,10],[15,18]],
        output: [[1,6],[8,10],[15,18]],
    },
    {
        input: [[1,4],[4,5]],
        output: [[1,5]],
    },
    {
        input: [[1,4],[0,4]],
        output: [[0,4]],
    },
    {
        input: [[0,5],[1,4],[2,3],[7,9],[0,6]],
        output: [[0,6],[7,9]],
    },
];

tests.forEach(({ input, output }) => {
	test(`merge(${input}) === ${output}`, () => {
		expect(merge(input)).toEqual(output);
	});
});