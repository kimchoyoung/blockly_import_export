var fileObject = [];

function ExtractFiles(evt){
    var zip = new JSZip();
    var jsonFile;

    var files = evt.target.files[0]; // FileList object
    console.log("name "+files.name);
    var reader = new FileReader();

    reader.onload= ( function(files){
        return function(evt){
            JSZip.loadAsync(evt.target.result)
                .then(function(blk){
                    var jsonData ="";

                    blk.forEach(function(relativePath, file){
                        var jsonInfo = new Object;
                        jsonInfo.name = file.name;
                        file.async('text')

                            .then(function (data){
                                jsonInfo.data = data;
                                jsonData = data;
                                fileObject.push(jsonInfo);
                            });
                    })
                }).then(()=>{
                console.log(fileObject);

                setTimeout(()=>{
                    var jsonData = JSON.parse(fileObject[3].data);

                    for(var i=0; i<fileObject.length-1; ++i){
                        fileObject[i].isLib = jsonData[i].isLib;
                    }
                    return fileObject;
                },1000)
            })
        };
    })(files);
    reader.readAsArrayBuffer(files);
}


function handleFileSelect(evt) {
    ExtractFiles(evt);
    console.log(fileObject);
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);
