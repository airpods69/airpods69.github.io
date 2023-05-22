tags: #capstone #eeg 

There is a lot of CNN paper references in the related work section here, Nice.
- Two block CNN model? (Does not suffer from the problem of vanishing gradient so they used it).
- **Three Hybrid Models**

- #important Motor imagery signal is generated in sensory motor [[Cerebral Cortex]] area of the brain in response to imagery processes.

- [[Continuous Wavelet Transform]] is used to create two dimensional inputs for CNN.
	- Review(https://doi.org/10.1155/2014/730218) shows that considering frequency characteristics along with time characteristics of [[EEG]] signals can improve results.

**Dataset** used: BCI Competition IV dataset 2a public [[EEG]] dataset.

# Preprocessing

## Spatial Filtering
[[EEG]] recording -> the difference in electrical potentials between each electrodes and the reference electrode. But each electrode would be influenced by noises that reference electrode might contain. 
To enhance SNR -> [[Common Average Referencing]] is used. CAR filter removes common internal noises and external nosie sources which leaves only exclusive activity of [[EEG]] signal in channels.
Potential of each electrode after CAR:
$$x_i^{CAR}(t) = x_i(t) - \frac{1}{C} \sum_{j = 1}^{C} x_{j} (t)$$
$x_{i}^{CAR}$ is spatially filtered output of electrode, $x_{j}$ is difference in electrical potential between jth electrode and C is number of electrodes.

## Frequency Filtering
Motor Imagery Signals recorded over primary sensor motor [[Cerebral Cortex]] areas, it displays the changes in Mu Rhythm and Beta Rhythm. There two rhythms are included in [[Event Related Activities#Event Related Desynchronization]] and [[Event Related Activities#Event Related Synchronization]].
Mu Band and Beta Band frequencies are extracted using a fifth order zero-phase [[Butter-Worth Filter]].

## Data Augmentation
Cropped dataset without any overlapping.
Every 4 seconds of trail cropped into 5 segments using window of length 0.8 seconds sliding across data. -> 200 samples in each segment. -> Same label.

## Convolutional Neural Network (CNN)
After each convolutional layer, pooling layer is placed to subsample output and decrease input spatial size. -> minimized overfitting.

## Long-Short Term Memory (LSTM)
Used for checking what to memorize and what to discard in long term.

# Proposed Method

## First Proposed Hybrid Model
Trails of MI signals in each channel of each trail is converted into image representation using [[Morlet Mother Wavelet]].
Then [[Convolutional Neural Network]] me dalke train kardiya

![[A Transfer Learning-Based CNN And LSTM Hybrid Deep Learning Model To Classify Motor Imagery EEG Signals (2021) 2023-03-24 09.16.25.excalidraw]]

## Second Proposed Hybrid Model
Instead of our own Convolutional Network, ResNet ghusa do.