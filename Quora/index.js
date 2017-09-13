function toggle(){
		var x = document.getElementById('main-body');
		var y = document.getElementById('trending-content');
		if(x.style.display == "block")
		{
			x.style.display = "none";
			y.style.display = "block";	
		}
		else if(x.style.display == "none")
		{
			y.style.display = "none";
			x.style.display = "block";	
		}

}