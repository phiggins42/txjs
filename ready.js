(function(d){

	var oldonload = d.addOnLoad;
	d.addOnLoad = d.ready = function(fn){
		oldonload.call(d.global, d);
	}
	
	// now you can use `dojo` as whatever first
	// arg to dojo.ready callback is:
	//
	//	dojo.ready(function(d){
	//		d.require("foo.bar.Baz");
	//	});

})(dojo);