import addDigits from "./addDigits";

const tests = [
    {
        input: 38, 
        output: 2,
    },
    {
        input: 0,
        output: 0,
    },
];

tests.forEach(({ input, output }) => {
	test(`addDigits(${input}) === ${output}`, () => {
		expect(addDigits(input)).toEqual(output);
	});
});