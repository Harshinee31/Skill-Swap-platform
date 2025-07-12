window.onload = function () {
  // Handle Login Form Submission
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const users = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
    const matchedUser = users.find(u => u.email === email && u.password === password);

    if (!matchedUser) {
      alert("Invalid email or password.");
      return;
    }

    // Save logged-in state and user
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("registeredUser", JSON.stringify(matchedUser));

    alert("Login successful!");
    window.location.href = "index.html";
  });

  // Handle "Forgot Password" Click
  document.getElementById("forgotPasswordLink").addEventListener("click", function (e) {
    e.preventDefault();

    const email = prompt("Enter your registered email:");
    if (!email) return;

    const users = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
    const user = users.find(u => u.email === email.trim());

    if (user) {
      alert(`Your password is: ${user.password}`);
    } else {
      alert("No user found with that email.");
    }
  });
};
