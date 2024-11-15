import spiralOrder from "./spiralMatrix";

const tests = [
    {
        input: [[1,2,3],[4,5,6],[7,8,9]],
        output: [1,2,3,6,9,8,7,4,5],
    },
    {
        input: [[1,2,3,4],[5,6,7,8],[9,10,11,12]],
        output: [1,2,3,4,8,12,11,10,9,5,6,7],
    },
    {
        input: [
            [2,5,8],
            [4,0,-1],
        ],
        output: [2,5,8,-1,0,4],
    },
];

tests.forEach(({ input, output }) => {
	test(`spiralOrder(${input}) === ${output}`, () => {
		expect(spiralOrder(input)).toEqual(output);
	});
});