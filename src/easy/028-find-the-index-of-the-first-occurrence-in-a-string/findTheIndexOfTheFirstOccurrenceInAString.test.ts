import strStr from "./findTheIndexOfTheFirstOccurrenceInAString";

const tests = [
    {
        haystack: "sadbutsad",
        needle: "sad",
        ans: 0,
    },
    {
        haystack: "leetcode",
        needle: "leeto",
        ans: -1,
    },
    {
        haystack: "a",
        needle: "a",
        ans: 0,
    },
];

tests.forEach(({ haystack, needle, ans }) => {
	test(`strStr(${haystack}, ${needle}) === ${ans}`, () => {
		expect(strStr(haystack, needle)).toBe(ans);
	});
});