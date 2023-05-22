## Stick Diagrams
### Stick Diagram Notations 
![](../Images/Pasted%20image%2020230521204320.png)

### Rules
1. Rule 1:
	- When two or more sticks of the same type cross or touch each other, that represents an electrical contact. 
	- ![](../Images/Pasted%20image%2020230521204402.png)
1. Rule 2:
	- When two or more sticks of different type cross or touch each other, then there is no electrical contact unless explicitly shown. 
	- ![](../Images/Pasted%20image%2020230521204533.png)
1. Rule 3:
	- When a poly crosses diffusion, then it represents a transistor.
	- ![](../Images/Pasted%20image%2020230521204617.png)
1. Rule 4:
	- In CMOS, a demarcation line is drawn to avoid touching of p-diff with n-diff. All PMOS must lie on one side of the line and all NMOS will have to be on the other side. 
	- ![](../Images/Pasted%20image%2020230521204718.png)

## Layout Design Rules
- Design rules are needed to create an interface between designer and process engineer.
- Two major approaches
	- Micron rules.
	- Lemda rules: Simplified micron rules with limited scaling attributes. 
- Design rules represents a tolerance which insures very high probability of correct fabrication
	- Scalable design rules: lambda parameter
	- Absolute dimensions (Micron Rules)

### Micron Rules
- All minimum sizes and spacing specified in microns.
- Rules don't have to be multiples of $\lambda$.
- Can result in 50% reducion in area over $\lambda$.

### Lambda Based Design Rules
- Defines scalable rules based on (which is half of the minimum channel length)
- Stick diagram is a draft of real layout, it serves as an abstract view between the schematic and layout.
- All widths, spacing and distances are written in the form.
- $\lambda = 0.5 x \text{minimum drawn transistor length}$
- Design rules based on single parameter $\lambda$.
- Simple for designer.
- Wide acceptance.
- Provide feature size independent way of setting out mask.
- If design rules are obeyed, masks will produce working circuits.
- Minimum feature size is defined as $2\lambda$
- Used to preserve topological features on a chip.

#### Design Rules
- Minimum width of PolySi and diffusion line $2\lambda$.
- Minimum width of Metal Line $3\lambda$ as metal lines run over a more uneven surface than other conducting layers to ensure their continuity.
![](../Images/Pasted%20image%2020230522114039.png)

- PolySi - PolySi space $2\lambda$.
- Metal - Metal space $2\lambda$.
- Diffusion - Diffusion space $3\lambda$. 
	- This is to avoid the possibility of their associated regions overlapping and conducting current.
![](../Images/Pasted%20image%2020230522114247.png)

- Diffusion - PolySi space $\lambda$.
	- To prevent the lines overlapping to form unwanted capacitor.
- Metal lines can pass over both diffusion and polySi without electrical effect. When no separation is specified, metal lines can overlap or cross. 
![](../Images/Pasted%20image%2020230522114741.png)

- It is a recommended practice to leave $\lambda$ between a metal edge and polySi or diffusion line to which it is not electrically connected. 
![](../Images/Pasted%20image%2020230522114828.png)

- Rules summarized
	- Poly-poly spacing - $2\lambda$
	- Diff-diff spacing - $3\lambda$
	- Metal-metal spacing - $2\lambda$.
	- Diff-poly spacing - $\lambda$.

#### Contact cut
- Metal connects to polySi/Diffusion by contact cut.
- Contact area: $2\lambda * 2\lambda$.
- Metal and polySi or diffusion must overlap this contact area by $I$ so that the two desired conductors encompass the contact area despite any mis-alignment between conduction layers and the contact hole.  