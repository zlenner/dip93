import wordlist from './wordlists/en.json';
import { Buffer } from 'buffer';

// Main library exports - these are packaged in your distributable
import { v4 as uuidv4 } from 'uuid';

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

function uuidToWords(uuidString: string): string {
    // Convert UUID string to a UUID object
    const uuidBytes = Buffer.from(uuidString.replace(/-/g, ''), 'hex');

    // Convert bytes to words
    return bytesToWords(uuidBytes);
}

export const generate = () => {
    const uuidString = uuidv4();
    return uuidToWords(uuidString);
}
