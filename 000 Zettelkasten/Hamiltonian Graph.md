- If there exists a closed walk in the connected graph that visits every vertex of the graph exactly once without repeating the edges then such a graph is a Hamiltonian graph.
![](../Images/Pasted%20image%2020230514145641.png)

## Hamiltonian Path
- If there exists a walk in the connected graph that visits every vertex of the graph exactly once without repeating the edges, then such a walk is called as a Hamiltonian path.
- Path which contains all vertices of the graph.

- **NOTE**: In Hamiltonian path, all the edges may or may not be covered but edges must not repeat.

## Hamiltonian Circuit
- Also known as Hamiltonian Cycle.
- It is a round trip path along edges of a connected graph with n vertices that visits every vertex once and returns to its starting point.

### Important Notes
- Any [[Hamiltonian Graph#Hamiltonian Circuit) can be converted to a [[Hamiltonian Graph#Hamiltonian Path) by removing one of its edges.
- Every Graph that contains a [[Hamiltonian Graph#Hamiltonian Circuit) also contains a [[Hamiltonian Graph#Hamiltonian Path) but vice versa is not true.
- There may exist more than one [[Hamiltonian Graph#Hamiltonian Path) and [[Hamiltonian Graph#Hamiltonian Circuit) in a graph.

## Backtracking Approach for Finding Hamiltonian Circuit
- Given: Graph $G = (V, E)$
- Problem: Find Hamiltonian Circuit using backtracking approach.
1. We start from any arbitrary vertex, assume x.
	- This vertex becomes the root of our implicit tree.
2. Next adjacent vertex is selected on the basis of alphabetical/numerical order.
	- If at any stage an arbitrary vertex, say 'y' makes a cycle with any vertex other than vertex 'o' then we say that **we reached a dead end**.
	- In this case, we backtrack one step and again search begins by selecting another vetrex.
	- After backtracking, the element from partial solution must be removed. 
3. The search using backtracking is successful if a Hamiltonian cycle is obtained.

### Algorithm
- Recursive algorithm for backtracking to find all of the hamiltonian cycles of a graph.
```
Algorithm Hamiltonian(k) {
	repeat{ 
		// Generate values for x[k]
		NextValue(k); // Assign a legal next value to x[k]
		
		if (x[k] == 0) then
			return
		if (k == n) then
			write(x[1:n])
		else
			Hamiltonian(k + 1)
	} until (false)
}
```

```
Algorithm NextValue(k) {
	repeat {
		x[k] = (x[k] + 1) mod (n + 1) // Next vertex
		
		if (x[k] == 0) then
			return
		if (G[x[k - 1], x[k) != 0) then
		{
			for j = 1 to k - 1 do
				if (x[j] == x[k]) then break
			if (j == k) then
				if ((k < n) or ((k == n) and G[x[n],x[1) != 0)) then
					return
		}
	} until (false)
}
```
