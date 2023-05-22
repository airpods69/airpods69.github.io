- [[Analog Video) signal representation require sampling $s_c(x_1, x_2, t)$ in vertical and temporal directions.
- For digital video representation, sampling is in all three directions.
![](../Images/Pasted%20image%2020230316131825.png)

### Sampling structure for [[Analog Video)
- An [[Analog Video) signal is obtained by sampling time-varying image intensity distribution in  the vertical $x_1$ and temporal $t$ directions. This process is known as [[Video Scanning).
- Continuous intensity information is concatenated to form 1-D analog video signal as a function of time.
- Commonly used vertical-temporal sampling structures are:
	- Orthogonal Sampling Structure.
		- Used in progressive analog videos. 
	- Hexagonal Sampling Structure.
		- Used in 2:1 interlaced analog videos.

- Matrix V is called **Sampling martix**.
![](../Images/Pasted%20image%2020230316132153.png)
![](../Images/Pasted%20image%2020230316132342.png)

### Sampling Structures in Digital Videos
- Digital video is obtained by sampling analog video in horizontal directions along the scan lines.
- Each pixel in a spatio-temporal sample is represented as one or more numbers that describe the brightness or luminance of it.
- 2D sampled images are obtained by the camera focusing the 2D projection onto a sensors -> array of CCD Sensors (Charged Couple Device).
	- In case of colour, the colours are seperately filtered and projected onto the CCD.
	- Output of CCD array is an [[Analog Video) signal.

## Temporal Sampling
Moving [[Video) image is formed by taking rectangular snapshots at periodic intervals.
**Persistence of vision**: Retention of image in the eye for a short interval of time even after the image has changed. If pattern changes faster than 1/persistence_vision_time then temporal blurring occurs

![](../Images/Pasted%20image%2020230316140111.png)


## 2D Rectangular Sampling
- Sampling in two spatial coordinates.
- Sampled at locations 
	- $x_1 = n_1 \Delta x_1$ 
	- $x_2 = n_2 \Delta x_2$
- Sampled signal can be expressed as $$ s(n_1, n_2) = s_c(n_1 \Delta x_1, n_2 \Delta x_2) \text{ , } (n_1, n_2)\in Z^2$$
- The sampled signal in terms of continuous coordinate variables is given by $$ s_p(x_1, x_2) = s_c(n_1, n_2) \sum_{n_1}\sum_{n_2} \delta(x_1 - n_1 \Delta x_1 \text { , } x_2 -n_2 \Delta x_2)$$
## Reconstruction from Samples
- Reconstruction of continuous signals from its samples is an **interpolation problem**.
- In ideal bandlimited channel, Highest frequency which can be represented without aliasing is at nyquist frequency, 1/2 of sampling frequency.