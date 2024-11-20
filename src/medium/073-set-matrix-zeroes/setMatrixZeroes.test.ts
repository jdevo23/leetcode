import setZeroes from "./setMatrixZeroes";

const tests = [
    {
        input: [[1,1,1],[1,0,1],[1,1,1]],
        output: [[1,0,1],[0,0,0],[1,0,1]],
    },
    {
        input: [[0,1,2,0],[3,4,5,2],[1,3,1,5]],
        output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]],
    },
];

tests.forEach(({ input, output }) => {
	test(`setZeroes(${input}) === ${output}`, () => {
        setZeroes(input);
		expect(input).toEqual(output);
	});
});