import insert from "./insertInterval";

const tests = [
    {
        inputA: [[1,3],[6,9]],
        inputB: [2,5],
        output: [[1,5],[6,9]],
    },
    {
        inputA: [[1,2],[3,5],[6,7],[8,10],[12,16]],
        inputB: [4,8],
        output: [[1,2],[3,10],[12,16]],
    },
    {
        inputA: [],
        inputB: [5,7],
        output: [[5,7]],
    },
    {
        inputA: [[1,5]],
        inputB: [2,3],
        output: [[1,5]],
    },
    {
        inputA: [[1,5]],
        inputB: [6,8],
        output: [[1,5],[6,8]],
    },
    {
        inputA: [[1,5]],
        inputB: [0,3],
        output: [[0,5]],
    },
    {
        inputA: [[2,3],[5,7]],
        inputB: [0,6],
        output: [[0,7]],
    },
    {
        inputA: [[1,5]],
        inputB: [0,0],
        output: [[0,0],[1,5]],
    },
    {
        inputA: [[0,5],[9,12]],
        inputB: [7,16],
        output: [[0,5],[7,16]],
    },
    {
        inputA: [[3,5],[12,15]],
        inputB: [6,6],
        output: [[3,5],[6,6],[12,15]],
    },
    {
        inputA: [[3,6],[9,9],[11,13],[14,14],[16,19],[20,22],[23,25],[30,34],[41,43],[45,49]],
        inputB: [29,32],
        output: [[3,6],[9,9],[11,13],[14,14],[16,19],[20,22],[23,25],[29,34],[41,43],[45,49]],
    },
];

tests.forEach(({ inputA, inputB, output }) => {
	test(`insert(${inputA}, ${inputB}) === ${output}`, () => {
		expect(insert(inputA, inputB)).toEqual(output);
	});
});