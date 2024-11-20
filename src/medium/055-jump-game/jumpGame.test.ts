import canJump from "./jumpGame";

const tests = [
    {
        input: [2,3,1,1,4],
        output: true,
    },
    {
        input: [3,2,1,0,4],
        output: false,
    },
    {
        input: [1],
        output: true,
    },
    {
        input: [0],
        output: true,
    },
    {
        input: [2,0,0],
        output: true,
    },
];

tests.forEach(({ input, output }) => {
	test(`canJump(${input}) === ${output}`, () => {
		expect(canJump(input)).toEqual(output);
	});
});