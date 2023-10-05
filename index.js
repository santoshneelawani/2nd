function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username === password&& username.length > 1)
     {
      alert("Login Successful!");
      window.localStorage.setItem("loginStatus", true);
      window.location.href = "main_page.html"; 
    } else {
      alert("Please enter valid credentials!");
      window.location.href = "index.html"; 
   }
  }


let status = window.localStorage.getItem("loginStatus");
function logOut() {
  window.localStorage.setItem("loginStatus", "false");
  window.location.href = "index.html";
}


  