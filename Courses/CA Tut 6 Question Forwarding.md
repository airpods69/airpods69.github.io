## Question
| Instruction    | CC1 | CC2 | CC3 | CC4 | CC5 | CC6 | CC7 | CC8 |
| -------------- | --- | --- | --- | --- | --- | --- | --- | --- |
| LW R1, 0(R2)   | IF  | ID  | Ex  | MEM | WB  |     |     |     |
| SUB R4, R1, R5 |     | IF  | ID  | Ex  | MEM | WB  |     |     |
| AND R6, R1, R7 |     |     | IF  | ID  | Ex  | MEM | WB  |     |
| OR R8, R1, R9  |     |     |     | IF  | ID  | EX  | MEM | WB  |


## Answer
| Instruction    | CC1 | CC2 | CC3 | CC4   | CC5 | CC6 | CC7 | CC8 |     |
| -------------- | --- | --- | --- | ----- | --- | --- | --- | --- | --- |
| LW R1, 0(R2)   | IF  | ID  | Ex  | MEM   | WB  |     |     |     |     |
| SUB R4, R1, R5 |     | IF  | ID  | STALL | EX  | MEM | Wb  |     |     |
| AND R6, R1, R7 |     |     | IF  |       | ID  | EX  | MEM | WB  |     |
| OR R8, R1, R9  |     |     |     |       | IF  | ID  | EX  | MEM | WB  |

5th Cycle -> First Half me write back hoga and Second half me ID hoga (So No need to worry about another stall)



