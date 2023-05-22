- h.264 Advanced Video Coding is an industry standard for video coding.
- It is a method and format for video compression, The process of converting digital video into a format that takes up less capacity when it is stored or transmitted. 
- Standardizing video compression makes it possible for products from different manufacturers to inter operate.
- Encoder converts video into compressed format and decoder converts compressed video back into an uncompressed format.
- ![](../Images/Pasted%20image%2020230519231112.png)
- H.264 video encoder carries out prediction, transforming and encoding processes to proces compressed H.264 bitstream.
- H.264 decoder carries out the complementary process of decoding, inverse transform and reconstruction to produce a encoded video sequence.

## Working of H.264 Codec
- Frame or field to be coded is processed by an H.264 compatible video encoder. 
- Coding and sending the frame as a part of the coded bitstream or coded file, the encoder reconstructs the frame (creates a copy of decoded frame that will be produced by decoder).
- Reconstructed copy may be stored in a coded picture buffer, CPB and used during encoding of further frames. 
- Decoder recieves the coded bitstream and decodes frame for display or further processing. 
- At the same time, decoder may store a copy of frame in a decoded picture buffer, DPB to be used during decoding of further frames. 

### Working of Encoder
- Data processed in units of macroblock corresponding to 16 x 16 displayed pixels.
- Prediction macroblock is generated and subtracted from current macroblock to form residual macroblock. This is transformed quantized and encoded. 
- In parallel, quantized data are rescaled and inverse transformed and added to prediction macroblock to reconstruct a coded version of the frame which is stored for later predictions. 
- ![](../Images/Pasted%20image%2020230519234406.png)

### Working of Decoder
- Macroblock is decoded, rescaled and inverse transformed to form a decoded residual macroblock. 
- Decoder generates the same prediction that was created at the encoder and adds this to the residual to produce a decoded macroblock.

### Encoder Process: Prediction
- Intra prediction uses 16 x 16 and 4 x 4 block sizes to predict the macroblock from surrounding, previously coded pixels within the same frame.
- Values of previously coded neighboring pixels are extrapolated to form a prediction of the current macroblock.
- A 16 x 16 prediction block is formed which is an approximation of the original macroblock. This macroblock is subtracted from the original macroblock producing a residual block (also containing 16 x 16 samples).

- Inter prediction uses a range of blocks sizes from 16 x 16 down to 4 x 4 to predict pixels in the current frame from similar regions in previously coded frames. 
- Previously coded frames may occur before or after the current frame in display order. 

### Encoder Process: Transform and Quantization
- Block of residual samples is transformed using a 4 x 4 or 8 x 8 integer transform (DCT).
- Transform outputs a set of coefficients, each of which weighting value for a standard basis pattern.
- When combined, the weighted basis patterns recreate the block of residual samples.
- Output of transform, a block of transform coefficients is quantized, ie each coefficient is divided by an integer value.
- Quantization reduces the precision of the transform coefficients according to quantization parameter (QP).

### Bitstream encoding
- Video coding process produces a number of values that must be encoded to form compressed bitstream.
- Contains data after it got through all of the transformations.

### Decoder Process
- Decoder receives compressed H.264 bitstream, decodes each of the syntax elements and extracts the information (quantized transform coefficients, prediction information etc.)
- Information is used to reverse the coding process and recreate sequence of video images.

#### Rescaling and Inverse Transform
- Quantized transform coefficients are rescaled and each coefficient is multiplied by an integer value to restore its original state.
- Quantized coefficients are multiplied by a QP or step size. The rescaled coefficients are similar but not identical to originals (Indication of Lossy compression). Not fully reversible process.
- The difference or loss is due to forward quantization process. A larger QS tends to produce a larger difference between original and reconstructed blocks.
- Information removed during quantization cannot be restored during rescaling.

- Inverse transform combines the standard basis patterns, weighted by the rescaled coefficients to recreate each block of residual data. 
- These blocks are combined together to form a residual macroblock.

#### Reconstruction
- For each macroblock, decoder forms an identical prediction to the one created b encoder using inter prediction from previously decoded frames or intra prediction from previously decoded samples in the current frame. 
- Decoder adds the prediction to decoded residual to reconstruct a decoded macroblock which can then be displayed as part of a video frame. 
- ![](../Images/Pasted%20image%2020230520010438.png)

## Loop Filter
- Filter applied to ever decoded macroblock to reduce **blocking distortion**.
- Deblocking filter is applied after inverse transform in encoder before reconstruction and storing MB and in decoder b efore reconstruction and displaying the MB.
- Filter smooths block edges, improving the appearance of the decoded frames. 
- Filtered images is used for motion compensation of future frames and this improves compression performance because filtered images is more faithful reproduction of original frame than a blocky, unfiltered image.
- Filtering is applied to vertical or horizontal edges of 4 x 4 blocks in a macroblock excluding edges on slice boundaries
- Strength of filter (Amount of filtering) depends on the current quantizer parameter QP, coding modes of neighboring blocks and gradient of image samples across the boundary.
- Filter is stronger at places where there is likely to be significant blocking distortion such as boundary of an intra coded macroblock or boundary between blocks that contain coded coefficients.
- ![](../Images/Pasted%20image%2020230520012222.png)

## H.264 vs H.265
| Feature                 | H.264/AVC                          | H.265/HEVC                                  |
| ----------------------- | ---------------------------------- | ------------------------------------------- |
| Compression model       | Hybrid Spatial/Temporal Prediction | Enhanced Hybrid Spatial/Temporal Prediction |
| Frame Size (Max)        | 4K / 2160p                         | 8K / 4320p                                  |
| Sweet spot Video Format | 1080p30                            | 2160p60                                     |
| Frame Rate              | 59.94 fps                          | 300 fps                                     |
| Interlaced Modes        | Yes                                | Reduced                                     |
| Target Bandwidth        | 50% of MPEG-2                      | 50% of H.264/AVC                                            |
