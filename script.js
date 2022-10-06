var day = moment().format("MMM Do YY")
var dayEl = document.getElementById("currentDay")
dayEl.innerHTML = day
var hour = moment().format("HH")
function setColor(){
for(i=9;i<18;i++){
    if(i<hour){
    $("#"+i).addClass("past")
    }
    if(i>hour){
        $("#"+i).addClass("future")
    }
    if(i==hour){
    $("#"+i).addClass("present")
    }}}
setColor()
function clearColor(){
    for(i=9;i<18;i++){
        $("#"+i).removeClass("past")
        $("#"+i).removeClass("present")
        $("#"+i).removeClass("future")
    }}
var changeTime = setInterval(function() {  
    clearColor()
    setColor()
}, 60000)
function popCal(){
    for (i=9;i<18;i++){
    var content = localStorage.getItem("save"+i)
    $('#'+i).text(content)
    }}
popCal()
function saveItem(event){
saveContent = $(event.target).parent().parent().children().eq(1).val()
conector = $(event.target).parent().parent().children().eq(1).attr("id")
localStorage.setItem("save"+conector,saveContent)
}
for (i=9;i<18;i++){
    $("#btn"+i).on("click", saveItem)
}