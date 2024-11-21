import summaryRanges from "./summaryRanges";

const tests = [
    {
        input: [0,1,2,4,5,7],
        output: ["0->2","4->5","7"],
    },
    {
        input: [0,2,3,4,6,8,9],
        output: ["0","2->4","6","8->9"],
    },
];

tests.forEach(({ input, output }) => {
	test(`summaryRanges(${input}) === ${output}`, () => {
		expect(summaryRanges(input)).toEqual(output);
	});
});