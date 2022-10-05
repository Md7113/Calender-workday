var day = moment().format("MMM Do YY")
var dayEl = document.getElementById("currentDay")
dayEl.innerHTML = day

var hour = moment().format("HH")
console.log(hour)
hourRel = hour - 10
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


