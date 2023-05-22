tags: #graph_theory 

## Spanning Tree
- **Definition**: A subgraph $T$ of a connected graph $G$ is called a spanning tree if it is a tree containing all the vertices of $G$. There can be multiple spanning trees for one Graph.
![](../Images/Pasted%20image%2020230515015622.png)

## Branch
- An edge in a spanning tree $T$ is called a branch of the spanning $T$.

## Chord
- If an edge of a connected graph $G$ is not a branch of a spanning tree $T$ then the edge is called a chord of the spanning tree $T$.

## Fundamental Circuits
- Let $G$ be a connected and $T$ is its spanning tree. Then a circuit formed by adding a chord to spanning tree $T$ is called as fundamental circuits.
- if graph $G$ has $e$ edges and $n$ vertices and spanning tree has $n-1$ branches then there are exactly $e - n + 1$ fundamental circuits -> number of circuits is equal to number of chords present.


## Cut Set
In a connected graph G, set of edges whose removal from the graph leaves the graph disconneced, provided removal of no proper subsets of these edges disconnects $G$, is called a cut set of graph.

### Theorems
>Theorem 1:
>	- Prove that every cut-set in a connected graph $G$ must contain atleast one branch of every spanning tree.
>
>Proof:
>	- Let $G$ be a connected graph and $S$ be a cut set of $G$.
>	
>	- If possible, suppose $T$ is spanning tree of $G$ which has no edges included in cut-set $S$. Therefore, $T$ is completely contained in $G-S$.
>	- Since $T$ is a spanning tree and spans through all vertices of $G$, the subgraph $G-S$ remains connected. But this is not possible as removal of a cut-set must leave the graph disconnected.
>	- This disproves our assumption wrong and hence, every cut-set in a connected graph $G$ must contain atleast one branch of every spanning tree. 

>Theorem 2:
>	- In a connected graph, any minimal set of edges containing at least one branch of every spanning tree of $G$ is a cut set.
>Proof:
>	- Let $G$ be a connected graph and $Q$ be a minimal set of edges containing atleast one branch of every spanning tree of $G$.
>	- Now, $G-Q$ is a subgraph of $G$ from which atleast one branch of every spanning tree is missing.
>	- As $G-Q$ cannot contain any spanning tree of $G$ completely, it must be disconnected.
>	- Since, $Q$ is a minimal set of edges with this property, any edge $e$ returned from $G$ to $G - Q$ will create atleast one spanning tree, which proves that $G - Q + e$ must be a connected graph.
>	- Thus, $Q$ is a minimal set of edges whose removal from $G$ disconnects $G$. Therefore it is a cut-set of $G$.

>Theorem 3:
>	- Every circuit has an even number of edges in common with any cut-set.


## Fundamental Cutsets / Basic Cut set
- A fundamental cutset is a cutset which satisfies the following conditions
	1. The cutset partitions all vertices into two disjoin sets
	2. Cut set always contains only one branch and rest of the edges are chords.