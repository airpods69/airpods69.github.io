# About
A B+ tree is an advanced form of self balancing tree which has all the values present at leaf nodes.

# Properties
1. All leaves are at the same level. (Same as B-Trees)
2. The root has at least **two** children.
3. Each node except root can have a maximum of $m$ children and at least $\frac{m}{2}$ children.
4. Each node can have maximum of $m-1$ keys and a minimum of $\lceil m/2 \rceil - 1$ keys.

# Operations
## Insertion
- **Steps**:
	1. Since every element is at leaf nodes, go to the appropriate leaf node.
	2. Insert the key in the node.

- **Cases**:
	1. **Case 1**: 
		- **Condition**: 
			1. Leaf node is not full.
		- Operation:
			1. Insert key into leaf node in increasing order.
	2. **Case 2**:
		- **Condition**:
			1. Leaf node is full.
		- **Operation**:
			1. Insert key into leaf node in increasing order.
			2. Break the node at $\frac{m}{2}$th position.
			3. Add $\frac{m}{2}$th key to the parent node.
			4. If parent node is full, then repeat step 2 and 3.

## Deletion

### The key is not present in any internal nodes
1. **Case 1**:
	- **Condition**:
		- There is more than minimum number of keys.
	- **Operation**:
		- Simply delete the key.

2. **Case 2**:
	- **Condition**:
		- There are exact minimum number of keys
	- **Operation**:
		- Delete the key.
		- Borrow key from immediate sibling.
		- Add median key of sibling node to parent.

### The key is present in internal nodes
1. **Case 1**:
	- **Condition**:
		- There is more than minimum number of keys.
	- **Operation**:
		- Simply delete the key from leaf node and internal node.
		- Fill empty space in internal node with in-order successor. 
  
2. **Case 2**:
	- **Condition**:
		- There are exact minimum number of keys.
	- **Operation**:
		- Delete the key.
		- Borrow a key from immediate sibling through parent.
		- Fill the empty space created in index (internal node) with borrowed key.

### Height of B-tree shrinks
- **Condition**:
	- Deletion of key results in shrinking of height
- **Operation**:
	- Bring internal node's parent's key down to sibling of internal node and create links.