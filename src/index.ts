import randomBits from './randomBits';
import wordlist from './wordlists/en.json';

const GROUP_SIZE = 10;

function bytesToWords(bytesVal: Buffer): string {
    const binary = Array.from(bytesVal).map(b => b.toString(2).padStart(8, '0')).join('');

    const groups = [];
    for (let i = 0; i < binary.length; i += GROUP_SIZE) {
        groups.push(binary.slice(i, i + GROUP_SIZE));
    }

    const words = groups.map(group => wordlist[parseInt(group, 2)]);

    return words.join(' ');
}

export const generate = (num_words: number = Math.ceil(128 / GROUP_SIZE)) => {
    const numberOfBits = Math.ceil(num_words * GROUP_SIZE);
    const buffer = randomBits(numberOfBits)
    return bytesToWords(buffer)
}
