$(document).ready(function(){
    $("p").hide();
    $("h1").click(function(){
        $("p").toggle(1000);
    });
});
