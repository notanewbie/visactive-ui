function reColor(tag) {
i = 0;
while(document.getElementsByTagName(tag)[i]) {
if(document.getElementsByTagName(tag)[i].getAttribute("recolor")) {
document.getElementsByTagName(tag)[i].style.outlineColor = document.getElementsByTagName(tag)[i].getAttribute("recolor");

document.getElementsByTagName(tag)[i].onmouseover = function(i) {

this.style.backgroundColor = this.getAttribute("recolor");

}

document.getElementsByTagName(tag)[i].onmouseout = function(i) {

this.style.backgroundColor = "white";

}

}
i = i + 1;
}
}

function makeColor(text) {

H = (text.charCodeAt(0) + text.charCodeAt(text.length - 1) / 2)

return "hsl(" + H + " 100 50)";
}
reColor("bubble");