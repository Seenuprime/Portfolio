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
});
