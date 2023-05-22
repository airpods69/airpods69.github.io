Used for classifying non-linearly separable data. All RBFs are MLP but not every MLP is an RBF.

RBF imposes transformations by
- imposing non-linear function.
- Increasing dimensionality of feature vector.

Choices for RBF:
1. Multi-quadrics: $$\phi(r) = (r^2 + c^2)^{1/2}$$
2. Inverse quadrics: $$\phi(r) = \frac{1}{(r^2 + c^2)^{1/2}}$$
3. Gaussian Function: $$\phi(r) = \exp(\frac{r^2}{2\sigma^2})$$

$r$ is the distance from receptor $r = ||t - x||$.