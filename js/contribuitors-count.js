define('contribuitors-count', function () {
    var nodesSameClass = document.getElementsByClassName("contributor");
    document.getElementById("count").innerHTML = "Members Count: " + "<span class='badge'>" +
        nodesSameClass.length + "</span>";
});
