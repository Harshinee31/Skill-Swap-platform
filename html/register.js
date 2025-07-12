document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!name || !email || !password) {
    alert("Please fill all fields");
    return;
  }

  // Save user data to localStorage (mock DB)
  const userData = { name, email, password };
  localStorage.setItem("registeredUser", JSON.stringify(userData));

  alert("Registration successful! You can now log in.");
  window.location.href = "login.html";
});
