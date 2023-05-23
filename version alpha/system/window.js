VISIBILITY="NO";
TITLE="test";
TITLEBARCLR="whitesmoke";
WINWIDTH="300";
WINHEIGHT="200";
WINCTNCLR="white";
function fenetrage(){
wintitle.innerHTML= TITLE;
titlebar.style.background = TITLEBARCLR;
testwindow.style.width = WINWIDTH + "px";
testwindow.style.height = WINHEIGHT + "px";
winctn.style.background = WINCTNCLR;
}
viswin();
function viswin() {
if (VISIBILITY === "NO")
{
testwindow.style.display = "none";
}
else
{
testwindow.style.display = "block";
}
}
 