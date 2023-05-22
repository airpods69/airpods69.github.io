- Binomial heap is implemented as a set of binomial trees which are defined recursively as follows:
	- Binomial tree of order 0 is single node.
	- Binomial tree of order $k$ has a root node whose children are roots of binaomial tree of order $k - 1, k - 2, .. , 2, 1, 0$ (in this order).
![](../Images/Pasted%20image%2020230516091854.png)
- Binomial tree of order $k$ has $2^k$ nodes and height $k$. 

## Structure of binomial heap
- Binomial heap is implemented as a set of binomial trees that satisfy the binomial heap properties:
	1. Each binomial tree in a heap obeys the minimum-heap property.
		- This property ensures that root of each binomial tree contains smallest key.
	2. There can be at most one binomial tree for each order, including zero order.
		- This property implies that a binomial heap with $n$ nodes consists of at most $1 + log_2 n$ binomial trees. Number and orders of these trees are uniquely determined by number of nodes $n$. 

## Implementation
- There are 4 operations that can be performed in a binomial heap
	1. Merge.
	2. Insert.
	3. Find Minimum.
	4. Delete Minimum.
	5. Decrease Key.

- None of the operations requires random access to root nodes of binomial trees.
	- The roots of the binomial trees can be stored in a linked list, ordered by increasing order of the tree. 
- Not feasible to have a separate links to each of the children since it is a variable count, instead
	- implement tree using links from each node to its highest order child in the tree and to its sibling of the next smaller order than it.
	- The sibling pointers can be interpreted as next pointers in a linked list of the children of each node but with opposed order from linked list of roots.

### Merge
- Merges two binomial trees with same order. 
- Used as subroutine.
- Time complexity: $O(\log n)$

```Algorithm
function mergeTree(p, q)
	if p.root.key <= q.root.key // Order dekhte hai idhar kahi
		return p.addSubTree(q)
	else
		return q.addSubTree(p)
```

### Insert
- Create new heap which contains only this element and then merge it to the original heap
- Time complexity: $o(\log n)$.
- Speed up
	- Use merge procedure that shortcuts the merge after it reaches a point where only one of the merged heaps has trees of larger order.

### Find minimum 
- Pointer containing minimum element can be maintained which gets updated after every operation other than finding minimum.
- Time Complexity: $O(1)$

### Delete minimum
- Steps
	1. Find element
	1. Remove it from the root of its binomial trees
	1. Obtain list of its child subtrees. 
	1. Merge subtrees then merge the new binomial heap to the original binomial tree.
- Time complexity: $O(\log n)$
```Algorithm
funcion deleteMin(heap)
	min = heap.trees().first()
	for each current in heap.trees()
		if current.root < min.root 
			then min = current
	for each tree in min.subTrees()
		tmp.addTree(tree)
	heap.removeTree(min)
	merge(heap, tmp)
```

### Decrease key
- In this operation, the key of an element is decreased. There is a chance of it becoming smaller than the key of its parent and thus violating the minimum heap property. 
- If key of element is smaller than its parent's key, exchange the element with its parent till minimum heap property is satisfied.
- Time complexity: $O(\log n)$
- Operation requires that representation of trees include pointers from each note to its parents.

### Delete
- To delete an element from heap, decrease its key to negative infinity and then delete minimum in the heap.