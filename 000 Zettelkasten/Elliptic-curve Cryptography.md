- Public-Key encryption Technique based on algebraic structure of elliptic curves over finite fields.
- Provies more secure foundation than 1st generation public key cryptography systems like RSA.
- Smaller keys.
- Used in digital Signatures in cryptocurrencies.

## Elliptic Curve Theory
- **Elliptic Curve**: Plane curve over a finite field (Rather than real numbers). Points in this plane satisfy the equation $y ^ 2 = x ^ 3 + ax + b$ along with distinguished point at infinity. Coordinates are chosen from a fixed finite field of characteristic.
- **Elliptic Curve Discrete Logarithm Problem(ECDLP)**: Elliptic curve based protocols base assumption is that finding the [[discrete logarithm) of a random elliptic curve element with respect to publicly known base point is infeasible.  

## ECC Keys
- Private Keys: Integers (In the range of curve's field size, typically 256 bit integers).
- Key generation: Generation of Random Integers within a certain range is a valid ECC private key.
- Public Key
	- EC points -> Pairs of integer Coordinates $(x, y)$, laying on the curve.
	- Special property -> EC points can be compressed to one coordinate + 1 bit (Even or odd).
	- Compressed public key for 256 bit ECC private key is 257 bit integer.

## Curves and Key Length
- Different curves provide different level of security, performance and key lengths.
- NIST Curve: $y ^ 2 = x ^ 3 + 7$
- **Generator Point**: Base point which can generate any other point in its subgroup over elliptic curve by multiplying G by some integer in the range (0, r). "r" is called order of cyclic group.

## Private Key, Public Key and Generator Point in ECC
- Elliptic curve (EC) over finite field $F_p$.
- G -> Generator Point.
- K -> Private key.
- P -> Public key.
- Multiplying a fixed EC point G by certain integer k, we obtain an EC point P.
- Fast to calculate $P = k * G$ using ECC multiplication algorithms.
- Extremely slow to calculate $k = P / G$. 
- ECDLP Problem is the basis of security strength behind ECC cryptography.