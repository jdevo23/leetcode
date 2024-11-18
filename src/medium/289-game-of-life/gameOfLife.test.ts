import gameOfLife from "./gameOfLife";

const tests = [
    {
        input: [[0,1,0],[0,0,1],[1,1,1],[0,0,0]],
        output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]],
    },
    {
        input: [[1,1],[1,0]],
        output: [[1,1],[1,1]],
    },
];

tests.forEach(({ input, output }) => {
	test(`gameOfLife(${input}) === ${output}`, () => {
        gameOfLife(input);
		expect(input).toEqual(output);
	});
});