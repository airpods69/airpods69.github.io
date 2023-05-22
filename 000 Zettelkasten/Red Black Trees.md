
# About

Red black trees are self balancing binary search trees which guarantee an operation time of $O(log n)$.

# Properties 
1. Nodes are either black or red.
2. Root node is always black.
3. Leave nodes are the same color as root.
4. Both children of red parent are black.
5. Every path from given node to any descendant leaf node contain the same number of black nodes.

**Important**: Path from root to furthest leaf is no more than twice of the path from root to closest leaf. This is because of properties 4 and 5. Since every path contains the same number of black nodes (assuming B), then the shortest path would be B. But since each each red parent has black children, longest path can only be alternating red and black nodes, ie, 2B.

# Operations

## Insertion 
Notations:
- N -> Node.
- P -> Parent of Node.
- G -> Grandparent of Node.
- U -> Uncle of Node. (Sibling of Parent Node)

1. Insert node to the Red Black Tree like in a BST and color it red.
2. Time for some cases
	1. **Case 1**: When N is root node
		- Repaint N from red to black to satisfy property 2.
		 ![](../Images/Pasted%20image%2020230310052540.png)

	2. **Case 2**: When P is black
		- Add N with red color since property 4 and property 5 are not being violated.
		 ![](../Images/Pasted%20image%2020230310052506.png)

	 3. **Case 3**: When both P and U are red
		 - Repaint P and U to black and G to black
		 ![](../Images/Pasted%20image%2020230310052438.png)

	4. **Case 4**: When P is red but B is black, N is the right child of P and P is the left child of G.
		- Left rotate about P to get a left left case (Case 5)
		 ![](../Images/Pasted%20image%2020230310054119.png)

	 5. **Case 5**: When P is red but B is black, N is the left child of P and P is the left child of G.
		- Perform Right rotation and shift P to the position of G
		- Repaint G to red and P to black to avoid violating property 4. 
		 U![](../Images/Pasted%20image%2020230310054213.png)


## Deletion 

1. **Case 1**:
	- Conditions:
		- Node to be deleted is a red leaf node.
	- Operations:
		- Simply remove that node from tree.
3. **Case 2**: 
	- Conditions: 
		- Double Black node is at root.
	- Operations:
		- Simply convert the Double Black node to black.
1. **Case 3**: 
	- Conditions: 
		- Double Black's sibling is black.
		- Double Black's sibling's children are black.
	- Operations:
		- Remove the double black.
		- Repaint double black's sibling to red.
		- If Double Black's parent is black, then repaint it to Double Black, else repaint it to black.
1. **Case 4**: 
	- Conditions: 
		- Double Black's sibling is red.
	- Operations:
		- Swap colors of Double Black's parent with Double Black's sibling.
		- Perform rotation at Double Black's parent node in direction of Double Node.
		- Check which Case can be applied to this new tree and perform that action.
1. **Case 5**: 
	- Conditions:
		- Double Black's sibling is black.
		- Double Black's sibling's far child from Double Black is black.
		- Double Black's sibling's near child to Double Black is red.
	- Operations:
		- Swap colors of Double Black's sibling with Double black's sibling's red child.
		- Perform rotation at sibling node in the direction opposite to Double Black Node.
		- Jump to case 6.
1. **Case 6**:
	- Conditions:
		- Double Black's sibling is black.
		- Double Black's sibling's far child is red.
	- Operations:
		- Swap color of Double Black's parent with Double Black's sibling.
		- Perform rotation at Double Black's parent in the direction of Double Black Node.
		- Remove Double Black sign. (Double black node becomes a black node)
		- Change color of Double Black's sibling's far red child to black.