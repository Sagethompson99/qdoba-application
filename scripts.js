currentPageIndex = 0;

function switchPage(increment){
    if(currentPageIndex + increment >= 0 && currentPageIndex + increment < 7)
        currentPageIndex += increment;

    const pageIDs = ["personal-info-container", "job-preference-container", "availability-container", 
    "successful-qualities-container", "work-experience-container", "education-info-container", "references-container"];

    if (currentPageIndex != 7){

        var pages = document.getElementsByClassName('page-content');
        for (var i = 0; i < pages.length; i++) {
            pages[i].style.height = '0%';
            pages[i].style.display = 'none';
        }

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
    }
    else{
        //submit document
    }
}