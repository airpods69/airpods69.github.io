- **Stream Cipher** encrypts digital data stream one bit/byte at a time.
	- Eg, Autokeyed Vigenere cipher or Cerman cipher.
- **Block Cipher**: a block of plaintext is treated as one and used to produce the cipher text block of equal length.

# Block Cipher
- A block cipher operates on a plaintext block of n bits. 
- There are $2 ^n$ possible different plaintext blocks, and for encryption to be reversible, each must produce a unique ciphertext block.
- If we limit to reversible transformation then there are $2 ^ n !$ possible transformations.