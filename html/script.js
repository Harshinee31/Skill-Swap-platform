const profiles = [
  {
    name: "Harshinee",
    photo: "image.png",
    skillsOffered: ["JavaScript", "Python","HTML"],
    skillsWanted: ["Photoshop", "Graphic designer"],
    rating: 3.9,
    availability: "weekends",
  },
  {
    name: "Swathi",
    photo: "image.png",
    skillsOffered: ["C++", "C","java"],
    skillsWanted: ["CSS", "JavaScript"],
    rating: 3.5,
    availability: "evenings",
  },
  {
    name: "Jahnavi",
    photo: "image.png",
    skillsOffered: ["DS", "DAA"],
    skillsWanted: ["ML", "AI"],
    rating: 3.0,
    availability: "weekends",
  },
  {
    name: "Madhumitha",
    photo: "image.png",
    skillsOffered: ["ML", "AI"],
    skillsWanted: ["MangoDB"],
    rating: 4.0,
    availability: "weekends",
  },
];

let currentPage = 1;
const profilesPerPage = 2;

function renderProfiles(page = 1) {
  const list = document.getElementById("profileList");
  list.innerHTML = "";

  const start = (page - 1) * profilesPerPage;
  const end = start + profilesPerPage;
  const currentProfiles = profiles.slice(start, end);

  currentProfiles.forEach((p) => {
    const div = document.createElement("div");
    div.className = "profile-card";
    div.innerHTML = `
     <div class="profile-photo">
  <img src="${p.photo}" alt="${p.name}" />
</div>
      <div class="profile-details">
        <h3>${p.name}</h3>
        <div><strong>Skills Offered:</strong>
          <div class="skill-tags">
            ${p.skillsOffered.map((s) => `<span>${s}</span>`).join("")}
          </div>
        </div>
        <div><strong>Skills Wanted:</strong>
          <div class="skill-tags">
            ${p.skillsWanted.map((s) => `<span>${s}</span>`).join("")}
          </div>
        </div>
        <div class="rating">Rating: ${p.rating}/5</div>
      </div>
      <div>
        <button onclick="handleRequest('${p.name}')">Request</button>
      </div>
    `;
    list.appendChild(div);
  });

  renderPagination();
}

function renderPagination() {
  const totalPages = Math.ceil(profiles.length / profilesPerPage);
  const pag = document.getElementById("pagination");
  pag.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.classList.add("active");
    btn.addEventListener("click", () => {
      currentPage = i;
      renderProfiles(i);
    });
    pag.appendChild(btn);
  }
}

function handleRequest(name) {
  alert(`Please login to request ${name}'s skills.`);
}

document.getElementById("searchBtn").addEventListener("click", () => {
  const skill = document.getElementById("searchInput").value.toLowerCase();
  const filtered = profiles.filter(
    (p) =>
      p.skillsOffered.join().toLowerCase().includes(skill) ||
      p.skillsWanted.join().toLowerCase().includes(skill)
  );
  renderCustomProfiles(filtered);
});

document.getElementById("availabilityFilter").addEventListener("change", (e) => {
  const value = e.target.value;
  if (!value) return renderProfiles(1);
  const filtered = profiles.filter((p) => p.availability === value);
  renderCustomProfiles(filtered);
});

function renderCustomProfiles(customList) {
  const list = document.getElementById("profileList");
  list.innerHTML = "";
  customList.forEach((p) => {
    const div = document.createElement("div");
    div.className = "profile-card";
    div.innerHTML = `
      <div class="profile-photo"></div>
      <div class="profile-details">
        <h3>${p.name}</h3>
        <div><strong>Skills Offered:</strong>
          <div class="skill-tags">
            ${p.skillsOffered.map((s) => `<span>${s}</span>`).join("")}
          </div>
        </div>
        <div><strong>Skills Wanted:</strong>
          <div class="skill-tags">
            ${p.skillsWanted.map((s) => `<span>${s}</span>`).join("")}
          </div>
        </div>
        <div class="rating">Rating: ${p.rating}/5</div>
      </div>
      <div>
        <button onclick="handleRequest('${p.name}')">Request</button>
      </div>
    `;
    list.appendChild(div);
  });
  document.getElementById("pagination").innerHTML = "";
}

// Initial render
renderProfiles();
function renderProfiles(page = 1) {
  const list = document.getElementById("profileList");
  list.innerHTML = "";

  const start = (page - 1) * profilesPerPage;
  const end = start + profilesPerPage;
  const currentProfiles = profiles.slice(start, end);

  currentProfiles.forEach((p, index) => {
    const div = document.createElement("div");
    div.className = "profile-card";

    div.innerHTML = `
      <div class="profile-photo" onclick="viewProfile(${start + index})" style="cursor: pointer;"></div>
      <div class="profile-details" onclick="viewProfile(${start + index})" style="cursor: pointer;">
        <h3>${p.name}</h3>
        <div><strong>Skills Offered:</strong>
          <div class="skill-tags">
            ${p.skillsOffered.map((s) => `<span>${s}</span>`).join("")}
          </div>
        </div>
        <div><strong>Skills Wanted:</strong>
          <div class="skill-tags">
            ${p.skillsWanted.map((s) => `<span>${s}</span>`).join("")}
          </div>
        </div>
        <div class="rating">Rating: ${p.rating}/5</div>
      </div>
      <div>
        <button onclick='handleRequest(${JSON.stringify(p).replace(/'/g, "\\'")})'>Request</button>

      </div>
    `;
    list.appendChild(div);
  });

  renderPagination();
}

function viewProfile(index) {
  const selectedProfile = profiles[index];
  localStorage.setItem("selectedProfile", JSON.stringify(selectedProfile));
  window.location.href = "profile.html";
}


function handleRequest(profile) {
  localStorage.setItem("selectedProfile", JSON.stringify(profile));
  window.location.href = "swap-request.html";
}




