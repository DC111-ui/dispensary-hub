const members = [
  { id: "M-1001", name: "Amelia Khumalo", status: "PENDING", tier: "Silver", phone: "+27 78 100 9001", email: "amelia@example.com" },
  { id: "M-1002", name: "Kagiso Dlamini", status: "VERIFIED", tier: "Gold", phone: "+27 82 445 3221", email: "kagiso@example.com" },
  { id: "M-1003", name: "Nadine Govender", status: "VERIFIED", tier: "Bronze", phone: "+27 71 002 1134", email: "nadine@example.com" }
];

const memberTable = document.getElementById("member-table");
const memberSearch = document.getElementById("member-search");
const profileCard = document.getElementById("profile-card");
const profileStatus = document.getElementById("profile-status");
let selected = members[1];

function renderMembers(filter = "") {
  const list = members.filter((m) => (`${m.name} ${m.id} ${m.phone}`).toLowerCase().includes(filter.toLowerCase()));

  memberTable.innerHTML = list
    .map((m) => `
      <tr>
        <td><strong>${m.name}</strong><br/><small>${m.id}</small></td>
        <td><span class="badge ${m.status === "VERIFIED" ? "success" : ""}">${m.status}</span></td>
        <td>${m.tier}</td>
        <td><button data-member="${m.id}" class="view-member">View</button></td>
      </tr>`)
    .join("");

  document.querySelectorAll(".view-member").forEach((btn) => {
    btn.addEventListener("click", () => {
      const member = members.find((m) => m.id === btn.dataset.member);
      if (member) {
        selected = member;
        renderProfile();
      }
    });
  });
}

function renderProfile() {
  profileStatus.textContent = selected.status;
  profileStatus.className = `badge ${selected.status === "VERIFIED" ? "success" : ""}`;
  profileCard.innerHTML = `
    <p><strong>${selected.name}</strong></p>
    <p>Member ID: ${selected.id}</p>
    <p>Phone: ${selected.phone}</p>
    <p>Email: ${selected.email}</p>
    <p>Tier: ${selected.tier}</p>
    <p>KYC status: <strong>${selected.status}</strong></p>
  `;
}

memberSearch?.addEventListener("input", (e) => renderMembers(e.target.value));

const pageTitle = document.getElementById("page-title");
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-link").forEach((node) => node.classList.remove("active"));
    document.querySelectorAll(".page").forEach((page) => page.classList.remove("active"));
    link.classList.add("active");
    const page = document.getElementById(link.dataset.page);
    page?.classList.add("active");
    pageTitle.textContent = link.textContent;
  });
});

const verifyModal = document.getElementById("verify-modal");
document.getElementById("open-verify")?.addEventListener("click", () => verifyModal?.showModal());

renderMembers();
renderProfile();
