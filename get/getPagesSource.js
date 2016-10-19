// @author Rob W <http://stackoverflow.com/users/938089/rob-w>
// Demo: var serialized_html = DOMtoString(document);

function DOMtoString(document_root) {
var canvas = document_root.getElementById('canvas');
var context = canvas.getContext('2d');
var width = 0;
var height = 0;
if(canvas.width % 2 !== 0){
	width = canvas.width - 1;
}else{
	width = canvas.width;
}
if(canvas.height % 2 !== 0){
	height = canvas.height- 1;
}else{
	height  = canvas.height;
}
var player = context.getImageData(width/2,height/2, width , height).data

var arr = Object.keys(player).map(function(k) { return player[k] });
    
var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
xmlhttp.open("POST", "http://localhost:5000/pixels/");
xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xmlhttp.send(JSON.stringify({'array':arr, 'width': width, 'height': height}));
   
    return 'Vai no Python';
}

chrome.runtime.sendMessage({
    action: "getSource",
    source: DOMtoString(document)
});
