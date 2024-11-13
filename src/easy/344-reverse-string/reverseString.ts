/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let i = 0;
    while (i < Math.floor(s.length / 2)) {
        const a = s[i];
        const bIndex = s.length - 1 - i;
        const b = s[bIndex];
        s[i] = b;
        s[bIndex] = a;
        i++;
    }
};

export default reverseString;