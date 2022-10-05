var day = moment().format("MMM Do YY")
var dayEl = document.getElementById("currentDay")
dayEl.innerHTML = day

var hour = moment().format("HH")
hourKeep = hour
hourRel = hour - 10
function setColor(){
for(i=9;i<18;i++){
    if(i<hourRel){
    $("#"+i).addClass("past")
    }
    if(i>hourRel){
        $("#"+i).addClass("future")
    }
    if(i==hourRel){
    $("#"+i).addClass("present")
    }
}
}
setColor()
function clearColor(){
    for(i=9;i<18;i++){
        $("#"+i).removeClass("past")
        $("#"+i).removeClass("present")
        $("#"+i).removeClass("future")
    }
}
var changeTime = setInterval(function() {  
    clearColor()
    setColor()
    console.log("count")
}, 60000)





