tags: #cryptography 

- Based on the use of a 5x5 matrix of letters constructed using a keyword. (If I remember sahi se then keyword vale phele likhdo then baaki sab and i/j hota hai since 26 alphabets but only 5x5 matrix).

## Rules
- Repeating plaintext letters that are in same pair are seperated with filler letter. (Eg. x)
- Two plaintext letters that fall in the same row of matrix are replaced by letter to the right with first element circularly following the last.
- Two plaintext letters that fall in the same columns are replaced by letter beneath with top element circularly following the last.
- Otherwise each plaintext letter in pair is replaced by letter that lies in its own row and column occupied by the other plaintext letter.