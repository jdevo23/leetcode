import increasingTriplet from "./increasingTripletSubsequence";

const tests = [
    {
        input: [1,2,3,4,5],
        output: true
    },
    {
        input: [5,4,3,2,1],
        output: false
    },
    {
        input: [2,1,5,0,4,6],
        output: true
    },
    {
        input: [20,100,10,12,5,13],
        output: true
    },
    {
        input: [2,4,-2,-3],
        output: false
    },
];

tests.forEach(({ input, output }) => {
	test(`increasingTriplet(${input}) === ${output}`, () => {
		expect(increasingTriplet(input)).toEqual(output);
	});
});