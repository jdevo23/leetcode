import searchRange from "./findFirstAndLastPositionOfElementInSortedArray";

const tests = [
    {
        input: [5,7,7,8,8,10], 
		target: 8,
        output: [3,4],
    },
    {
        input: [5,7,7,8,8,10],
		target: 6,
        output: [-1,-1],
    },
    {
        input: [],
		target: 0,
        output: [-1,-1],
    },
    {
        input: [1],
		target: 1,
        output: [0,0],
    },
    {
        input: [1],
		target: 0,
        output: [-1,-1],
    },
];

tests.forEach(({ input, target, output }) => {
	test(`searchRange(${input}, ${target}) === ${output}`, () => {
		expect(searchRange(input, target)).toEqual(output);
	});
});