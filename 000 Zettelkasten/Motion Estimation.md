- Estimation can be done for two types of motions
	- 2D motion (Image plane motion)
	- 3D motion (Object motion)

## 2-D Motion

- 2-D motion is the projection of 3D motion onto the image plane.
- Also called **projected motion** and refers to the perspective or orthographic projection of 3-D motion into image plane.
- 3-D motion can be characterized in terms of either 3-D instantaneous velocity or 3-D displacement of object points.
- ![](../Images/Pasted%20image%2020230519191640.png)
- ![](../Images/Pasted%20image%2020230519191944.png)
- ![](../Images/Pasted%20image%2020230519191957.png)
- The displacement of image plane coordinates $x$ from $t$ to $t'$, based on the variations of $s_c(x, t)$ is called **correspondence vector**.
- An **optical flow vector** is defined as the temporal rate of change of image plane coordinates, $(v_1, v_2) = (dx_1/dt, dx_2/dt)$ at a particular point $(x, t) \in R^3$ as determined by spatio temporal variations of intensity pattern $s_c(x, t)$. This corresponds to the **instantaneous pixel velocity vector**.
- Note: Correspondence field and optical flow field are also known as **apparent 2-D displacement field** and **apparent 2-D velocity field** respectively.

- Lack of sufficient spatial image gradient: There must be sufficient gray-level variation within the moving region for the actual motion to be observable.
- Changes in external illumination: An observable optical flow may not always correspond to an actual motion.

- NOTE: 2-D displacement and velocity fields are projections of the respective 3-D fields into the image place, whereas the correspondence and optical flow fields are the velocity and displacement functions perceived from time-varying image intensity patterns.

### Optical Flow Equation

- Let $s_c(x_1, x_2, t)$ denote the continuous space time intensity distribution. If the intensity remains constant along a motion trajectory($x_1, x_2$ vary with $t$), we have $$\frac{ds_c(x_1, x_2, t)}{dt} = 0$$
- The above equation denotes the rate of change of intensity along the motion trajectory. Using chain rule of differentiation, we have $$\frac{\partial s_c(x, t)}{\partial x_1}v_1(x, t) + \frac{\partial s_c(x, t)}{\partial x_2}v_2(x, t) + \frac{\partial s_c(x, t)}{\partial t} = 0$$
- This equation is the optical flow equation or optical flow constraint.

### General Methodologies

#### Block Matching Method

 - Most popular method for practical motion estimation due to its lesser hardware complexity.
 - Best motion vector estimate is found by a pixel domain search procedure.
 - Basic idea of block matching
![](../Images/Pasted%20image%2020230519193852.png)

### Block Based Motion Model

#### Block Motion Models

- Assumes image is composed of moving blocks
- Two types of block motions
	- Simple 2-D translation.
	- Various 2-D deformations of the blocks.

#### Translational Block Motion

- Restricting motion of each block to pure translation.
- An NxN block $B$ in frame $k$ cenetered about the pixel $n = (n_1, n_2)$ is modeled as a globally shifted version of a small-size block in frame $k + l$ for an integer $l$.
- The blocks $B$ may be non overlapping or overlapping
	1. Case 1: Non-Overlapping blocks
		- The entire block is assigned a single motion vector.
		- Motion compensation can be achieved by copying gray-scale or color information from corresponding block in the frame $k+1$ on a pixel-by-pixel basis.
	1. Case 2: Overlapping blocks
		- Compute the average of motion vectors within overlapping regions or select one of the estimated motion vectors.
- Low overhead requirements to represent motion field since one motion vector is needed per block.
- Fails for zoon, rotational motion and under local deformations.
- Results in serious blocking artifacts for very low bitrate applications because boundaries of objects do not generally agree with block boundaries.

## Block Matching Method

- These algorithms differ in
	- Matching criteria (Maximum cross-correlation, Minimum Error)
	- Search Strategy (Three-step search, cross search)
	- Determination of block size (Hierarchical, Adaptive

### Matching Criteria

- Can be quantified according to various criteria like
	- Minimum Mean square error (MSE).
	- Minimum Mean Absolute Difference (MAD).
	- Maximum Matching Pel Count (MPC).
- In Minimum MSE Criterion,
	- $MSE(d_1, d_2) = \frac{1}{N_1 N_2} \sum_{(n_1, n_2) \in B} [s(n_1, n_2, k) - s(n_1 + d_1, n_2 + d_2, k + 1)]^2$
	- Where $B$ denotes $N_1 * N_2$ block for set of candidate motion vectors $(d_1, d_2)$.
- In minimum MAD Criterion,
	- $MAD(d_1, d_2) = \frac{1}{N_1 N_2} \sum_{(n_1, n_2) \in B} |s(n_1, n_2, k) - s(n_1 + d_1, n_2 + d_2, k + 1)|$
	- displacement estimate is given by $[\hat{d_1} \hat{d_2}]^T = \arg \min MAD(d_1, d_2)$
- In maximum matching pel count (MPC) Criterion,
	- $T(n_1, n_2; d_1, d_2) = 1 \text{if } |s(n_1, n_2, k) - s(n_1 + d_1, n_2 + d_2, k + 1)| \le t$
	- $t$ is predetermined threshold.
	- Number of matching pels within the block is given by
	- $MPC(d_1, d_2) = \sum_{(n_1, n_2) \in B} T(n_1, n_2 ; d_1, d_2)$ and $[\hat{d_1}, \hat{d_2}] = \arg \max MPC(d_1, d_2)$

### Search Strategy

#### Full search

- It evaluates the matching criterion for all values of $(d_1, d_2)$ at each pixel and is extremely time-consuming.

#### Three-Step Search

![](../Images/Pasted%20image%2020230519213317.png)

#### Cross Search

![](../Images/Pasted%20image%2020230519213331.png)

