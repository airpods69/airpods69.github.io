- Eular graph is a connected graph which satisfies the condition that all its vertices are of even degree. ([[Euler Circuit))
![](../Images/Pasted%20image%2020230514120001.png)
- **NOTE**: A graph will contain an Euler circuit if and only if all its vertices are of even degree.

## Semi Euler Graph
- If a connected graph contains an Euler train but does not contain Euler circuit, then such a graph is called as a Semi-Euler graph.

- Two conditions must be satisfied for this
	- Graph must be connected
	- Graph must contain an Euler trail.

## Important Notes
### Note 1
- To check if graph is an Euler graph or not
	- Check if graph is connected and contains [[Euler circuit), if yes then it is Euler graph.
	- If all vertices are of even degree, then it is an Euler Graph.

### Note 2
- To check if graph contains an [[Euler Circuit) or not
	- Make sure its vertices are of even degree.
	- if all vertices are of even degree, then graph contains Euler Circuit, otherwise not.

### Note 3
- To check if graph is a [[Euler Graph#Semi Euler Graph) or not
	- Make sure it is connected and contains Euler Trail.

### Note 4
- To check whether any graph contains Euler Trail or not
	- Make sure number of vertices in graph with odd degree is not more than 2.

### Note 5
- Graph will contain Euler trail if it contains [[Euler Circuit).
- Graph may or may not contain [[Euler Circuit) if it contains Euler Trail

### Note 6
- Euler graph is definitely [[Euler Graph#Semi Euler Graph).