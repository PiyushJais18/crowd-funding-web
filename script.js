function donate() {
  window.location.href = "donate.html";
}

function donationSuccess(event) {
  event.preventDefault();
  alert("Thank you for your donation!");
}

function createCampaign(event) {
  event.preventDefault();
  alert("Campaign created successfully!");
}
