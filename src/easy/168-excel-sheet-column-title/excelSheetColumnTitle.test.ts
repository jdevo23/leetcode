import convertToTitle from "./excelSheetColumnTitle";

const tests = [
    {
        input: 1,
        output: "A",
    },
    {
        input: 28,
        output: "AB",
    },
    {
        input: 701,
        output: "ZY",
    },
    {
        input: 52,
        output: "AZ",
    },
];

tests.forEach(({ input, output }) => {
	test(`convertToTitle(${input}) === ${output}`, () => {
		expect(convertToTitle(input)).toEqual(output);
	});
});