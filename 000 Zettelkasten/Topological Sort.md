- It is a sorting technique for Directed Acyclic Graphs (DAGs).
- It creates linear sequence (ordering) for the nodes such that
	- if $u$ has an outgoing edge $v$ then $u$ must finish before $v$ starts.
- Very common in ordering jobs or tasks.

## Topological Sort Algorithm using DFS.
- To create a topological sort from DAG
	1. Final linked list is empty.
	2. Run DFS.
	3. When a node becomes black(finishes) insert it to the top of a linked list.
```Pseudocode
Topological-Sort(G) {
	call DFS(G) // To compute finishing times f[v] for each vertex v.
	When each vertex is finished,
		insert it onto the front of a linked list.
	return linked list of vertices.
}
```
- Time complexity = $O(V + E)$.