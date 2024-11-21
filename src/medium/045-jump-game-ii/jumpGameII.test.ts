import jump from "./jumpGameII";

const tests = [
    {
        input: [2,3,1,1,4],
        output: 2,
    },
    {
        input: [2,3,0,1,4],
        output: 2,
    },
    {
        input: [2,3,1],
        output: 1,
    },
];

tests.forEach(({ input, output }) => {
	test(`jump(${input}) === ${output}`, () => {
        expect(jump(input)).toEqual(output);
	});
});