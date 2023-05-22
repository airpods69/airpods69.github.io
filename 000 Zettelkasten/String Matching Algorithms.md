## Naive String Matching

- Naive approach is to simply test all the possible placement of Pattern $P[1..m]$ relative to text $T[1..m]$. Specifically, we try shift $s = 0, 1, …, n - m$ successively and for each shift, s, compare $T[s + 1..s + m]$ to $P[1..m]$.

```Pseudoalgorithm
n <- length[T]
m <- length[P]
for s <- 0 to n - m do
	if P[1..m] = T[s + 1 .. s + m]
		then return valid shift s
```

```Pseudoalgorithm
n <- length[T]
m <- length[P]
for s <- 0 to n - m do
	j <- 1
	while j <= m and T[s + j] = P[j] do
		j <- j + 1
	if j > m then
		return valid shift s
return no valid shift exist
```

- Running time: $O((n - m + 1)*m)$ which is clearly $O(nm)$.
	- In worst case where length of pattern is roughly equal, this algorithm runs in **quadratic** time.

## Knuth-Morris-Pratt Algorithm

- Similar to Naive algorithm.
- Wasted information during Naive algorithm is gathered during scan of text. By avoiding this waste of information, run time complexity decreases to $O(n + m)$, which is optimal in worst case. (Requires $O(m)$ extra space)
- In KMP, we have to examine all the characters in text and pattern at least once.

### The Failure Function

- KMP algorithm pre-processes the pattern $P$ by computing a failure function $f$ that indicates the largest possible shift $s$ using previously performed comparisons.
- Failure function $f(j)$ is defined as the length of longest prefix of $P$ that is a suffix of $P[i..j]$.

```Pseudoalgorithm
Input: Pattern with m characters
Output: Failure function f for P[i..j]

i = 1
j = 0
f(0) = 0

while i < m do
	if P[j] == P[i]
		f(i) = i + 1
		i = i + 1
		j = j + 1
	else if j > 0
		j = f(j - 1)
	else
		f(i) = 0
		i = i + 1
```

> **Note**: Failure function $f$ for $P$, which maps $j$ to the length of the longest prefix of $P$ that is a suffix of $P[1..j]$ encodes repeated substrings inside the pattern itself.

## Boyer-Moore Algorithm

- Most efficient string matching algorithm in usual applications.
- Works well when alphabet is moderately sized and the pattern is relatively long.

- Algorithm starts scanning the pattern from right to left.
- While testing of a possible placement of pattern P against text T, a mismatch of text character $T[i] = c$ with corresponding pattern character $P[j]$ is handled as follows:
	- if $c$ is not contained anywhere in $P$, then shift the pattern $P$ completely past $T[i]$.
	- otherwise, shift $P$ until an occurrence of character $c$ in $P$ gets aligned with $T[i]$.
- This helps to avoid lots of needless comparisons by significantly shifting pattern relative to text.

### Bad Character Rule

- Upon mismatch, skip alignments until
	- mismatch becomes a match. Or
	- $P$ moves past mismatched character.

### Good Suffix Rule

- Let $t$ equal to substring matched by inner loop. Skip until
	- There are no mismatches between $P$ and $t$. Or
	- $P$ moves past $t$.