# Experiment 1

## 1. Law of Large Numbers
### Code:
```python
from random import randint
n = 10000000
# Normally distrbuted data from rolling six sided dice.
arr = [randint(1, 6) for _ in range(n)]
print(sum(arr) / n)
```
### Output:
![[Pasted image 20230425000041.png]]

## 2. Financial Statement Analysis
### Code:
```python
revenue = [14574.49, 7606.46, 8611.41, 9175.41, 8058.65, 8105.44, 11496.28, 9766.09, 10305.32, 14379.96, 10713.97, 15433.50]
expenses = [12051.82, 5695.07, 12319.20, 12089.72, 8658.57, 840.20, 3285.73, 5821.12, 6976.93, 16618.61, 10054.37, 3803.96]

profits = [revenue[i] - expenses[i] for i in range(len(revenue))]
print(f"Profits for each month: {profits}")

profits_after_tax = [revenue[i] * 0.7 - expenses[i] for i in range(len(revenue))]
print(f"Profits for each month after revenue: {profits_after_tax}")

mean = sum(profits) / len(revenue)
good_months = [True if profits_after_tax[i] > mean else False for i in range(len(profits_after_tax))]
print(f"Good months: {good_months}")

bad_months = [True if profits_after_tax[i] < mean else False for i in range(len(profits_after_tax))]
print(f"Bad months: {bad_months}")

worst_month = profits_after_tax.index(min(profits_after_tax))
print(f"Worst Month: {worst_month}")

best_month = profits_after_tax.index(max(profits_after_tax))
print(f"Best Month: {best_month}")
```
### Output:
```
Profits for each month: [2522.67, 1911.3900000000003, -3707.790000000001, -2914.3099999999995, -599.9200000000001, 7265.24, 8210.550000000001, 3944.9700000000003, 3328.3899999999994, -2238.6500000000015, 659.5999999999985, 11629.54]
Profits for each month after revenue: [-1849.6769999999997, -370.5479999999998, -6291.213000000002, -5666.933, -3017.5150000000003, 4833.607999999999, 4761.665999999999, 1015.143, 236.79399999999896, -6552.638000000003, -2554.591000000002, 6999.489999999999]
Good months: [False, False, False, False, False, True, True, False, False, False, False, True]
Bad months: [True, True, True, True, True, False, False, True, True, True, True, False]
Worst Month: 9
Best Month: 11
```


# Experiment 2

## 1. Gradient Descent
```python
import numpy as np
import matplotlib.pyplot as plt

def f(x):
    return 3* x**2 - 3 * x + 4

def deriv(x):
    return 6 * x - 3

x = np.linspace(-2, 2, 2001)

plt.plot(x, f(x), x, deriv(x))
plt.xlim(x[[0, -1]])
plt.grid()
plt.xlabel('x')
plt.ylabel('f(x)')
plt.legend(['y', 'dy'])
plt.show()

localmin = np.random.choice(x, 1)
print(localmin)

learning_rate = 0.01
training_epochs = 100

for i in range(training_epochs):
    grad = deriv(localmin)
    localmin -= learning_rate * grad

print(f"Local Min is {localmin}")

plt.plot(x, f(x), x, deriv(x))
plt.plot(localmin, deriv(localmin), 'ro')
plt.plot(localmin, f(localmin), 'ro')

plt.xlim(x[[0, -1]])
plt.grid()
plt.xlabel('x')
plt.ylabel('f(x)')
plt.legend(['y', 'dy', 'local minq'])
plt.show()
```
### Output:
![[Pasted image 20230425002648.png]]
## 2. ANN
### Code:
```python
import numpy as np
import torch
import torch.nn as nn
import matplotlib.pyplot as plt

N = 30 
x = torch.randn(N, 1)
y = x + torch.randn(N, 1) / 2

plt.plot(x, y, 's')
plt.show()

ANN = nn.Sequential(
    nn.Linear(1, 1),
    nn.ReLU(),
    nn.Linear(1, 1)
)

print(ANN)

predictions = ANN(x)
testloss = (predictions - y).pow(2).mean()

plt.plot(testloss.detach(), 'o', markerfacecolor = 'w', linewidth = 0.1)
plt.plot(x, predictions.detach(), 'rs', label = 'Predictions')
plt.legend()
plt.show()
```
### Output:
![[Pasted image 20230425003300.png]]
# Experiment 3
### Code:
```python
import torch
import torch.nn as nn
import matplotlib.pyplot as plt

import seaborn as sns
iris = sns.load_dataset('iris')

print(iris.head())

sns.pairplot(iris, hue = 'species')
plt.show()

data = torch.tensor(iris[iris.columns[0:4]].values).float()
labels = torch.zeros(len(data), dtype = torch.long)
labels[iris.species == 'versicolor'] = 1
labels[iris.species == 'virginica'] = 2

print(labels)

model = nn.Sequential(
    nn.Linear(4, 64),
    nn.ReLU(),
    nn.Linear(64, 64),
    nn.ReLU(),
    nn.Linear(64, 3)
)

loss_fun = nn.CrossEntropyLoss()
optimizer = torch.optim.SGD(model.parameters(), lr = 0.01)

epochs = 1000
losses = torch.zeros(epochs)
ongoingAcc = []

for epoch in range(epochs):
    y_pred = model(data)
    loss = loss_fun(y_pred, labels)
    losses[epoch] = loss

    optimizer.zero_grad()
    loss.backward()
    optimizer.step()

    matches = torch.argmax(y_pred, axis = 1) == labels
    matches_numeric = matches.float()
    acc = 100 * torch.mean(matches_numeric)
    ongoingAcc.append(acc)

predictions = model(data)
predLabels = torch.argmax(predictions, axis = 1)
total = 100 * torch.mean((predLabels == labels).float())

print(torch.argmax(y_pred, axis = 1))
```