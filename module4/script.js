var name = new Array();
names[0]="Yaakov";
names[1]="John";

names[3]="Jen";
names[4]="paul";
names[5]="frank";
names[6]="larry";
names[7]="paula";
names[8]="laura";
names[9]="jim";
for(var i=0;i<names.length;i++){
    if (names[i].chartAt(0)==='j'){
        console.log("Goodbye " + names[i] )
    }
    else{
        console.log("Hello " + names[i])
    }
}