import intersection from "./intersectionOfTwoArrays";

const tests = [
    {
        inputA: [1,2,2,1],
        inputB: [2,2],
        output: [2],
    },
    {
        inputA: [4,9,5],
        inputB: [9,4,9,8,4],
        output: [9,4],
    },
];

tests.forEach(({ inputA, inputB, output }) => {
	test(`intersection(${inputA}, ${inputB}) === ${output}`, () => {
		expect(intersection(inputA, inputB)).toEqual(output);
	});
});