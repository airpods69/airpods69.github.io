Master theorem states that if we have $$T(n)=aT(n/b) + f(n)$$
Then,
1. if $f(n) < O(n^{log_b a})$ for some $\varepsilon \gt 0$, then $T(n) = \theta(n^{log_b a})$
2. if $f(n) = \theta(n^{log_b a})$, then $T(n) = \theta(n^{log_b a}log n)$ 
3. if $f(n) > \Omega(n^{log_{b} a})$ if $af(\frac{n}{b}) \le cf(n)$ for some $c \lt 1$ and for all sufficiently large $n$, then $T(n) = \theta(f(n))$

https://cs.stackexchange.com/questions/3504/solving-tn-3t-fracn4-n-cdot-lgn-using-the-master-theorem
