document.addEventListener("DOMContentLoaded", () => {
  const allLinks = document.querySelectorAll(".menu-link");

  allLinks.forEach((link) => {
    link.addEventListener("click", () => {
      allLinks.forEach((l) => {
        const icon = l.querySelector(".icon");
        icon.classList.remove("active");
      });
      const icon = link.querySelector(".icon");
      icon.classList.add("active");
    });
  });

  const profileClick = document.querySelector(".profile");
  const profileImage = document.querySelector(".home img");
  profileClick.addEventListener("click", () => {
    profileImage.classList.toggle("expanded");
    
  });
  document.addEventListener("click", (e) => {
    if (!profileClick.contains(e.target) && !profileImage.contains(e.target)) {
      profileImage.classList.remove("expanded");
    }
  });
  profileImage.addEventListener("click", () => {
    profileImage.classList.toggle("expanded");
  });
});
