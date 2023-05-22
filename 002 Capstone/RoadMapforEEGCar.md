This is a road map for our capstone project. Monthly and weekly milestones are defined here. 
**Note**: This road map is only for making the prototype of the car by the end of the month of April. With the data collected from EMOTIV headset, most of the finetuning and novelty will done after ESTs.  

## Project Description
The aim of the project is to come up with a novel method for classification of EEG signals from EMOTIV headsets and execute the command on a raspberry pi car with minimum latency. This would require speedy computation of commands from eeg signals and sending to the car.

Design filter to remove eye blinks
or Design CNN to identify and supress
Real world chen chen vala thing - Bar which goes left and right according to what user is thinking and length represents how confident model is
 
# Roadmap

**Target to complete the base protocol by the end of this month**

Plan is to get two models working 
1. Signal to Image -> CNN classification
2. Signal -> CNN Classification
Weeks available? **Three** :D

## Week 1

### Electronics
- [ ] (Optional) Learn Rust.
- [ ] Base Model of car with LED lights instead of motors. (Commands manually sent from laptop in gaps of 2 seconds during which car will run execute previous instruction)

### Machine Learning

#### Varoo
- [ ] Figure out how to preprocess till generation of images from signals(Make a Pytorch Dataset to make it online).
	- [x] CAR Filter
	- [x] SFTF Filter/ButterWorth Filter?
	- [ ] Mother wavelet filter -> Generates Images.

#### Kritika
- [ ] Figure out how to preprocess till generation of images from signals with numpy.
- [ ] Learn Pytorch Datasets and DataLoader.


### UI
- [ ] Create a web app (or TUI jo maan kiya) for displaying the clue in queues.

okay now lets hope sab ka hogaya. Lets proceed onto week 2.

## Week 2

### Electronics
- [ ] Implement shared controlled in the car (using IR Sensors detect obstacles.(LEDs sab off when something is there) also No UV sensors available so sad)
- [ ] Break Time

### Machine Learning
Deep Learning Time
![[Pasted image 20230406161239.png | 200]]
#### Varoo
- [ ] Implement from paper he is referring to.
	- [ ] CNN from scratch. (and train on it ofcourse)
	- [ ] LSTM? (Maybe)
	- [ ] Transfer Learning -> Resnet
		- [ ] Just Resnet.
		- [ ] From Resnet, put the features into an LSTM.

#### Kritika
- [ ] Learn how to implement models in pytorch.
- [ ] Implement CNN from the paper she is referring to.

### UI
- [ ] Integrate it with EMOTIV software (buying it during this week would be best.)
- [ ] UI starts recording session and makes folder of recordings. Processing in the background to get data arrays out of it so that it can be processed and worked on separately. 

If time permits, fine tune the models since most of the tweaking would be at the side of signal processing instead of models. and make it work on EMOTIV data.

Alright, it seems like models are ready. 

## Week 3
### Electronics
#### Shobhit, Ketan, Ashutosh
- [ ] Add motors to the car and make it movable.
#### Varoo
- [ ] Create a bridge to send commands from model to the car.

### Machine Learning
- [ ] Read about other preprocessing methods and models shidhat se. 

### UI
- [ ] Make it look better.


# End
This should mark the end of the prototype and it should be working hopefully.
![[Pasted image 20230406162712.png | 300]]