- It is the term used to define a method for reducing data used to encode digital video content.  This reduction in data benefits in many ways such as smaller storage, requirements and lower transmission bandwidth requirements for clip of video content.
- We need video compression for
	- Lower communication cost.
	- Reduce data required by uncompressed video data.
	- Reduce bandwidth for transmission through network.
![](../Images/Pasted%20image%2020230519113040.png)

- Video compression can be done by four types of redundancies
	1. Perceptual Redundancies.
		- Refers to the persistence of human eye. Parts of the digital picture that the human eye cannot perceive are selected and removed. From perceptual point of view, all video data is not equally significant.
		- Can be done using quantization since HVS is more sensitive to low frequency information than high frequency information.
	1. Temporal Redundancies.
		- HVS has persistency, which helps in reducing frames since both videos will look similar (Elaborate karliyo with 60 to 30 fps)
		- Removed by inter prediction: Adjacent pictures are used as reference to predict current block of frame.
	1. Spatial Redundancies.
		- Present in areas of the images where pixel values vary by small amounts.
		- Removed by
			- Intra prediction: blocks are predicted using neighbouring pixels reconstructed from same picture. Predicted block is subtracted from current block prior to encoding.
			- Block Transforms: Convert spatial variations within a block to frequency variations without changing data. Used for energy compaction in block (DCT is used). DCT -> Real and orthogonal. DCT algo is fast and recursive.
	1. Statistical Redundancies.
		- Includes binary information which have binary codes.
		- Transform coefficients, motion vectors and other data to be encoded using binary codecs at last level of compression.
		- Simplest way is to code using fixed length code (16 bit)
			- Better to use less number of bits.

## Lossless and Lossy Video Compression

- Lossless compression: Every bit of data originally in a file remains after it is uncompressed and all information is resorted. Reversible compression.
- Lossy Compression: Reduces a file by permanently eliminating certain information. Irreversible compression.

| Key              | Lossy Compression                                                      | Lossless Compression                                                       |
| ---------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Data Elimination | Gets rid of unnoticeable bytes                                         | Retains unnoticeable bytes                                                 |
| Restoration      | Original file cannot be restored                                       | Original form of file exists                                               |
| Quality          | Leads to data and quality loss                                         | No quality degradation                                                     |
| Size             | Reduces the size of a file to a large extent                           | Reduces size but less compared to Lossy                                    |
| Algorithms used  | Transform coding, DCT, Discrete Wavelet Transform, Fractal Compression | Run length encoding, Lempel Ziv Welch, Huffman coding, Arithmetic encoding |
| Uses             | Used to compress audio, video and images                               | Used to compress files with texts                                          |
| Capacity         | Data holding capacity is significant                                   | Low data holding capacity                                                  |

## Inter Frame and Intra Frame Compression

- Intra frame referes to the compression techniques that are performed relative to information that is contained only within the current frame and is concerned only with spatial redundancy that exists in each frame.
- Inter frame is a frame in a video compression stream which is expressed in terms of one or more neighboring frames.It is concerned for temporal redundancy between neighboring frames allowing to achieve higher compressing rates.


| Intra Frame Compression                                  | Inter Frame Compression                              |
| -------------------------------------------------------- | ---------------------------------------------------- |
| Data Reduction is within frames                          | Data Reduction is between the frames                 |
| Exploits redundancy within successive frames             | Exploits redundancy within frames                    |
| Spatial redundancy where image transition is block based | Temporal redundancy where image transition is abrupt |
| Less processing time required (Single frame)             | More processing time required (Multiple Frames)      |
| MPJPEG-JPEGs, ALL-I-Founded                              | H264A, MPEG4, MPEG2                                  |

## Video Compression Standards

### Motion JPEG

- Also known as MJPEG
- Gives flexibility for quality as well as for compression ratio.
- Disadvantages of MJPEG -> uses only a series of still pictures so makes no use of video compression techniques.
- Gives slightly lower compression ratio for video sequences.

### MPEG-1

- First public standard of MPEG committee
- Includes techniques for efficient coding of a video sequence.
- Standard focuses on bit stream
- Used for storing data on CDs.
- Compression ratio is important than picture quality.
- Only new parts of video sequence is identified and coded. Done while transmission of video sequence.
- Process has reduced bandwidth of signal to large extent.

### MPEG-2

- It is the Generic Coding of Moving Pictures and Associated Audio.
- Used for TV transmission and other applications.
- Very high picture quality.
- Compatible extension of MPEG-1 standard that means it can decode videos encoded using MPEG-1.
- Combining of multiple audio, video and private data streams into a single multiplexed stream.
- Supports wide range of applications (Broadcast, telecommunication and storage). Using this DVD movies are compressed
- Better video quality at same bitrate

### MPEG-4

- Main feature
	- Gives support of lower bandwidth application as well as extremely high quality and unlimited bandwidth application.
- Not only related to video coding but involves full encoding only key frames where minimal information is sent between every four to five frames.
- Compression ratio: `100:1`
- Standard encoder is very complex and computationally expensive for motion estimation.
- Decoder is compartively simpler and done using low cost decoder chips.
- Basic idea is to detect motion from frame to frame in temporal directions and use DCT to organize redundancies.
	- DCT is done on 8\*8 block.
	- Motion prediction is done on luminance(Y) of 16\*16 blocks.
	- DCT coefficients end up with zero.
- Quantization can change for every macro block. DCT coefficients, motion vectors and quantization parameters are Huffman coded using fixed tables.

### H.261

- Allows for use with communication channels that are multiples of 64 kbps. Also called P x 64.
- Coding is based on DCT.
- Main elements of H.261 source coder are:
	- Prediction.
	- Block Transformation.
	- Quantization.
	- Entropy Coding.
- Main elements of H.261 decoder are:
	- Prediction.
	- Motion Compensation.
	- Loop Filtering.
- Pictures are coded as luminance and two color difference components (Y, Cb and Cr)
- Large improvement in video quality but requires extra processing power.
- H.261 controller performs compression, the decisions are made on a block by block basis and not by picture by picture basis.

### H.263

- Structure wise similar to H.261 and is backwards compatible.
- Gives superior picture quality than H.261 at bandwidth under 1000 kbps.
- Half pixel technology (Greatly improved images)
- Half pixel technology gave better matches for low resolution images.
- Features of H.263:
	- 3-D variable length coding of DCT coefficients
	- Median Motion.
	- Vector Prediction.
	- Bidirectional Prediction.
	- Arithmetic Entropy Coding.

### H.264

- H.264 is the name used by ITU-T
- MPEG-4 Part 10/AVc is the name used by ISO/IEC.
- Standard reduced bitsize of I-frame (Intra) and maintains a high quality of smaller box of pixels.
- Done by trying to find matching pixels among the earlier encoded pixels that border a new 4x4 pixel block to be intra coded.
- Reusage of already encoded pixels, bit size can be drastically reduced.
- Broadly available in
	- Network Cameras.
	- Video Encoders.
	- Video Management Software.
	- System designers and integrators.

### Comparison

![](../Images/Pasted%20image%2020230519144000.png)