tags: #research_paper #eeg #edge_computation 

paper: https://iopscience.iop.org/article/10.1088/1741-2552/aace8c
Egde Computation EEGNet: https://ieeexplore.ieee.org/abstract/document/9137134

- Compact Neural Network for EEG based BCI.
- "We introduce the use of [depthwise and separable convolutions](https://towardsdatascience.com/a-basic-introduction-to-separable-convolutions-b99ec3102728) to construct an EEG-specific model which encapsulates well-known EEG feature extraction concepts for BCI".
- "We fit the model using the Adam optimizer minimizing the categorical cross-entropy loss function".
- Model Architecture 
![[Pasted image 20230421165752 1.png]]

- Within Subject Classification Performance with BCI Dataset Competition IV 2a (Same as what we are using)
![[Pasted image 20230421170121 1.png]]

- Cross Subject Subject Classification Performance with BCI Dataset Competition IV 2a (Every Model fails at it)(Same as what we are using)

Overall visualization of the EEGNet architecture. Lines denote the convolutional kernel connectivity between inputs and outputs (called _feature maps_). The network starts with a temporal convolution (second column) to learn frequency filters, then uses a depthwise convolution (middle column), connected to each feature map individually, to learn frequency-specific spatial filters. The separable convolution (fourth column) is a combination of a depthwise convolution, which learns a temporal summary for each feature map individually, followed by a pointwise convolution, which learns how to optimally mix the feature maps together. Full details about the network architecture can be found in table 2.
![[Pasted image 20230421170200 1.png]]
