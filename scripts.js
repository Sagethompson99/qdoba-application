currentPageIndex = 0;
window.onload = function() {
    switchPage(currentPageIndex);
};

function switchPage(increment){
    if(currentPageIndex + increment >= 0 && currentPageIndex + increment <= 7)
        currentPageIndex += increment;

    const pageIDs = ["personal-info-container", "job-preference-container", "availability-container", 
    "successful-qualities-container", "work-experience-container", "education-info-container", "references-container"];

    var progressBar = document.getElementById("progressBar");   
    progressBar.style.width = ((100/7)*currentPageIndex) + "%";
    document.getElementById("progress-text-container").style.width = ((100/7)*currentPageIndex) + "%";
    document.getElementById("progressText").style.innerHTML = (((100/7)*currentPageIndex).toString + "%");

    var pages = document.getElementsByClassName('page-content');
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.height = '0%';
        pages[i].style.display = 'none';
    }

    if (currentPageIndex != 7){
        document.getElementById(pageIDs[currentPageIndex]).style.height = "auto";
        document.getElementById(pageIDs[currentPageIndex]).style.display = "block";

        if(currentPageIndex == 0)
            document.getElementById("back-button").style.display = "none";
        else {
            document.getElementById("back-button").style.display = "block";

            if(currentPageIndex == 6)
                document.getElementById("continue-button").innerHTML = "Submit"; 
            else {
                document.getElementById("continue-button").innerHTML = "Next"; 
            }
        }  
        window.scrollTo(0, 0);
    }
    else{
        document.getElementById("application-complete-container").style.height = "auto";
        document.getElementById("application-complete-container").style.display = "block";
        document.getElementById("back-button").style.display = "none";
        document.getElementById("continue-button").style.display = "none"; 

        //submit document
    }
}