Travel opposite to gradient vector.
$$g = \nabla C(w)$$

$$w(n + 1) = w(n) - \eta g(n)$$
$$\delta w(n) = w(n + 1) - w(n) = -\eta g(n)$$

Ultimately,
$$C(w(n + 1)) = C(w) + g^T(n)\Delta(n)$$

When $\eta$ is too small then that leads to an overdamped case.
When $\eta$ is too large then that leads to an underdampled case.