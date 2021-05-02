(function ($) {


    $.ajaxSetup({
        cache: false
    }); 
    $.postJSONFile = function (fileID, url, callback) {
        var formData = new FormData();
        var totalFiles = document.getElementById(fileID).files.length;
        for (var i = 0; i < totalFiles; i++) {
            var file = document.getElementById(fileID).files[i];
            formData.append("file-input", file);
        }
        return $.ajax({
            type: "POST",
            url: url,
            data: formData,
            dataType: 'json',
            contentType: false,
            processData: false,
            success: callback
        });
    };
    $.postJSON = function (url, data, callback) {
        return $.ajax({
            url: url,
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: callback
        });
    };
    $.fn.GetQueryString = function (name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    };
    $.fn.CopyText = function (val) {
        var aux = document.createElement("input");
        aux.setAttribute("value", val);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
        toastr["info"]("Kopyalama başarılı");
    };
})($);
