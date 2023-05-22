tags: #cryptography 

- Better than 3DES.
- Block cipher
- Key size -> 128 / 192 / 256 bits.
- Block size -> 128 bits each.
- Number of rounds depends on key size
	- 128 bits -> 10 rounds.
	- 192 bits -> 12 rounds.
	- 256 bits -> 14 rounds.

## How does it work?
### Creation of round keys
- Key Schedule algorithm is used calculate all round keys from key, so initial key is used to create different round keys.
![](../Images/Pasted%20image%2020230513104127.png)

### Encryption
- Each round comprises of 4 steps
	1. SubBytes
	2. ShiftRows
	3. MixColumns
	4. Add Round Keys
- Last round does not have MixColumn operation because it won't affect it.

- SubBytes performs the substitution while ShiftRows and MixColumns are for permutations.

#### SubBytes
- Performed using a lookup table called S-box.
- Substitution done such that a byte is never substituted by itself.
#### ShiftRows
- Each row is shifted particular number of times.
- Left circular shift is performed.
#### MixColumns
- Matrix multiplication -> Each column is multiplied with specific matrix and thus position of each byte in column is changed as a result.
#### Add Round Keys
- Resultant output is XOR-ed with corresponding round key.

### Decryption
- Stages would be
	1. Add Round Key
	2. Inverse MixColumns
	3. ShiftRows
	4. Inverse SubByte

#### Inverse MixColumns
- Similar to MixColumns but differs in matrix used.

#### Inverse SubByte
- Inverse S-box is used as a lookup table instead of S-box and used to substitute byes during decryption.