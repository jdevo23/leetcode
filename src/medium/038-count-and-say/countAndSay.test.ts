import countAndSay from "./countAndSay";

const tests = [
    {
        input: 4,
        output: "1211",
    },
    {
        input: 1,
        output: "1",
    },
];

tests.forEach(({ input, output }) => {
	test(`countAndSay(${input}) === ${output}`, () => {
		expect(countAndSay(input)).toEqual(output);
	});
});