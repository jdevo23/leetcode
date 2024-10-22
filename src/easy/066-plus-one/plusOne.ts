function plusOne(digits: number[]): number[] {
    let i = digits.length - 1;
	let carry = 0;

    while (i >= 0) {
        let newDigit = digits[i] + 1;

		if (newDigit < 10) {
			digits[i] = newDigit;
			break;
		}

		// if (i == digits.length - 1) {
		// 	digits.push(0);
		// }

		if (i == 0) {
			newDigit = 1;
			digits.push(0);
		} else {
			newDigit = 0;
		}

		digits[i] = newDigit;
		i--;
    }

	// if (carry) {
	// 	digits.push(0);
	// }

    return digits;
};

export default plusOne;