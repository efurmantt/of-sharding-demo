var WNDS_PER_SHRD = 20,
    TOTAL_WND = 160,
    RUNTIME_PATH = "C:\\Users\\openfin\\AppData\\Local\\OpenFin\\OpenFinRVM.exe",
    WNDS_CREATED = Number(location.search.split('=')[1]);

fin.desktop.main(function() {

    loadWinds(WNDS_PER_SHRD, function(wnds) {
        wnds.forEach(function(win) {
            win.show();
        });
        if (WNDS_CREATED + 20 <= TOTAL_WND ) {
            fin.desktop.System
                .launchExternalProcess(
                    RUNTIME_PATH, 
                    '  --config="http://local:8080/app' + (WNDS_CREATED + 20) + '.json', 
                    function(result) {
                        console.log('runtime spawned');
                    });
        }
    });

});

function loadWinds(num, done, arr) {
    arr = arr || []
    if (num--) {
        arr.push(
            new fin.desktop.Window({
                name: '' + Math.random(),
                url: 'ladder.html',
                autoShow: false,
                minHeight: 220,
                maxHeight: 220,
                minWidth: 170,
                maxWidth: 170
            }, function() {
                loadWinds(num, done, arr);
            }));
    } else {
        done(arr);
    }
}
