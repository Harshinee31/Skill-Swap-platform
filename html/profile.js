const user = JSON.parse(localStorage.getItem("registeredUser"));

if (!user) {
  alert("No user logged in!");
} else {
  document.getElementById("profileName").textContent = user.name;

  user.skillsOffered.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    document.getElementById("skillsOffered").appendChild(li);
  });

  user.skillsWanted.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    document.getElementById("skillsWanted").appendChild(li);
  });

  document.querySelector(".feedback-badge").textContent = user.feedback || "No feedback yet";
}
