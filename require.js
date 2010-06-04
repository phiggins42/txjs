(function(d){ 
	
	var rqr = d.require;
	d.require = function(module){
		if(d.isArray(module)){
			d.forEach(module, rqr, d);
		}else{
			rqr.apply(d, arguments);
		}
		return d;
	}

})(dojo);