// Load breadcrumb.html dynamically
fetch('../Breadcrumb/breadcrumb.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('breadcrumb-container').innerHTML = data;

    // Set current page automatically
    const path = window.location.pathname;
    const page = path.split("/").pop().split(".")[0];

    const pageNames = {
      "index": "Home",
      "about": "About",
      "skills": "Skills",
      "services": "Services",
      "contact": "Contact"
    };

    const currentPage = document.getElementById("current-page");
    if(currentPage) {
      currentPage.innerText = pageNames[page] || "Page";
    }
  });
