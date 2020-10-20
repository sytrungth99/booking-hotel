function myfunction(id, element){
	let tabs = document.getElementsByClassName('tab-item');
	for(i=0;i<tabs.length;i++){
		tabs[i].style.background = 'wheat';
	}
	element.style.background = 'rebeccapurple';
		document.getElementById(id).style.display = 'block';

	switch(id){
		case 'chatluong':
			
			document.getElementById('phobien').style.display = 'none';
			document.getElementById('thinhhanh').style.display = 'none';
		break;	
	
		case 'phobien':
		
			document.getElementById('chatluong').style.display = 'none';
			document.getElementById('thinhhanh').style.display = 'none';
		break;	
	
		case 'thinhhanh':

			document.getElementById('phobien').style.display = 'none';
			document.getElementById('phobien').style.display = 'none';
		break;	
	}

		


}
