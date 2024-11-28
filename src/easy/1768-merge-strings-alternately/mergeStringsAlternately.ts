function mergeAlternately(word1: string, word2: string): string {
    const arr: string[] = [];
    const len1 = word1.length;
    const len2 = word2.length;
    const max = Math.max(len1, len2);

    for (let i = 0; i < max; i++) {
        if (i < len1) {
            arr.push(word1[i]);
        }
        if (i < len2) {
            arr.push(word2[i]);
        }
    }

    return arr.join('');
};

export default mergeAlternately;