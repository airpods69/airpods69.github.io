Method to find goodness of fit.
R-Squared value lies between $[0,1]$.

- High value -> less difference between predictions and actual values.
- Small values -> High difference between prediction and actual values.

Sum of square of residuals/error: $$SS_{res} = \sum_i (y_i - f_i)^2 = \sum_i e_i^2$$

Total sum of squares: $$SS_{tot} = \sum_i (y_i - \bar{y})^2$$

$$
R^2 = 1 - \frac{SS_{res}}{SS_{tot}}
$$

# Adjusted R-Square

$$
AdjR^2 = [1 -\frac{(1-R^2)(n-1)}{(n-k-1)}]
$$