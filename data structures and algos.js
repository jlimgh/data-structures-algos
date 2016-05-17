//////// STACK CREATION //////

function Stack(){
	var items = [];

	this.push = function(elemment) {
		items.push(element);
	};

	this.pop = function() {
		return items.pop();
	};

	this.peek = function() {
		return items[items.length-1];
	};

	this.isEmpty = function() {
		return items.lengh === 0;
	};

	this.size = function() {
		return items.length;
	};

	this.clear = function() {
		items = [];
	};

	this.print = function() {
		console.log(items.toString());
	}
};

//////////// STACK - DECIMAL  TO BINARY


function divideBy2(decNumber) {

	var remStack = new Stack(),
		rem,
		binaryString = '';

	while (decNumber > 0) {
		rem = Math.floor(decNumber % 2);
		remStack.push(rem);
		decNumber = Math.floor(decNumber / 2);
	}

	while (!remStack.isEmpty()) {
		binaryString += remStack.pop().toString();
	}

	return binaryString;

}


/////////// STACK - DECIMAL TO HEXADECIMAL


function baseConverter(decNumber, base) {

	var remStack = new Stack(),
		rem,
		baseString = '';
		digits = '0123456789ABCDEF';

	while(decNumber > 0) {
		rem = Math.floor(decNumber % base);
		remStack.push(rem);
		decNumber = Math.floor(decNumber / base);
	}

	while(!remStack.isEmpty()) {
		baseString += digits[remStack.pop()];
	}

	return baseString;
}



////////////////QUEUES CREATION //////////

function Queue() {

	var items = [];

	this.enqueue = function(element) {
		items.push(element);
	};

	this.dequeue = function() {
		return items.shift();
	};

	this.front = function() {
		return items[0];
	};

	this.isEmpty = function() {
		return items.length === 0;
	};

	this.clear = function() {
		items = [];
	};

	this.size = function() {
		return items.length;
	};

	this.print = function() {
		console.log(items.toString());
	};
};


///////////////QUEUE - PRIORITY QUEUE
///-- ex. printing queue

function PriorityQueue() {
	
	var items = [];

	function QueueElement (element, priority) {
		this.element = element;
		this.priority = priority;
	}

	this.enqueue = function(element, priority) {
		var queueElement = new QueueElement(element, priority);

		if (this.isEmpty()) {
			items.push(queueElement);
		} else {
			var added = false;
			for (var i=0; i<items.length; i++) {
				if (queueElement.priority < items[i].priority) {
					items.splice(i,0,queueElement);
					added = true;
					break;
				}
			}
		}
//algo only inserts element into priority if it is less than item[i]
//added will stay false if priority value is bigger than item[i]
		if (!added) {
			items.push(queueElement);
		}
	}
};


///////////////QUEUE - CIRCULAR QUEUE
//////////ex. hot potato, 

function hotPotato() {
	
}
















