## Graph Coloring
- **Definition**: A k-coloring of a graph $G$ if a function f: $V(G) \rightarrow \{1,2,...,k\}$ such that $$ u \sim v\Rightarrow f(u) \neq f(v)$$
## Chromatic Number
- **Definition**: The chromatic number of a graph $G$, denoted by $\chi(G)$ is the minimum $k$ such that $G$ has k-coloring.

## Bipartite Graphs
- **Definition**: Graph $G$ is bipartite if $G$ is 2-colorable.
- if $X$ is set of vertices of one color and $Y$ is the set of vertices of the other color, we say "$G$ is a bipartite graph with bipartition $V(G) = X \cup Y$".
- if $G$ is bipartite with bipartition $V(G) = X \cup Y$ then $X$ and $Y$ are independent sets.

#### Complete Bipartite Graph
- **Definition**: Let $n$, $m$ be positive integers. The complete bipartite graph $K_{m,n}$ is a bipartite graph with bipartition $X \cup Y$ where:
	- $|X| = n$, $|Y| = m$
	- $E(K_{m,n}) = \set{(x, y) : x \in X, y \in Y }$

- **Proposition**: If $G$ is bipartite then $G$ does not have an odd cycle.

### Hall's Marriage Theorem
- Let $G$ be a bipartite graph with sets $A$ and $B$. Then $G$ has a matching of A if and only if $|N(S)| \ge |S|$ for all $S \subset A$.