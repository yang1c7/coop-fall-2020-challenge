class EventSourcer {
	constructor() {
		this.value = 0;
	}
  
	function add(value,num){
 
		return value + num;
  
	}

	function ubtract(value,num){
 
		return value - num;
	
	}

	function undo(){

		if (this.current >= 0) {
			value = this.stack[this.current];
			value.perform.call(this.self, false, value.data);
			this.current--;
		} else {
			throw new Error("Already at oldest change");
		}
	}
	
	function redo() {

		value = this.stack[this.current + 1];
		if (value) {
			value.perform.call(this.self, true, value.data);
			this.current++;
		} else {
			throw new Error("Already at newest change");
		}
	}

	function bulk_undo(num) {

		if (this.current >= 0) {
			value = this.stack[this.current];
			value.perform.call(this.self, false, value.data);
			this.current -= num;
		} else {
			throw new Error("Already at oldest change");
		}	
	}

	function bulk_redo(num) {
  
		value = this.stack[this.current + num];
		if (value) {
			value.perform.call(this.self, true, value.data);
			this.current += num;
		} else {
			throw new Error("Already at newest change");
		}  
	}
}

// ----- Do not modify anything below this line (needed for test suite) ------
module.exports = EventSourcer;