document.addEventListener("DOMContentLoaded", function(event) { 
	const body = document.body;
	let sticker = true;

	document.getElementById('option-simplified').addEventListener('change', (e)=>{		
		if (e.target.checked){
			body.style.setProperty('--ss01', 1);
			body.style.setProperty('--ss03', 1);
		}else{
			body.style.setProperty('--ss01', 0);
			body.style.setProperty('--ss03', 0);
		}
	});

	const stickerEl = document.getElementById('tag-label');
	document.getElementById('option-sticker').addEventListener('change', (e)=>{		
		if (e.target.checked){
			sticker = true;			
		}else{
			sticker = false;
			stickerEl.style.cssText = 'display: none;';	
		}
	});
	
  body.addEventListener('click', function(e){  	
  	if( sticker ){
  		let target = e.target;
  		var elementname = e.target.tagName;
  		console.log(elementname);

  		if( elementname !== 'summary' && target.closest('a') == null ){
  			// if not clicking on link
  			var x = e.pageX;
  			var y = e.pageY;
  			stickerEl.querySelector('.tag-name').innerText = elementname;
  			stickerEl.classList.add('active');
  			stickerEl.style.cssText = `top: ${y-30}px; left: ${x+30}px;`;
  		}
  	}else{
  		stickerEl.classList.remove('active');
  	}
  });

  const cols = document.querySelectorAll('.col');
  cols.forEach( col=>{
  	col.addEventListener("scroll", (e)=>{	 
  	console.log('scroll'); 	
		  if( stickerEl.classList.contains('active') ){
		  	stickerEl.classList.remove('active');	
			} 	
  	});
  });
  
 


});
