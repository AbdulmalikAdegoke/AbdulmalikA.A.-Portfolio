
let interests = [
  {
    interest:"Tech Enthusiast",
    emoji:""
  },
  {
    interest:"Photographer",
    emoji:"assets/Icons/icons8-camera-96.png"
  },
  {
    interest:"UI/ UX Designer",
    emoji:""
  },
  {
    interest:"Volleyball Player",
    emoji:"assets/Icons/icons8-volleyball-96.png"
  },
  {
    interest:"Artist",
    emoji:""
  },
  {
    interest:"Art Enthusiast",
    emoji:""
  },
  {
    interest:"Quick Learner",
    emoji:""
  },
  {
    interest:"Budding Reader",
    emoji:""
  }

]
var current_interest = 0;
(function() {
  setInterval(function () {
    document.getElementById("other_interests").innerHTML=interests[current_interest].interest;
    document.getElementById("interest_img").src=interests[current_interest].emoji;
    
    current_interest =current_interest+1;
    if (current_interest === interests.length) {
      current_interest =0;
    }

  }, 3000);

}());
function other_interests_carousel() {


}
