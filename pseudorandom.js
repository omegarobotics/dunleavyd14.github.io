window.onload = function () {

	function shuffle (array) {
	    let counter = array.length;

	    // While there are elements in the array
	    while (counter > 0) {
	        // Pick a random index
	        let index = Math.floor(Math.random() * counter);

	        // Decrease counter by 1
	        counter--;

	        // And swap the last element with it
	        let temp = array[counter];
	        array[counter] = array[index];
	        array[index] = temp;
	    }

	    return array;
	}

	class rolls {
		 constructor () {
			this.deck = []
			for (let i = 1; i < 7; i++) {
				for (let j = 1; j < 7; j++) {
					this.deck.push(i+j);
				}
			}
			this.deck = shuffle(this.deck);
			
		}

		length () {
			return this.deck.length;
		}

		

	}

	document.getElementById("button").onclick = function () {
		if (deck.length()) {
			let a = deck.deck.pop();
			document.getElementById(a).innerHTML += block;
			document.getElementById("recent").innerHTML += a + ", ";  
			document.getElementById("tilnew").innerHTML = deck.length();

		} else {
			document.getElementById("recent").innerHTML = "";
			let nodelist = document.querySelectorAll("li span");
			for (let i = 0; i < nodelist.length; i++) {
				nodelist[i].innerHTML = '';
			}
			deck = new rolls();
			document.getElementById("tilnew").innerHTML = deck.length();
		}
		
	}

	var deck = new rolls();
	var block = "\u2B1B";
	console.log(block);

}
