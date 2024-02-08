document.addEventListener("visibilitychange", function(){
    if(document.visibilityState == "visible")
    {
        document.title = "Nagesh Salgude | SOFTWARE DEVELOPER";
        
    }
    else{
        document.title = "Comback to portfolio";
    }
})