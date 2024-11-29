import kidsWithCandies from "./kidsWithTheGreatestNumberOfCandies";

const tests = [
    {
        inputA: [2,3,5,1,3],
        inputB: 3,
        output: [true,true,true,false,true] 
    },
    {
        inputA: [4,2,1,1,2],
        inputB: 1,
        output: [true,false,false,false,false]
    },
];

tests.forEach(({ inputA, inputB, output }) => {
	test(`kidsWithCandies(${inputA}, ${inputB}) === ${output}`, () => {
		expect(kidsWithCandies(inputA, inputB)).toEqual(output);
	});
});