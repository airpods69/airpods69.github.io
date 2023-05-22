tags: #cryptography 

- Polygraphic/Polyalphabetic substitution cipher.

## Algorithm
- Letter represented by number modulo 26.
- Matrix used as cipher key.
- Encryption: Block of n letters (n component vector) multiplied by invertible n x n matrix against modulus 26.
- Decryption: Block is multiplied by inverse of matrix used for encryption.
![](../Images/Pasted%20image%2020230513101440.png)