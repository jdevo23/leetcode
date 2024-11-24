import findMinArrowShots from "./minimumNumberOfArrowsToBurstBalloons";

const tests = [
    {
        input: [[10,16],[2,8],[1,6],[7,12]],
        output: 2,
    },
    {
        input: [[1,2],[3,4],[5,6],[7,8]],
        output: 4,
    },
    {
        input: [[1,2],[2,3],[3,4],[4,5]],
        output: 2,
    },
    {
        input: [[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6],[2,8]],
        output: 2,
    },
];

tests.forEach(({ input, output }) => {
	test(`findMinArrowShots(${input}) === ${output}`, () => {
		expect(findMinArrowShots(input)).toEqual(output);
	});
});