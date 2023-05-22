- Related to [[Pipelines)
- Technique to reduce number of stalls.
- Instead of [[stalls), compiler schedules pipeline by rearranging the sequence of [[Instructions).
![](../Images/Pasted%20image%2020230322171008.png)

## Example 1
| Instructions    | CC1 | CC2 | CC3 | CC4 | CC5 | CC6 | CC7 | CC8 | CC9 |
| --------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LW R1, 0(R2)    | IF  | ID  | EX  | MEM | WB  |     |     |     |     |
| ADDI R1, R1, #1 |     | IF  | ID  | EX  | MEM | WB  |     |     |     |
| SW 0(R2),R1     |     |     | IF  | ID  | EX  | MEM | WB  |     |     |
| ADDI R2, R2, #4 |     |     |     | IF  | ID  | EX  | MEM | WB  |     |
| SUB R4, R3, R2  |     |     |     |     | IF  | ID  | EX  | MEM | WB  |

1. Can be done by adding [[stalls) to it.
2. Can be done by forwarding.

### By stalls without [[Forwarding) the data.
![](../Images/Pasted%20image%2020230322173952.png)

### By using [[Forwarding)
| Instructions    | CC1 | CC2 | CC3 | CC4 | CC5 | CC6 | CC7 | CC8 | CC9 |
| --------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| LW R1, 0(R2)    | IF  | ID  | EX  | MEM | WB  |     |     |     |     |
| ADDI R1, R1, #1 |     | IF  | ID  | EX  | MEM | WB  |     |     |     |
| SW 0(R2),R1     |     |     | IF  | ID  | EX  | MEM | WB  |     |     |
| ADDI R2, R2, #4 |     |     |     | IF  | ID  | EX  | MEM | WB  |     |
| SUB R4, R3, R2  |     |     |     |     | IF  | ID  | EX  | MEM | WB  |

Esa hi hoga bas [[Forwarding#Dependency Arrows) banake dekhliyo konsa kaha jaata hai and forwarding karde.