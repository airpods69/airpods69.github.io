Optimization technique for finding the local minima of a *differentiable* function.

Consider $p$ observations
Total Error $$E = \sum_{p}{E_p} \text{ and } E_p = \frac{1}{2}(t_p - y_p)^2 \text{ ....(1)}$$

Gradient $G$ is $$G = \frac{\delta E}{\delta w_{ij}} \text{ where } w_{ij} \text{ is the synaptic interconnection weight.}$$$$G = \frac{\delta}
{\delta w_{ij}}\sum_p E_p$$

$$G = \sum_p \frac{\delta E_p}{\delta w_{ij}}$$

$$G = \sum_p \frac{\delta (t_p - y_p)^2}{\delta w_{ij}}$$

$$\frac{\delta E_p}{\delta w_{ij}} = \frac{\delta E_p}{\delta y_{p}} * \frac{\delta y_{p}}{\delta w_{ij}}$$

From (1),
$$\frac{\delta E_p}{\delta y_p} = -(t_p - y_p) \text{ ...(2)}$$

$$\frac{\delta y_p}{\delta w_{ij}} = \frac{\delta}{\delta w_{ij}} \sum_{j = 1}^n w_{ij} x_j = x_j \text{ .....(3)}$$

$$\frac{\delta E}{\delta w_{ij}} = -(t_p - y_p) * x_j \text{ .....(4)}$$

$$\Delta w_{ij} = \eta (t_o - y_o)x_i \text{ where } \eta \text{ is learning factor. } {0 < \eta < 1}$$
