import { Buffer } from 'buffer';

function randomBits(n: number) {
    // Create a new array of bytes with the required length, rounded up
    const byteLength = Math.floor(n / 8);
    const array = new Uint8Array(byteLength);

    // Use the crypto API to fill the array with random bytes
    crypto.getRandomValues(array);

    // Convert the array to a buffer
    return Buffer.from(array);
}

export default randomBits