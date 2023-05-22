- In the process of scanning, signal $f(t)$ captures time varying intensity only along the scan lines. 

- Also contains timing information and blanking signals needed to align the image properly.

## Types of Scanning
- Types of Scanning:
	1. **Progressive**
	2. **Interlaced**

### Progressive
- In progressive scanning, the complete frame is scanned at every $\Delta t$ seconds.
- The computer industry uses progressive scanning at $\Delta t = 1/72$ seconds on high resolution monitors.

### Interlaced
- Odd numbered and even numbered lines, also known as odd field and even field are scanned in turn.
- TV industry uses 2:1 interlaced scanning.
- Scan from B to C is **horizontal scan** and from D to E or F to A is **vertical scan**. 
![](../Images/Pasted%20image%2020230315100743.png)

- Blanking pulses (black) are added during retracing intervals to blank out retracing lines on receiving CRT.
- **Sync pulses** are used for synchronizing the receiver's horizontal and vertical sweep circuits. These are added on top of blanking pulses. These also ensure that the picture starts from the top left corner of receiving CRT.
