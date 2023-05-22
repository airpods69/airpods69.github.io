![](../Images/Pasted%20image%2020230517113101.png)
- $w_k$ -> Connection weights or Synaptic weights from neuron $j$ to neuron $k$.
- Combining inputs we have $$u_k = \sum_{j = 1}^{n} x_j w_{kj} + b_k$$
- We use different functions $f(.)$ to find out the response/output of the neuron
	1. Threshold function
		- Activation happens when $v_k$ is above 0 then $y_k$ is 1 else $y_k$ is 0.
		- Output is hard limited between 0 and 1
		- **McCulloch Pitts Model**.
		- ![](../Images/Pasted%20image%2020230517113701.png)
	2. Signum function
		- if $v_k$ is above or equal to 0, $y_k$ is 1 else -1.
		- Hard limited between +1 and -1.
		- ![](../Images/Pasted%20image%2020230517113815.png)
	1. Linear Model
		- In a given range, $y_k = v_k$.
		- ![](../Images/Pasted%20image%2020230517113952.png)

