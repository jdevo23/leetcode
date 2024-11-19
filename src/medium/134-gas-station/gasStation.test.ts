import canCompleteCircuit from "./gasStation";

const tests = [
    {
        inputA: [1,2,3,4,5],
        inputB: [3,4,5,1,2],
        output: 3,
    },
    {
        inputA: [2,3,4],
        inputB: [3,4,3],
        output: -1,
    },
    {
        inputA: [2],
        inputB: [2],
        output: 0,
    },
    {
        inputA: [5,1,2,3,4],
        inputB: [4,4,1,5,1],
        output: 4,
    },
];

tests.forEach(({ inputA, inputB, output }) => {
	test(`canCompleteCircuit(${inputA}, ${inputB}) === ${output}`, () => {
		expect(canCompleteCircuit(inputA, inputB)).toEqual(output);
	});
});