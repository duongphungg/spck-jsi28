    //DOM
    const loginForm = document.querySelector('#login-form')
    const emailLoginInput = document.querySelector('#email')
    const passwordLoginInput = document.querySelector('#password')

    //Handle-Login 

    const handleLogin = (event) => {
        event.preventDefault()
        const email = emailLoginInput.value
        const password = passwordLoginInput.value

        
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            //Local save
            localStorage.setItem(
                "current_user_data",
                JSON.stringify({
                  user_email: email,
                  user_uid: user.uid,
                })
              );


        alert("Login Successfully!")
            window.location.pathname = "/index.html"
            })
        .catch((err) => {
            const errorCode = err.code;
            const errorMess = err.message;
            alert(errorMess);
            })
    }

    loginForm.addEventListener('submit', function(event){
        handleLogin(event)
    })
