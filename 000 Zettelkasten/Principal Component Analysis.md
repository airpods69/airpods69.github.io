Steps for PCA:
1. Construction of covariance matrix ie $A$. $$cov(X, Y) = \frac{1}{N-1}\sum_{i=1}^N(X_i - \bar X)(Y_i - \bar Y)$$
2. Computation of eigenvalues for covariance matrix. $$\det (A - \lambda I) = 0$$
3. Compute eigenvectors corresponding to every eigenvalue obtained. $$[A - \lambda I]X = 0$$
4. Sort the eigenvectors in decreasing order of it's corresponding eigenvalues and choose $k$ eigenvectors with largest eigenvalues.
5. Transform data along principal component axis.