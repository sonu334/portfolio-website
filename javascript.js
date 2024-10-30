var skills_box=document.getElementById("skills");
var expreience_box=document.getElementById("experience");
var education_box=document.getElementById("education");
var know=document.getElementById("Knowmore");
var tab_one=document.getElementById("tab1");
tab_one.onclick=function(){
    skills_box.style.display="block";
    expreience_box.style.display="none";
    education_box.style.display="none";
    know.style.display="none";
}
var tab_two=document.getElementById("tab2");
tab_two.onclick=function(){
    expreience_box.style.display="block";
    skills_box.style.display="none";
    education_box.style.display="none";
    know.style.display="none";
}
var tab_three=document.getElementById("tab3");
tab_three.onclick=function(){
    education_box.style.display="block";
    skills_box.style.display="none";
    expreience_box.style.display="none";
    know.style.display="none";
}
var menu_bar=document.getElementById("menu");
function openmenu(){
    menu_bar.style.right="0px";
}
function closemenu(){
    menu_bar.style.right="-120px";
}