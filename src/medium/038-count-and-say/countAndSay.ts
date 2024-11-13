/* 
    iterate
    keep track of first iteration of current digit
    if digit changes, append to the string the number of times this digit occurred plus the digit itself
    reset the counter

	
	Input: n = 4
	Output: "1211"

	Explanation:
		countAndSay(1) = "1"
		countAndSay(2) = RLE of "1" = "11"
		countAndSay(3) = RLE of "11" = "21"
		countAndSay(4) = RLE of "21" = "1211" // 111221
*/

function countAndSay(n: number): string {
	if (n == 0) {
		return "";
	}

	function parseNum(num: string): string {
		let s = "";
		let current = num[0];
		let count = 1;

		for (let i = 1; i < num.length; i++) {
			if (current == num[i]) {
				count++;
				continue;
			}

			s += count;
			s += current;
			count = 1;
			current = num[i];
		}

		s += count;
		s += current;

		return s;
	}

	let i = 1;
	let result = "1";
	while (i < n) {
		result = parseNum(result);
		i++;
	}

	return result;
};

export default countAndSay;