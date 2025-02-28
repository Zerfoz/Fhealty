function bukahal(n){
    $.ajax("hal"+n+".html").done(function(data){
        $("#hasil").html(data)
    });
}
