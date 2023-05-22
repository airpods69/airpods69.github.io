- Attempt to use/read data before it is ready.
- One solution is to stall the process to avoid misreading of data. But that can increase time? and it is how [[Structural Hazards) are dealt with.
- Methods to eliminate stalls in Data Hazards:
	- Hardware Technique:
		- [[Forwarding)/Bypassing.

![](../Images/Pasted%20image%2020230321192154.png)

## Classification
- Based on read/write accesses
	1. RAW - Read After Write.
	2. WAW - Write After Write.
		- Not possible in DLX unless
			1. WB of an ALU is moved into Mem Stage.
			2. Data Memory Access (Mem) takes two pipe stages.
	3. WAR - Write After Read.
		- Not possible in DLX.
			- All writes(WB) take place after reads(ID).

