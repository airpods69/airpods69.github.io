```python
import sympy
from random import randint, random
from math import gcd as bltin_gcd

def primRoots(modulo):
    # Finds primitive roots of random prime number
    required_set = {num for num in range(1, modulo) if bltin_gcd(num, modulo) }
    return [g for g in range(1, modulo) if required_set == {pow(g, powers, modulo)
            for powers in range(1, modulo)}]

def random_range():
    # Generate a random list
    base = randint(10, 1000)
    return base, base + randint(70, 10000)

def random_prime() -> int:
    # Generate Random Prime Number
    a,b = random_range()
    return sympy.randprime(a, b)

class User:
    def __init__(self, p: int, al: int) -> None:
        self.q = p
        self.pri = randint(0, self.q - 1) # public
        self.pub = pow(al, self.pri, self.q) # private

    def secret_key(self, Y):
        self.K = pow(Y, self.pri, self.q)


def main():
    p = random_prime()
    al = primRoots(p)
    al = al[randint(0, len(al) - 1)]
    userA = User(p, al)
    userB = User(p, al)

    userA.secret_key(userB.pub)
    userB.secret_key(userA.pub)

    print(f"Secret Key of UserA: {userA.K} \nSecret Key of UserB: {userB.K}")

if __name__ == "__main__":
    main()
```
![[Pasted image 20230411115050.png]]

```python
BLOCK_SIZE = 8

def int2bit(value: int):
    # Converts integers to BLOCK_SIZE bits
    return f"{value:0{BLOCK_SIZE}b}"

def string2bit(string: str):
    # Converts string to bits
    bitvalue = ""
    for c in string:
        bitvalue += int2bit(ord(c))
    
    return bytes(bitvalue, 'utf-8')

def message2bit(message: str):
    # Converts message to bits
    
    bitstring = []

    for string in message.split():
        bitstring.append(string2bit(string))
        bitstring.append(bytes("1"*BLOCK_SIZE, 'utf-8')) # for space

    return b''.join(bitstring)


def xor(block, key = '1'*BLOCK_SIZE):
    key = bytes(key, 'utf-8')
    xor_output = []
    for i in range(BLOCK_SIZE):
        xor_output.append(bytes(str(block[i] ^ key[i]), 'utf-8'))
    return b''.join(xor_output)



def reciever_logic(block):
    if xor(block[:BLOCK_SIZE]) == block[BLOCK_SIZE:]:
        return True


def main():
    message = input("Enter message: ")
    message_byte = message2bit(message)

    for block_idx in range(0, len(message_byte), BLOCK_SIZE):
        block = message_byte[block_idx: block_idx + BLOCK_SIZE]

        # If block is for a space
        if block == b"1"*BLOCK_SIZE:
            continue


        mac = xor(block) # Key is predefined
        
        # Reciever
        sent_block = block + mac

        comparison_value = reciever_logic(sent_block)
        if comparison_value == None:
            print("Doesn't match, breaking from loop")
            break

        else:
            print("Block Matches")
        
```
![[Pasted image 20230411115205.png]]