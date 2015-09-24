function match() {
	var pVal = document.getElementById("rPassword").value;
	var cpVal = document.getElementById("confirm-password").value;
	if ((pVal != "") && (cpVal != "")) {
		if (cpVal === pVal) {
			alert("Match!");
		} else {
			alert("password: " +pVal+" != confirm password: "+cpVal+".\n Passwords do not match!");
			document.getElementById("confirm-password").value = "";
		}
	}
}