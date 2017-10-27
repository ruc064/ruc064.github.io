var subject = document.getElementById("subject"); 
var interestText = document.getElementById("interests-text"); 
var subjectArray = ['Tennis', 'Swimming', 'Piano', 'Competitive Gaming']; 
var idArray = ['interests-tennis', 'interests-swim', 'interests-piano', 'interests-league'];
var right = document.getElementById("right"); 
var subjectColor = ['#88cfe2', '#515f63', '#5edbe5', '#27b5ba'];
var counter = 1;
var arrCounter = 0;
                
    function nextFunction() {
        subject.innerHTML = subjectArray[counter];  
        counter++; 
            if(counter + 1> subjectArray.length) {
                right.style.visibility = "hidden";  
                left.style.visibility = "visible"; 
            }
        interestText.setAttribute("id", idArray[arrCounter + 1]);             
        subject.style.color = subjectColor[counter - 1]; 
        arrCounter++;
            if(arrCounter + 1 > idArray.length) {                        
                arrCounter = 0;
            }
    }
            
    function goBack() {
        subject.innerHTML = subjectArray[0]; 
        interestText.setAttribute("id", idArray[0]); 
        subject.style.color = subjectColor[0]; 
        counter = 1; 
        arrCounter = 0; 
        left.style.visibility = "hidden"; 
        right.style.visibility = "visible"; 
    }
