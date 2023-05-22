- [[Asymmetric Key Encryption) algorithm.
- Public key cryptography based on [[Diffie-Hellman Key Exchange).

## Algorithm
- 3 components
	1. Key Generator.
	2. Encryption Algorithm.
	3. Decryption Algorithm.

### Key Generation
- Party A generates Key pair as follows:
	- Generate efficient description of cyclic group G of order q with generator g. Let e represent the identity element of G.
	- Choose random integer x from (1, q - 1). -> Private Key
	- Computer $h = g ^ x$.
	- Public key: $(G, q, g, h)$.

### Encryption
- Party B has to encrypt message M using Public key (G, q, g, h).
	- Choose integer y randomly from (1, q - 1).
	- Compute $s = h ^ y$ -> Shared secret,  Ephemeral Key
	- Compute $c_1 = g ^ y$ 
	- Convert m into an element of m' of G.
	- Compute $c_2 = m'.s$
	- Ciphertext: $(c_1, c_2) = (g ^ y, m' * (g ^ x) ^ y)$

### Decryption
- Party A needs to decrypt $(c_1, c_2)$ using private key x.
	- Compute shared secret $s = c_1^x$, since $c_1 = g ^ y$, $c_1^x = g^{xy}$, $c_1^x = h^y$.
	- Compute $m' = c_2 * s ^ {-1}$ which she converts back into plaintext message m.