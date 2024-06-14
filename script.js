document.addEventListener("DOMContentLoaded", function() {
    const educationLink = document.querySelector(".education-link");
    const internshipLink = document.querySelector(".internship-link");
    const projectLink = document.querySelector(".project-link");
    const certificatesLink = document.querySelector(".certificates-link");
    const activitiesLink = document.querySelector(".activities-link");
    // by me
    const ResumeLink = document.querySelector(".Resume-link");
    const modal = document.getElementById("certificate-modal");
    const modalContent = document.querySelector(".modal-content");
    const closeBtn = document.querySelector(".close");
    const certificateLinks = document.querySelectorAll("#certificates-details li");
    //I am adding 
    const certificateButtons = document.querySelectorAll(".certificate-btn");

    // Initially show education details
    showDetails("Resume-details");

    educationLink.addEventListener("click", function(event) {
        event.preventDefault();
        showDetails("education-details");
    });

    internshipLink.addEventListener("click", function(event) {
        event.preventDefault();
        showDetails("internship-details");
    });

    projectLink.addEventListener("click", function(event) {
        event.preventDefault();
        showDetails("project-details");
    });

    certificatesLink.addEventListener("click", function(event) {
        event.preventDefault();
        showDetails("certificates-details");
    });

    activitiesLink.addEventListener("click", function(event) {
        event.preventDefault();
        showDetails("activities-details");
    });
    // by me
    ResumeLink.addEventListener("click", function(event) {
        event.preventDefault();
        showDetails("Resume-details");
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
        modalContent.querySelector("iframe").src = "";
        clearHighlight();
    });

    certificateLinks.forEach(link => {
        link.addEventListener("click", function() {
            clearHighlight();
            this.classList.add("highlighted");
            const certificateSrc = this.getAttribute("data-certificate");
            modal.style.display = "block";
            modalContent.querySelector("iframe").src = certificateSrc;
        });
       //i am adding
        certificateButtons.forEach(button => {
            button.addEventListener("click", function() {
                const certificateSrc = this.getAttribute("data-certificate");
                modal.style.display = "block";
                modalContent.querySelector("iframe").src = certificateSrc;
            });
        });
    });

    function showDetails(id) {
        const detailsSections = document.querySelectorAll(".details-section");
        detailsSections.forEach(section => {
            section.classList.remove("active");
        });
        document.getElementById(id).classList.add("active");

        // Adjust sidebar width after initial display
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.maxWidth = '25%';
    }

    function clearHighlight() {
        certificateLinks.forEach(link => {
            link.classList.remove("highlighted");
        });
    }
});
