var apps = [1,2,3,4,5,6,7,8],
	appmap;

fin.desktop.main(function(){
	appmap = apps.map(function(){
		var app = new fin.desktop.Application({
			name: '' + Math.random(),
			uuid: '' + Math.random(),
			url: location.origin + '/make20.html',
			autoShow: true
		}, function(){
			app.run();
		});

		return app;
	});
});

function closeThem (){
	appmap.forEach(function(app){
		app.close();
	});
}