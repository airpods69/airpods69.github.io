### May 03, 2022

So the code works but oh boy the loss is so high.

```python
class EEGNet(nn.Module):
    def __init__(self):
        super(EEGNet, self).__init__()
        self.T = 120
        
        # Layer 1
        self.conv1 = nn.Conv2d(1, 16, (1, 22), padding = 0)
        self.batchnorm1 = nn.BatchNorm2d(16, False)
        
        # Layer 2
        self.padding1 = nn.ZeroPad2d((16, 17, 0, 1))
        self.conv2 = nn.Conv2d(1, 4, (2, 11))
        self.batchnorm2 = nn.BatchNorm2d(4, False)
        self.pooling2 = nn.MaxPool2d(2, 4)
        
        # Layer 3
        self.padding2 = nn.ZeroPad2d((2, 1, 4, 3))
        self.conv3 = nn.Conv2d(4, 4, (8, 5))
        self.batchnorm3 = nn.BatchNorm2d(4, False)
        self.pooling3 = nn.MaxPool2d((2, 4))
        
        # FC Layer
        # NOTE: This dimension will depend on the number of timestamps per sample in your data.
        # I have 120 timepoints. 
        self.fc1 = nn.Linear(1088, 1)
        

    def forward(self, x):
        # Layer 1
        x = F.elu(self.conv1(x))
        x = self.batchnorm1(x)
        x = F.dropout(x, 0.25)
        x = x.permute(0, 3, 1, 2)
        
        # Layer 2
        x = self.padding1(x)
        x = F.elu(self.conv2(x))
        x = self.batchnorm2(x)
        x = F.dropout(x, 0.25)
        x = self.pooling2(x)
        
        # # Layer 3
        # x = self.padding2(x)
        # x = F.elu(self.conv3(x))
        # x = self.batchnorm3(x)
        # x = F.dropout(x, 0.25)
        # x = self.pooling3(x)
        
        # FC Layer
        # print(x.shape)
        x = x.reshape(-1, 1088)
        x = F.sigmoid(self.fc1(x)).round()
        return x

model = EEGNet()
```

Model is upar which was copied from some older model. (and his also wasn't giving a good accuracy or lower loss and I still tried this xD)
Losses look crazy good XD
![[Pasted image 20230503161352.png]]

Next thing I am thinking of doing is to make my own model.

### May 04, 2022
![[Pasted image 20230505010631.png]]
Well great now the loss is in a really huge negative value and we don't even have it stably going down. UGH gotta fix it.
I feel like maybe the labels are wrong? but I can't really say for sure because the model I have created sure is a piece of art. 
### May 05, 2022
![[Pasted image 20230505110505.png]]
We got the Loss to a normal value now, but still the mystery of why it starts from a lower value and increases to a higher value remains.
Had to lower the learning rate for this one.
also learnt that first conv layer does temporal convolution and then a spatial convolution happens.


![[Pasted image 20230505112710.png]]
IT WAS THE FUCKING GRAD,FORGOT TO ZERO IT 

![[Pasted image 20230505115929.png]]
Hmmmm Accuracy aint that good now is it O_O