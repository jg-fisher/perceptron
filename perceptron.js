// Perceptron
module.exports = class Perceptron {

	constructor (x_train, y_train, epochs=1000, learn_rate= 0.1) {
	
		// used to generate percent accuracy
		this.accuracy = 0
		this.samples = 0
		this.x_train = x_train
		this.y_train = y_train

		this.epochs = epochs
		this.learn_rate = learn_rate

		this.bias = 0
		this.weights = new Array(x_train[0].length)
		
		// initialize random weights
		for ( let n = 0; n < x_train[0].length; n++ ) {
                        this.weights[n] = this.random()
                }
	}
	
	// returns percent accuracy 
	current_accuracy () {
		return this.accuracy/this.samples
	}

	// generate random float between -1 and 1 (for generating weights)
	random () {
		return Math.random() * 2 - 1
	}

	// activation function
	activation (n) {
		return n < 0 ? 0 : 1
	}

	// y-hat output given an input tensor 
	predict (input) {
		let total = this.bias
		this.weights.forEach((w, index) => { total += input[index] * w }) // multiply each weight by each input vector value
		return this.activation(total)
	}

	// training perceptron on data
	fit () {
		// epochs loop
		for ( let e = 0; e < this.epochs; e++) { 

			// for each training sample
			for ( let i = 0; i < this.x_train.length; i++ ) { 

				// get prediction
				let prediction = this.predict(this.x_train[i]) 
				console.log('Expected: ' + this.y_train[i] + '    Model Output: ' + prediction) 
				
				// update accuracy measures
				this.y_train[i] === prediction ? this.accuracy += 1 : this.accuracy -= 1
				this.samples++

				// calculate loss
				let loss = this.y_train[i] - prediction

				// update all weights
				for ( let w = 0; w < this.weights.length; w++ ) { 
					this.weights[w] += loss * this.x_train[i][w] * this.learn_rate
				}
				
				// update bias
				this.bias += loss * this.learn_rate
			}
			
			// accuracy post epoch
			console.log(this.current_accuracy())
		}
	}
}

