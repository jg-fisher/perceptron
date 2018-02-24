# perceptronJS

Library for a perceptron model built with Javascript.

<img src='https://upload.wikimedia.org/wikipedia/commons/8/8c/Perceptron_moj.png'></img>

Import library

    const perceptron = require('./perceptron')
    
    
Intialize the model (x = inputs, y = targets)

    let x = [[1, 1, 1], [0, 0, 0], [1, 0, 1]]
    let y = [1, 0, 1]
    
    let p = new perceptron(x, y, epochs=10, learn_rate=.1)
    
Train model
   
    p.fit()

