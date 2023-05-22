It is a method to address overfitting by reducing generalization without affecting training error.

- **Bias**: Error between average model prediction and ground truth.
	- High Bias leads to 
		1. Oversimplified models.
		2. Underfitting.
		3. High Error on both train and test dataset.

- **Variance**: Average variability in model prediction
	- High Variance leads to
		1. Overly complex models.
		2. Overfitting.
		3. Low error on training data but High error on test data.

## Types of Regression

### 1. Lasso Regularization (L1 Regularization)
LASSO: Least Absolute Shrinkage and Selection Operator

It adds a penalty to error operator.
**penalty**: Total of absolute values of weights.

$$Cost = Loss + \lambda \sum||\omega||$$
where $\lambda$ is the penalty added

- **Limitations**:
	1. Struggles with some types of data
		- Where number of predictors ($p$) > Number of observations ($n$)
		- In this case, LASSO picks up at most $n$ predictors as non zero even if all are relevant.

### Ridge Regularization (L2 Regularization)
Conjointly adds a penalty to error operator.
**penalty**: Total of squared values of weights.

- **Limitations**:
	- Does not decrease number of variables. (But decreases the complexity)

### Elastic Net Regularization
Combines LASSO and Ridge Regularization
$$ElasticNetMSE = MSE(y, y_{pred}) + \alpha_1\sum_{i=1}^{m}|\theta_i| + \alpha_2\sum_{i=1}^{m}|\theta_i|$$