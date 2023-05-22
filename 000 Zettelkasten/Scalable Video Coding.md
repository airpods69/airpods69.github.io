stags: #vsp 
- Challenge for video compression applications is to deliver multiple version of video sequence at different operational points like
	1. Different qualities
	2. Spatial resolutions
	3. Frame Rates.

## Simulcast Transmission

- Conventional video codecs can solve this by coding each stream independently.
- This method is called called **simulcast transmission**.
- The problem with simulcast is that three bitstrems contain significant redundancy since the same sequence is coded in each bitstream at different resolutions and qualities.
- Theoretically, a smaller transmission bandwidth should be utilized by exploiting the redundancy between the streams.
- ![](../Images/Pasted%20image%2020230519013136.png)

## Scalable Transmission
- **Scalable Video Coding(SVC)** attempts to deliver multiple coded versions of a sequence using a lower overall bit-rate compared to simulcast. 
- Does this by exploiting the redundancies between the versions.
	- By redundancies, we are talking about the correlation between different versions of the same sequence coded at different operating points.
- ![](../Images/Pasted%20image%2020230519013152.png)
- **Layers**: Single SVC encoder produces three coded bitstreams 
- **Base Layer**: stream decode-able using standard single layer decoder (eg H.264 decoder) to produce video sequence at lowest of available quality/resolution operating points.
- Rest of the layers are called enhancement layers and are coded as SVC bitstreams.
- To decode a sequence to a higher quality or resolution, SVC decoder decodes the base layer and one or more enhancement layers.

## Scalable Video Coding
- Quality scalability: Base layer is coded at low visual quality using high QP.
- Spatial scalability: Base layer is coded at low spatial resolution.
- Temporal scalability: Base layer is coded at low temporal resolution or low frame rate.
- Frequency scalability: Base layer is coded with low frequency component.
- ![](../Images/Pasted%20image%2020230519023017.png)

### Quality Scalability
- Defined as representing a video sequence with different accurracies in the color patterns.
- Typically obtained by quantizing the values with finer quantization step sizes.
	- Different quantization accuracies lead to different PSNRs between quantized video and original video. This is also the reason why Quality scalability is called **SNR scalability**.
- Decoding first layer(Base layer) provides low quality version of reconstructed image.
	- Obtained by applying **coarse quantizer** to original image or transform domain (Eg DCT)
- Decoding remaining layers results in increase of quality of reconstructured images up to highest quality.
- Second layer contains quantized difference between original and reconstructed from the first layer, using a quantizer that is finer.
- Similarly, fineness of quantizer increases with subsequent layers.
- Encoder with two level quality scalability.![](../Images/Pasted%20image%2020230519024534.png)
	 - Base level
		- Encoder operates in the same manner as typical block based hybrid coder.
	- Enhanced Level
		- Raw video frame (or motion compensation error frame) is DCT transformed and quantized at base level.
		- Base level DCT coefficients are reconstruced by inverse quantization.
		- Subtract base level DCT coefficients from original DCT coefficient.
		- Residual is quantized by a quantization parameter that is smaller than base level.
		- Quantized bits are coded by VLC.
		- Enhanced level uses smaller quantization parameter, it achieves better quality than base level.
- Decoder with two level quality scalability ![](../Images/Pasted%20image%2020230519025000.png)
	- Base level
		- Decoder operates like non scalable video decoder.
	- Enhanced layer
		- Both levels must be recieved, decoded by variable length decoding (VLD), and inversely quantized.
		- Base level DCT coefficient values are added to enhanced level DCT coefficient refinements.
		- Summed DCT coefficients are inversely DCT transformed resulting in enhanced level decoded video.
### Spatial Scalability
- Defined as representing the same video in different spatial resolutions or sizes.
- ![](../Images/Pasted%20image%2020230519103253.png)
- To produce this layered bit stream, Multi-Resolution decomposition of original image is first obtained.
- Lowest resolution image is coded directly to produce the first layer (ie base layer).
- To produce second layer, decoded image from first layer is interpolated to second lowest resolution and the difference between original image at that resolution and interpolated one is coded.
- Bitstreams for the next layers is produced in the same way.
- Two layer spatial scalable Encoder ![](../Images/Pasted%20image%2020230519104416.png)
	- Base Layer
		- Raw video is
			1. Down-sampled.
			2. DCT Transformed.
			3. Quantized.
			4. VLC Coded.
	- Enhanced Layer
		- Base layer operations except for VLC coding.
		- Base layer image is reconstructed by inverse quantization and inverse DCT.
		- Base layer image is spatially up-sampled.
		- Subtract upsampled base layer image from original image.
		- Residual is DCT-Transformed and quantized by a quantization parameter which is smaller than base layer.
		- Quantized bits are coded by VLC
		- Enhanced layers use smalled quantization parameter which helps to achive finer quality than base layer.
- Two layer spatial scalable decoder ![](../Images/Pasted%20image%2020230519110119.png)
	- Base Layer
		- Decoder operates exactly as non scalable video decoder. 
	- Enhanced Layer
		- Both layers must be received.
			- Layers are decoded by VLD.
			- Inversely quantized.
			- Inversely DCT-Transformed.
		- Base layer image is spatially upscaled
		- Upscaled base layer image is combined with enhanced layer refinements to form enhanced layer decoded video.

### Temporal Scalability
- Temporal scalability enabled different frame rates for different layers of contents. ![](../Images/Pasted%20image%2020230519110856.png)
- Typically temporal scalable video is encoded in such an efficient way
	- Making use of temporally up-sampled pictures from lower layer as prediction in higher layer.
- Difference between spatially scalable codec and temporal scalable coded:
	- Spatially scalable codec uses spatial down-sampling and spatial up-sampling.
	- Temporal scalable codec uses temporal down-sampling and temporal-upscaling.
- Simplest way to perform temporal down-sampling is by frame skipping.
- Temporal up-sampling is accomplished by frame copying.
- For motion compensation, a base layer frame will be predicted only from previous base layer frames while enhancement layer frame can be predicted using both base layer frames and enhancement frames.
- Eg
	- Temporal upscaling with ratio 1:2 can be realized by making a copy for each frame and transmit two frames to next stage.
	- In this case, base layer contains all even frames and enhancement layer contains odd frames.

### Frequency Scalability
- Represent a video frame in multiple layers by including different frequency components in each layer.
- Base layer will provide blurred version of image and addition of enhancement layers will yield increasingly sharper images.
- Decomposition can be accomplished via whole-frame transforms such as sub-band-decomposition or wavelet transforms, or via block based transforms such as block DCT.
- To implement in block based hybrid coders, we include the mode information, motion information as well as first few DCT coefficients of each macroblock.
- In MPEG-2 standard, this is data partitioning.