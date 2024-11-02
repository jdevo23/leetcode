function plusOne(digits: number[]): number[] {
    let i = digits.length - 1;

    while (i >= 0) {
        let newDigit = digits[i] + 1;

		if (newDigit < 10) {
			digits[i] = newDigit;
			break;
		}

		if (i == 0) {
			newDigit = 1;
			digits.push(0);
		} else {
			newDigit = 0;
		}

		digits[i] = newDigit;
		i--;
    }

    return digits;
};

export default plusOne;