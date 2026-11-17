const username = document.getElementById("username");
const start = document.getElementById("start");
const err = document.getElementById("merr");

start.addEventListener("click", () =>{
    let name = username.value;
    name = name.trim();
    if (!validate_username(name)){
	err.textContent = "Invalid Username";
	return;
    }
    console.log(name);
});

function validate_username(username){
    if (username.length < 3 || username.length > 20){
	return false;
    }
    const valid_chars = /^[a-zA-Z][a-zA-Z0-9._]*$/;
    if (!valid_chars.test(username)) {
	return false;
    }
}
