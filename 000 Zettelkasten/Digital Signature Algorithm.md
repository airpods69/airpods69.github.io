tags: #cryptography 

- Public key cryptosystem.
- Uses a key pair -> Public key and Private key.
- Mathematical process or scheme that is use for providing authentication in secure communication process.
- Makes electronic document unique.
- Private key used to generate digital signature for memory, and public key is used to verify the signature.
- Protects two parties from 3rd party but not from each other.

- Signing using RSA
	1. Hash the input msg
	2. Use private key to sign the hash.
	3. Concatenate Input msg and hash.
	- Reciever side
		1. Hash the input msg
		2. Use public key on hash part of concatenated msg.
		3. Compare the two 