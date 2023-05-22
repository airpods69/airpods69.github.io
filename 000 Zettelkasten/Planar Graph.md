- Graph that can be drawn in a plane such that no two edges of it cross each other.
![](../Images/Pasted%20image%2020230514115312.png)

## Drawing
- **Definition**: Given a graph $G = (V, E)$, a drawing maps each vertex $v \in V$ to a distinct point $\Gamma(v)$ in plane, and each edge $e \in E$, $e = (u, v)$ to a simple open jordan curve $\Gamma(u, v)$ with end points $\Gamma(u)$, $\Gamma(v)$.

## Planar Graph
- **Definition**: Give a graph $G = (V, E)$, $G$ is planar if it admits a drawing such that no two distinct drawn edges intersect except at end points.
![](../Images/Pasted%20image%2020230515154936.png)

### Properties of Planar Graphs
- They are sparse. The size of a planar graph including faces, edges and vertices is $O(n)$.
- They are 4-colourable.
- Number of operations can be performed on them very efficiently because there is a topological order to the incidences.
- They can be efficiently stored (in a data structure called SPQR trees which even allows $O(1)$ flipping of planar embedding).

## Applications of Planar Graphs
- Extensively used in electrical and civil engineering.
	- East to visualize -> Crossings reduces comprehensibility.
	- VLSI design, circuit needs to be on surface with lesser crossings for better design.
	- Determination of isomorphism of chemical structures.

### Planarity Testing
- **Definition**: Given a graph $G = (V, E)$, $G$ is planar only if it can be drawn in plane without edge crossings.

### Planarity Embedding
- **Definition**: Given a graph $G = (V, E)$, if $G$ is planar, then planar representation of graph $G$ will have no edge crossings.

### Characteristics of Planar graph
#### Basic Assumptions
- Euler's formula gives necessary condition for graph to be planar.
- Assume that our graph is connected and there are no self loops and no multi-edges.

#### Euler's Relation
- **Theorem**: Given a graph with $n$ vertices, $m$ edges and $f$ faces, if $n - m + f = 2$ then the graph is planar.
- **NOTE**: Exterior is also counted as a face.

#### Corollary 1
- **Corollary**: For a [[Maximal Planar Graph), where each face is a triangle, $m = 3n - 6$, and therefore, for any planar graph with at least three vertices, we should have: $m \le 3n - 6$. 
> - Proof:
>	$\sum_{f \in F} e_f = 2m$ and since $e_f \ge 3 \Rightarrow 2m \ge 3f$.
>	Substituting in $n - m + f = 2$ gives us $n - m + 2m / 3 \ge 2f$

#### Corollary 2
 - **Corollary**: For a planar graph, where no face is a triangle: $m \le 2n - 4$.
> - Proof:
>	 $\sum_{f \in F} e_f = 2m$ and since $e_f \ge 4 \Rightarrow \sum_{f \in F} e_f \ge 4f \Rightarrow 2m \ge 4f$.
>	 Substituting in $n - m + f = 2$ gives us $n - m + m / 2 \ge 2f$.
> **Note**: This relation is true for bi-partite planar graphs and graphs with no 3-cycle.

#### Corollary 3
- **Corollary**: Any planar graph is 6 colourable.
>- Proof:
>	Since $m \le 3n - 6$, there exists a vertex with degree less than 6 (otherwise $\sum_v d_v = 2m \Rightarrow 2m \ge 6n$)
>	By induction, if we remove this vertex, resulting graph is 6 colourable.
>	Give this vertex a different colour than the other five of neighbours.

#### Corollary 4
- **Corollary**: Any planar graph is 5 colourable.