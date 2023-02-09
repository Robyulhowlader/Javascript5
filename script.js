// ========Present time here====

var time = prompt("Enter Your Time: ");

if(time>=6.00 && time<=9.10){
    document.write("Present");
}
else if(time>=9.11 && time<=14.00){
    document.write("Late")
}
else if(time>=14.01 && time<=17.00){
    document.write("Off Time")
}
else if(time>=17.01 && time<=18.00){
    document.write("Correct Time")
}
else if( time>=18.01 && time<=21.00){
    document.write("Office Time")
}
else{
    document.write("Sleep Time")
}