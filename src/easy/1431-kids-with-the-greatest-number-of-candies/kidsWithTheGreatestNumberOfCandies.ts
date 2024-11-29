function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const result: boolean[] = [];
    const max = Math.max(...candies);

    for (let i = 0; i < candies.length; i++) {
        result.push((candies[i] + extraCandies) >= max);
    }

    return result;
};

export default kidsWithCandies;