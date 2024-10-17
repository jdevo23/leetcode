function lengthOfLastWord(s: string): number {
    let num = 0;
    let i = s.length - 1;

    while (i >= 0) {
        if (num && s[i] == ' ') {
            break;
        }

        if (s[i] != ' ') {
            num++;
        }

        i--;
    }

    return num;
};

export default lengthOfLastWord;