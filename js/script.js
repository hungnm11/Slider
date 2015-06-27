function submitAnswer() {
	var total = 5;
	var score = 0;

	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;


	for (var i = 1; i <= total; i++) {
		if(eval("q"+i) == null || eval("q"+i) == "") {
			alert("You missed question "+i);
			return false;
		}
	}

	var result = ['b','a','d','b','d'];

	for (var i = 1; i <= total; i++) {
		if (eval("q"+i) == result[i-1]) {
			score ++;
		}
	}

	alert("You scored "+ score + " out of "+ total);

}