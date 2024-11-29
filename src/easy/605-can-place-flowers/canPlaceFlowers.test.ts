import canPlaceFlowers from "./canPlaceFlowers";

const tests = [
    {
        inputA: [1,0,0,0,1],
        inputB: 1,
        output: true
    },
    {
        inputA: [1,0,0,0,1],
        inputB: 2,
        output: false
    },
    {
        inputA: [1,0,0,0,0,1],
        inputB: 2,
        output: false
    },
    {
        inputA: [1,0,0,0,0,0,1],
        inputB: 2,
        output: true
    },
    {
        inputA: [1,0,0,0,0,0,0,1],
        inputB: 3,
        output: false
    },
    {
        inputA: [1,0,0,0,0,0,0,0,1],
        inputB: 3,
        output: true
    },
    {
        inputA: [0,0,1,0,1],
        inputB: 1,
        output: true
    },
    {
        inputA: [1,0,1,0,0],
        inputB: 1,
        output: true
    },
    {
        inputA: [1,0,0,0,1,0,0],
        inputB: 2,
        output: true
    },
];

tests.forEach(({ inputA, inputB, output }) => {
	test(`canPlaceFlowers(${inputA}, ${inputB}) === ${output}`, () => {
		expect(canPlaceFlowers(inputA, inputB)).toEqual(output);
	});
});