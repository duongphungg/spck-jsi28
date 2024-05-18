const current_user_data = JSON.parse(localStorage.getItem("current_user_data"))
const user_actions = document.querySelector("#user-actions")

console.log(current_user_data)

if (current_user_data ) {
    user_actions.innerHTML = `
    <div> 
        <h3> ${current_user_data.user_email} </h3>
        <button id ="logout-btn"> Log out </button>
    </div>
    `

}

const logOutBtn = document.querySelector("#logout-btn");

const handleLogout = () => {
    firebase
    .auth()
    .signOut()
    .then(function () {
      // Đăng xuất thành công
      window.location.replace("login.html"); // Chuyển hướng đến trang đăng nhập sau khi logout
    })
    .catch(function (error) {
      // Xử lý lỗi nếu có
      console.log(error);
    });
};

logOutBtn.addEventListener("click", function () {
  handleLogout();
});