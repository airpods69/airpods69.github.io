tag: #mos 

- Four Physical components of $V_{TO}$.
	- Work function difference between gate and channel $\phi_{GC}$.
	- Gate voltage to change surface potential. $\phi_F(Substrate)$
	- Gate voltage to offset depletion region charge. $\frac{Q_{B}}{C_{ox}}$
	- Voltage Component to offset fixed charge in gate oxide and in silicon oxide interface. $\frac{Q_{ox}}{C_{ox}}$

$V_{To} = \phi_{GC} - 2\phi_{F}(\text{Substrate}) - \frac{Q_{B}}{C_{ox}} - \frac{Q_{ox}}{C_{ox}}$

| Parameter                           | nMOS     | pMOS     |
| ----------------------------------- | -------- | -------- |
| $\phi_F$                            | Negative | Positive |
| $Q_{Bo} \text{ and } Q_B$           | Negative | Positive |
| Substrate Bias Coefficient $\gamma$ | Positive | Negative |
| Substrate Bias Voltage $V_{SB}$     | Positive | Negative         |

- Threshold Voltage Adjustments:
	- Implanting p-type impurity -> V<sub>T</sub> increased.
	- Implanting n-type impurity -> V<sub>T</sub> decreased.
	- Amount of change in Threshold voltage is given by $$\text{Shift } qN_i/C_{ox}$$
