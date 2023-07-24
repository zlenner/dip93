import wordlist from './wordlists/en.json';
import { Buffer } from 'buffer';
import randomBytes from 'randombytes';

const GROUP_SIZE = 10;

function bytesToWords(bytesVal: Buffer): string {
    // Convert bytes to binary string
    const binary = Array.from(bytesVal).map(b => b.toString(2).padStart(8, '0')).join('');

    // Split binary string into groups of {GROUP_SIZE} bits
    const groups = [];
    for (let i = 0; i < binary.length; i += GROUP_SIZE) {
        groups.push(binary.slice(i, i + GROUP_SIZE));
    }

    // Convert each group to an integer and map it to a word
    const words = groups.map(group => wordlist[parseInt(group, 2)]);

    return words.join(' ');
}

export const generate = (num_words: number = Math.ceil(128 / GROUP_SIZE)) => {
    const bytes = randomBytes(Math.ceil(num_words * GROUP_SIZE))
    return bytesToWords(bytes)
}
