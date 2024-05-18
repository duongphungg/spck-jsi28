//DOM
const registerForm = document.querySelector('#register-form')
const fullnameInput = document.querySelector('#fullname')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const passwordConfirmInput = document.querySelector('#password-confirm')

//Handle-Register

const handleRegister = (event) => {
    event.preventDefault()
    //Get value input
    const fullname = fullnameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const passwordConfirm = passwordConfirmInput.value;

    //Check value
    if (!fullname || !email || !password || !passwordConfirm) {
        alert("Please fill all fields");
        return;
    }
    if (password != passwordConfirm) {
        alert("Passwords are not matched");
        return;
    }
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            db.collection("users")
                .add({
                    fullname,
                    email,
                    password
                })
                .then((docRef) => {
                    console.log("Document written with ID: ", docRef.id);
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });
                

        })
        .then(() => {
            alert("Create account succesfully");
            window.location.pathname = "/login.html"
        })
        .catch((err) => {
            const errorCode = err.code;
            const errorMess = err.message;

            alert(errorMess);
        })
}

registerForm.addEventListener('submit', function(event){
    handleRegister(event)
})


// firebase.auth().onAuthStateChanged