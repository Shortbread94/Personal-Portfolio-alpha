//button type="button" id="submit-button" class="button">Submit</button>//

const button = document.querySelector("#submit-button");

button.innerHTML = "HELLO";

button.onclick = function() {
    alert("Thank you for submission!");
};
