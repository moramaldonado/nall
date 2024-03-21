function saveData(name, data){
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'write_data.php'); // 'write_data.php' is the path to the php file described above.
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({filename: name, filedata: data}));
    xhr.onload = function() {
        window.location = "https://app.prolific.com/submissions/complete?cc=C9NY5530";
    }
}

function checkDuplicates(id,pro_id,callback) {
    var porlificIdInfo = $.extend({'subject_id': id},{'prolific_id': pro_id});
    $.ajax({
        type: 'POST',
        url: 'check_duplicates.php',
        data: porlificIdInfo,
        cache:false,
    }).done(function(data) {
        if (data=='Duplicate'){
            callback(true);
        } else{callback(false);}
    });
}
