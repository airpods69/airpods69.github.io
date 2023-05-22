- Analog video signal refers to a 1-D electric signal $f(x)$ of time that is obtained by sampling $s_c(x_1, x_2, t)$ in the vertical $x_2$ and temporal $t$ coordinates. This periodic sampling process is known as [[Video Scanning). 

- Important Parameters of video signals:
	1. **Vertical Resolution**: Number of scan lines per frame.
	2. **Aspect Ratio**: Ratio width to height.
	3. **Frame/Field Rate**: Number of frames per second.

### Expression of Video Signal
- Assuming scanning lines move at a velocity $v_1$ and $v_2$ in vertical and horizontal directions, respectively, The video signal can be represented as $$
\sum_{k_1 = \infty}^{\infty} \sum_{k_2 = \infty}^{\infty} S_{k_1, k_2} \text{exp}\{j2\pi(\frac{k_1v_1t}{L} + \frac{k_2v_2t}{H}) \}
$$
$S_{k_1,k_2}$ are the 2-D Fourier series coefficients, $L$ and $H$ denote the horizontal and vertical extents of a frame (including the blanking intervals).
$L/v_1$ is the time taken to scan one image line. $H/v_2$ is the time required to scan a complete frame.

- Still video signal is periodic with fundamentals $F_h = v_1 / L$ called **sweep frequency**. 
![](../Images/Pasted%20image%2020230316131022.png)