import hIndex from "./hIndex";

const tests = [
    {
        input: [3,0,6,1,5],
        output: 3,
    },
    {
        input: [1,3,1],
        output: 1,
    },
];

tests.forEach(({ input, output }) => {
	test(`hIndex(${input}) === ${output}`, () => {
		expect(hIndex(input)).toEqual(output);
	});
});