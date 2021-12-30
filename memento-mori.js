var birthDate = new Date("1993/11/24");
var today = new Date();
var lifeExpectancy= 100;
var columns = 3;
var ageInMonths;
var totalMonths = lifeExpectancy*12;
var print = [];
var ageCounter = 0;
var age = today.getFullYear() - birthDate.getFullYear();
var months = today.getMonth() - birthDate.getMonth();
if(months < 0){
    age = age - 1;
    months = 12 + months;
}
var ageMessage = "Tienes "+age+" años";
if(months>0) ageMessage = ageMessage + " y "+months+" meses";
console.log(ageMessage);
ageInMonths = months + age*12;
print.push(" "+ageCounter+" ");
for(var i=0; i<totalMonths; i++){
    i<ageInMonths?print.push("x"):print.push("0");
    if((i+1)%12==0){
        ageCounter = ageCounter + 1;
        print.push(" "+ageCounter+"\t");
        if(ageCounter%columns==0) print.push("\n");
        if(ageCounter<10)print.push(" ");
        if(ageCounter!=lifeExpectancy)print.push(ageCounter+" ");
    }
}
console.log(print.join(""));
