import rotate from "./rotateArray";

const tests = [
    {
        inputA: [1,2,3,4,5,6,7],
        inputB: 3,
        output: [5,6,7,1,2,3,4],
    },
    {
        inputA: [-1,-100,3,99],
        inputB: 2,
        output: [3,99,-1,-100],
    },
];

tests.forEach(({ inputA, inputB, output }) => {
	test(`rotate(${inputA}, ${inputB}) === ${output}`, () => {
		rotate(inputA, inputB);
		expect(inputA).toEqual(output);
	});
});