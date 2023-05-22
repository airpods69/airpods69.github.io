- Forwarding is a way to eliminate the need for stalling processes in DLX Programming.
- It is "Forwarding" the result as soon as it is ready to wherever it is needed.

## Dependency Arrows
- It is a thing?
- Tail at wherever a write is happening to the register. And head at where it is being read.
	- If head behind the tail (or backwards in time) then a [[Data Hazards) has occurred. 

![](../Images/Pasted%20image%2020230322154806.png)

- Output is generated in the Execution stage (ALU), just forward results from there to the subsequent [[Instructions) where it is needed. 
- A forwarding unit is used for this which selects the correct ALU inputs for the Execution stage.
	- If no hazards, then the ALU inputs will come from the register file.
	- If there is a hazard, then the ALU inputs are from the Ex/Mem or Mem/WB [[Pipelines).


![](../Images/Pasted%20image%2020230322162427.png)
Explanation for this image:
	So If Rd = Rs then forwardA (Forward the output) varna don't.

## Not all [[Stalls) can be eliminated. #important
- **LW** [[Instructions) cannot be executed until Mem stage is executed.