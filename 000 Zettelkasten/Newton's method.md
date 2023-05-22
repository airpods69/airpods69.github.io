A technique for [[Unconstrained Optimization).

Minimizing quadratic approximation of cost function.
Using Second order taylor Series expansion of $C(\omega(n))$.

$$\Delta C(\omega(n)) = C(\omega(n + 1)) - C(\omega(n))$$
$$\Delta C(\omega(n)) = g^T(n) \Delta \omega(n) + \frac{1}{2}\Delta \omega^T(n)H(n)\Delta \omega(n) \text{ ....(1)}$$

$H(n)$ is a Hessian matrix of $m*m$ dimensionality.

$$H(n) = \nabla^2 C(\omega)$$

Left Incomplete for now.