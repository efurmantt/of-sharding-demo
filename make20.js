var apps = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10],
	appmap;

fin.desktop.main(function(){
	appmap = apps.map(function(){
		var app = new fin.desktop.Window({
			name: '' + Math.random(),
			url: 'about:blank',
			autoShow: true
		});

		return app;
	});
});