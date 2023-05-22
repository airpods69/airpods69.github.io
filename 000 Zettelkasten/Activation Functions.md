An activation function shapes the outputs of artificial neurons.

Types of activation functions

## Linear Activation Functions

### Threshold Function
The threshold activation function looks as follows
$$
\mathrm{y_k} = \begin{cases}
    1 & \text{if } v_k \ge 1 \\ % & is your "\tab"-like command (it's a tab alignment character)
    0 & \text{otherwise.}
\end{cases}
$$
When this activation function is used, Model is known as ***Mc-Culloch Pitts Model***.
**Output** is hard-limited between $\set{0,1}$.

### Signum Function
$$
\mathrm{y_k} = \begin{cases}
    1 & \text{if } v_k \ge 1 \\ % & is your "\tab"-like command (it's a tab alignment character)
    -1 & \text{otherwise.}
\end{cases}
$$

**Output** is hard-limited between $\set{-1,1}$.

### Linear Function
The output gets limited in a range of values.
$$y_k = v_k$$
**Output** is limited to a given range.

## Non Linear Activation Functions
- Layers collapse without non-linearity.
- Deep Learning models with linear activation function are just 1-layered Regression models.

### Sigmoid Function [Logistic Function]

$$
\phi(x) = \frac{1}{1 + e^{-ax}}
$$

$$
\mathrm{a} = \begin{cases}
    \text{McCulloch Pits Model} & \text{if } a \to \infty \\ % & is your "\tab"-like command (it's a tab alignment character)
    \text{Linear Model} & \text{if } a = 0 \\ % & is your "\tab"-like command (it's a tab alignment character)
    \text{Otherwise} & a > 0
\end{cases}
$$

- **Output** saturates between $\set{0, 1}$.
- Biased average.
- Great for output.

### Tanh Function
$$
\phi(x) = \tanh (ax) = \frac{e^x - e^{-x}}{e^x + e^{-x}}
$$

- **Output** saturates between $\set{-1,1}$.
- Nearly linear range,
- Ok for hidden layers.

### ReLU Function
$$
\phi(x) = \max(0, x)
$$
- Strongly non-linear.
- Never saturates.
- Biased Average.
- Great for hidden layers.
- Clips Negative values

#### Variations of ReLU
##### LeakyReLU
$$
\phi(x) = \max(\alpha x, x)
$$

##### ReLU-N
$$
\phi(x) = \min(N, \max(0, x))
$$