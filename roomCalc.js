function calculateRoom(){
    var l = parseInt(prompt("Enter the Length: "));
    var w = parseInt(prompt("Enter the Width:"));
    var h = parseInt(prompt("Enter the height:"));
    var area = l * w;
    var perimeter = (l + w) * 2;
    var v = l * w * h;
    var paint = (perimeter * h) / 5;
    var carpet = area / 5;
    console.log("Area:" + area);
    console.log("Perimeter:" + " " + perimeter);
    console.log("Volume:" + v);
    console.log("Paint:" + paint);
    console.log("Carpet:" + carpet);
}


function roomLoop(){
    var loop = true;
    while(loop){
        calculateRoom();
        var check = prompt("Enter lakdfjalkdfjaslkfjasdfklj to stop calculating");
        if(check === "lakdfjalkdfjaslkfjasdfklj"){
            loop = false;
        }
    }
}