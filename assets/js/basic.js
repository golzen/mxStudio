function required(x) {
  if(x == undefined)
  {
    console.log("Some parameter are missing");
    return false;
  }
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() *
 charactersLength));
   }
   return result;
}
function $v(x, y)
{

  if(localStorage.getItem(x)){
    if(y == undefined){
      return localStorage.getItem(x);
  }else {
    localStorage.setItem(x, y);
    return y;
  }

  }else {

    localStorage.setItem(x, y);
    return y;

  }


}

function getFilename(url)
{
   if (url)
   {
      var m = url.substring(url.lastIndexOf('/')+1);

         return m;
       }

}
function getFolderName(path)
{
  if(path)
  {

    var arr = path.split("/");
    var m = arr[arr.length - 1];

       return m;
  }
}

function getExtension(name)
{
   return name.slice((name.lastIndexOf(".") - 1 >>> 0) + 2);
}

function getEditorType(ext)
{
  var r = "";
  if(ext == "html")
  {
    r = "htmlmixed";
  }
  if(ext == "php")
  {
    r = "application/x-httpd-php";
  }

  if(ext == "css")
  {
    r = "css";
  }
  if(ext == "js")
  {
    r = "javascript";
  }
  if(ext == "")
  {
    r = "htmlmixed";
  }
  return r;

}

function escapeCode(x)
{
  var a = x.replace(/["]/g, "&#34;");
  var b = a.replace(/[']/g, "&#39;");
  var c = b.replace(/[<]/g, "&lt;");
  var d = c.replace(/[>]/g, "&gt;");
  var d = c.replace(/[\r]/g, "");
  return d;

}

function makeHTML(x)
{
  var a = x.replace(/&#34;/g, '"');
  var b = a.replace(/&#39;/g, "'");
  var c = b.replace(/&lt;/g, "<");
  var d = c.replace(/&gt;/g, ">");
  return d;

}


function highlight(newElem, oldElem){
  var oldText = oldElem,
      text = '';
  newElem.split('').forEach(function(val, i){
    if (val != oldText.charAt(i))
      text += "<span class='highlight'>"+val+"</span>";
    else
      text += val;
  });
  console.log(text);
}
function pushUnique(arr, obj, val, newVal) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].fileUrl == obj){
      arr[i].fileUrl = val;
    }else{
      arr.push(newVal);
    };
  }
}

function ary(){

};
ary.prototype.map = function(array, condition){

  var stat = true;
  var ar = {array: array, el: [], key: 0};
  if(array.length == 0){
    condition(ar);
  }else{


  for (let key in array) {

    var arKey = array[key];
    var ar = {array: array, key: key, el: arKey};
    if(condition(ar) == false){
      stat = false;
      break;

    };
  }
}

  return stat;

}
var ary = new ary();
