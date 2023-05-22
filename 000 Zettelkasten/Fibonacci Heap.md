- It is a collection of trees satisfying the minimum heap property.
- Structure is more flexible compared to binomial heaps.
	- The trees do not have a prescribed shape and in extreme case, the heap can have every element in a separate tree. 
	- Allows operations to be executed in a lazy manner.
- Every node has a degree of at most $\log n$ and size of a subtree rooted in a node of degree $k$ is at least $F_{k + 2}$ -> $F_k$ is a Fibonacci number.

## Amortized Analysis
- Let t(H) = no of trees in a Fibonacci heap H
- Let m(H) = number of marked nodes in H
- Potential function used $$\phi(H) = t(H) + 2m(H)$$
## Operations
1. Create empty Fibonacci heap.
2. Insert element.
3. Merge two Fibonacci heaps (Union).
4. Extract minimum element.
5. Decrease the value of an element.
6. Delete an element.

### Creating Fibonacci Heap
- Steps:
	1. Create an object to store $min[H]$ and $n[H]$
	2. Initialize $min[H]$ = NIL and $n[H] = 0$
	3. Potential of newly created heap $\phi(H) = 0$
- Amortized cost = Actual cost = $O(1)$

### Inserting Elements
- Steps:
	1. Add element to the left of $min[H]$
	2. Update $min[H]$ if needed.
- Amortized Cost of Insert
	- Actual Cost $O(1)$
	- Change in potential +1
		- One new tree, no new marked nodes
	- Amortized cost $O(1)$

### Merging Two Heaps (Union Operation)
- Steps:
	1. Concatenate the root lists of the two Fibonacci heaps
- Amortized Cost of Merge/Union
	- Actual cost $O(1)$
	- Change in potential = 0
	- Amortized cost $O(1)$

### Extracting the Minimum Element
- Steps:
	1. Step 1:
		1. Delete node pointed to by $min[H]$.
		2. Concatenate the deleted node's children into root list.
	2. Step 2:
		1. Consolidate trees so no two roots have same degree.
		2. Traverse from min towards right.
		3. Find two roots $x$ and $y$ with same degree, with $key[x] \le key[y]$
		4. Remove $y$ from root list and make it a child of $x$
		5. Increment $degree[x]$

### Decrease Key
- Steps:
	1. Decrease key of element $x$ to $k$
	2. Case 0: Min Heap property is not violated
		1. change heap min pointer if necessary
	3. Case 1: Parent of $x$ is unmarked
		1. Cut off link between $x$ and its parent, unmark $x$ if marked.
		2. Mark parent
		3. Add tree rooted at $x$ to rool list and update heap min pointer.
	4. Case 2: Parent of $x$ is marked
		1. Cut off link between $x$ and its parent $p[x]$, add $x$ to root list, unmark $x$ if marked.
		2. Cut off link between between $p[x]$ and $p[p[x)$, add $p[x]$ to root list, unmark $p[x]$ if marked. 