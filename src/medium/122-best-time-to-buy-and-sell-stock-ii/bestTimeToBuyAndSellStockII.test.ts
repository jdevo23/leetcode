import maxProfit from "./bestTimeToBuyAndSellStockII";

const tests = [
    {
        input: [7,1,5,3,6,4],
        output: 7,
    },
    {
        input: [1,2,3,4,5],
        output: 4,
    },
    {
        input: [7,6,4,3,1],
        output: 0,
    },
    {
        input: [1],
        output: 0,
    },
];

tests.forEach(({ input, output }) => {
	test(`maxProfit(${input}) === ${output}`, () => {
		expect(maxProfit(input)).toEqual(output);
	});
});