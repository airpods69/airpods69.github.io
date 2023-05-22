# About
A B-Tree of order M is a search tree in which each non-leaf node has upto m children.

# Properties
1. It is perfectly balanced, i.e., every leaf node is at the same level.
2. Every internal node except for root node is at-least half-full. $M/2 -1 \le \#Keys \le M -1$
3. Every internal node with $k$ keys has $k+1$ non-null children.

Any B-Tree with $n$ keys, $h$ height and minimum degree $t = \lceil M/2 \rceil$ satisfies $$ h \le log_t \frac{(n + 1)}{2} $$
# Operations
## Insertion 
1. Find appropriate node where X is supposed to be inserted.
2. Add X to this node at the appropriate spot.
3. Number of nodes after insertion:
	- If fewer than $2t-1$: Done.
	- If equal to $2t$: **Overflowed**.
4. Fix overflowed node.
### Fix Overflowed Node
1. Split the node into three parts, M = $2t$:
	- Left: The first $t$ values, become left child node.
	- Middle: The middle value at position $t$, goes up to the parent node.
	- Right: The last $t-1$ values, become right child node.
2. Continue with parent.
![](../Images/Pasted%20image%2020230311112717.png)

## Deletion
**Problem**: Deletion might cause underflowing in the node.
**Underflow**: number of keys remaining in node is $\lt t - 1$

1. **Case 1**: $k$ is in $x$ and $x$ is a leaf node -> Delete $k$
	![](../Images/Pasted%20image%2020230311113216.png)

2. **Case 2**: $k$ in the internal node $x$, $y$, and $z$ are the preceding and succeeding nodes of the key $k \in x$
	1. If $y$ has at least $t$ keys
		- Replace $k$ in $x$ and $k' \in y$, where $k'$ is the predecessor of $k$ in $y$.
		- Delete $k'$ recursively
	2. Check similar case in successor.
	![](../Images/Pasted%20image%2020230311113538.png)
	
	 3. if both cond 1. and cond 2. are not satisfied: $y$ and $z$ has $t-1$ keys
		 1. Merge the children, $y$ and $z$.
		 2. Recursively delete $k$ from the merged cells.