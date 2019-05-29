
function handleFileSelect(evt) {
    var files = evt.target.files[0]; // FileList object
    console.log("name "+files.name);
    var reader = new FileReader();

    reader.onload= (function(files){
        return function(evt){

            JSZip.loadAsync(evt.target.result)
                .then((data)=>{
                    data.forEach(()=>{
                        // noinspection JSAnnotator
                        console.log(data);
                    })
                });
        };

    })(files);
    reader.readAsArrayBuffer(files);
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);

