const form = document.querySelector(".login-form");

function submitFunc(evnt) {
    
    evnt.preventDefault();
    
    const email = evnt.target.elements.email.value;
    const password = evnt.target.elements.password.value;
    
    if (email === "" || password === "") {
        alert("All form fields must be filled in");
    }
    
    const loginData = {};
    loginData.email = email.trim();
    loginData.password = password.trim();
    
    console.log(loginData);
    
    evnt.target.reset();
}

form.addEventListener("submit", submitFunc);
