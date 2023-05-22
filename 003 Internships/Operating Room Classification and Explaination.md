<center><h1> Classification of Operating Rooms </h1></center>
<h2> Problem Statement </h2>
The task was to look into publically available datasets of Operating Rooms(OR) and come up with a methodology to train the model(s) which can take a picture of the OR as an input and explain what kind of procedure are performed in that setup.

## Expected Route
The plan was/is to get a publicly available dataset of Operation Rooms which are labelled into classes of what kind of procedure it is set up for (Cardiac, Transplant, Dental etc). Then, use a SEER network from facebook to train and use the model for classification of what is going on. This is a vague explanation of how I planned to implement context awareness for the parent model. 

## Problem Faced
1. There aren't any publically available datasets for our particular task. [MVOR](https://paperswithcode.com/paper/mvor-a-multi-view-rgb-d-operating-room) dataset seems to be the only one which is available for Operation Rooms in terms of images/videos but it is for human pose detection. Through adequate cleaning and a heck tonne of data cleaning, we could make a sub-dataset from [MVOR](https://paperswithcode.com/paper/mvor-a-multi-view-rgb-d-operating-room) for operation rooms and use an unsupervised classification method to cluster the images into various kinds of procedures and label it manually.
	- Problem with this approach is that Data cleaning will remove majority of the dataset which won't be helpful.

## Solution for the Time Being
- Since the dataset for our problem statement is not available publicly, the time can be spent in coming up with the models architecture and preprocessing tasks on a different dataset ([Places dataset](https://ieeexplore.ieee.org/document/7968387) would be a similar dataset to our requirements).

## Methodology 
Some googling and reading papers led me to [VISSL](https://github.com/facebookresearch/vissl) by facebook research. The special characteristic of this model is that it is pretrained on uncurated images without supervision. This also could be seen as warming up the model for training on the original dataset. Doing this helps the model be more Robust and Fair (Seems like a win to me because in our supposedly existing dataset for ORs, some procedures would be more common like dental than others like cardiac related). From the abstract of the [paper](https://arxiv.org/pdf/2202.08360v2.pdf)

`Applied to ImageNet, this leads to object centric features that perform on par with supervised features on most object-centric downstream tasks. In this work, we question if using this ability, we can learn any salient and more representative information present in diverse unbounded set of images from across the globe. To do so, we train models on billions of random images without any data pre-processing or prior assumptions about what we want the model to learn. We scale our model size to dense 10 billion parameters to avoid underfitting on a large data size. We extensively study and validate our model performance on over 50 benchmarks including fairness, robustness to distribution shift, geographical diversity, fine grained recognition, image copy detection and many image classification datasets. The resulting model, not only captures well semantic information, it also captures information about artistic style and learns salient information such as geolocations and multilingual word embeddings based on visual content only. More importantly, we discover that such model is more robust, more fair, less harmful and less biased than supervised models or models trained on objectcentric datasets such as ImageNet.`

TLDR: This pretraining helps capture well semantic information, and other salient information from visual content only. Model also turns out to be more robust, fair and less biased. (Perfect).  
Also this model is a self supervised model, so having a labelled OR dataset isn't on the top of our priority list. This approach to classify dataset can be looked as a *Classification with CNN*. I was thinking of adding Image Segmentation to identify tools but that would be a long short and instead we can use Yolo with a dataset for surgical tools(https://www.kaggle.com/datasets/dilavado/labeled-surgical-tools).
Since Places dataset and ImageNet datasets are very big, the model was scaled up to 10B parameters by the original researchers. Our dataset would be relatively very small and lower number of parameters will get the job done.  


Focus general surgery and find med tech products
Scape images from internet for med tech and label vahi se from internet.
Context awareness could mean different things.