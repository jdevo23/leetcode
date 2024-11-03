import wordSearch from "./wordSearch";

const tests = [
    {
        board: [
            ["A","B","C","E"],
            ["S","F","C","S"],
            ["A","D","E","E"]
        ],
        word: "ABCCED",
        output: true,
    },
    {
        board: [
            ["A","B","C","E"],
            ["S","F","C","S"],
            ["A","D","E","E"]
        ],
        word: "SEE",
        output: true,
    },
    {
        board: [
            ["A","B","C","E"],
            ["S","F","C","S"],
            ["A","D","E","E"]
        ],
        word: "ABCB",
        output: false,
    },
    {
        board: [
            ["A","B","C","E"],
            ["S","F","E","S"],
            ["A","D","E","E"]
        ],
        word: "ABCESEEEFS",
        output: true,
    },
    {
        board: [
            ["A","B","E"],
            ["B","C","D"]
        ],
        word: "ABCDEB",
        output: true,
    },
];

tests.forEach(({ board, word, output }) => {
	test(`wordSearch(${word}) === ${output}`, () => {
		expect(wordSearch(board, word)).toEqual(output);
	});
});