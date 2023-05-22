- Binary Search Tree properties
- Balance property
	- balance of every node is $$-1 \le b - \le 1$$
	- Result:
		- depth is $\theta(log n)$.
		- all time complexity is $\theta (log n)$

## Insertion Algorithm 
### Recursive
- Search downward for spot.
- Insert node.
- Unwind stack, Correct the heights using
	1. If imbalance #1, single rotate.
	2. If imbalance #2, double rotate.

### Iterative 
- Search downward for spot, stacking parent nodes
- Insert node
- Unwind stack, Correct the height using
	1. If imbalance #1, single rotate and exit.
	2. If imbalance #2, double rotate and exit.

## Deletion Algorithm
### Recursive
- Search downward for node.
- Delete node.
- Unwind, correcting heights as we go
	1. If imbalance #1, single rotate.
	2. If imbalance #2, double rotate.

### Iterative
- Search downward for node, stacking parent nodes.
- Delete node.
- Unwind stack, correcting heights heights
	1. If imbalance #1, single rotate.
	2. If imbalance #2, double rotate.