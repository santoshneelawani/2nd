function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username === username && password==password && username.length > 1)
     {
      alert("Login Successful!");
      window.localStorage.setItem("loginStatus", true);
      window.location.href = "main_page.html"; 
    } else {
      alert("Please enter valid credentials!");
      window.location.href = "index.html"; 
   }
  }
  