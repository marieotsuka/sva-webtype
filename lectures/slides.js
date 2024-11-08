window.addEventListener('load', function(){
  let slides = document.querySelectorAll('.slide');

  slides.forEach( (s, i)=>{
    s.id = i;
  });

  document.addEventListener("keydown", (event) => {
    if (event.keyCode == 37 || event.keyCode == 39) {
      event.preventDefault();
      let hash = location.href.split('#').pop();
      let currentID = 0;
      if( !isNaN(hash) ){
        currentID = parseInt(hash); 
      }

      if( event.keyCode == 37 ){
        if( currentID > 0){
          currentID--;
        }      
      }else{
        if( currentID < slides.length-1 ){
          currentID++;
        }      
      }    
      console.log(currentID);
      location.href = "#" + currentID;     
    }
  });

  //ONLY ANIMATE WHILE IN VIEW
  //VF OBSERVER
  let vfobserver = new IntersectionObserver((entries, observer)=> {
    entries.forEach(function(entry) {
      // Pause/Play the animation
      if (entry.isIntersecting){
        console.log('play vf', entry);
        entry.target.style.animationPlayState = "running";
      } 
      else {
        console.log('pause vf', entry);
        entry.target.style.animationPlayState = "paused";
      }
    });
  });

  let variableTexts = document.querySelectorAll(".animate");
  variableTexts.forEach(function(el) { vfobserver.observe(el); });

  //VIDEO OBSERVER
  let vidobserver = new IntersectionObserver((entries, observer) => { 
      entries.forEach(entry => {
        if(entry.isIntersecting){
          console.log('play vid', entry);
          entry.target.play(); 
        }else{
          console.log('pause vid', entry);
          entry.target.pause();        
        }
      });
  }, {threshold: 0.1});

  let videos = document.querySelectorAll('video');
  videos.forEach(function(el) { vidobserver.observe(el); });

});