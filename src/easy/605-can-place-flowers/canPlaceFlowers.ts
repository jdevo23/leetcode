function canPlaceFlowers(flowerbed: number[], n: number): boolean {
	let i = 0;

	while (i < flowerbed.length && n > 0) {
		if (i == 0) {
			if (flowerbed[i] == 0 && (flowerbed[i + 1] == 0 || flowerbed[i + 1] == undefined)) {
				flowerbed[i] = 1;
				n--;
			}
		} else if (i == flowerbed.length - 1) {
			if (flowerbed[i] == 0 && flowerbed[i - 1] == 0) {
				flowerbed[i] = 1;
				n--;
			}
		} else {
			if (flowerbed[i] == 0 && flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0) {
				flowerbed[i] = 1;
				n--;
			}
		}
		i++;
	}

	return n == 0;
};

export default canPlaceFlowers;