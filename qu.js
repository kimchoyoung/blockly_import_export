

$('.upload-input').on('change', function($event) {
    var $file = $event.target.files[0];
    JSZip.loadAsync($file).then(function($content) {
        alert($content.files["css/style.css"].async('text')); // FIRST WAY
        alert(JSZip.loadAsync($content));											// SECOND WAY
    })
});
