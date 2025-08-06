function pattern(n){
    for(let i=0;i<n;i++){
        let row = '';
        for(let j=0;j<=i;j++){
            row += '* ';
        }
        console.log(row);
    }
}

function PasswordRetrySystem(){
    let password="Open123";
    let attempts = 0;
    while(attempts < 3){
        let input = prompt("Enter password:");
        if(input === password){
            console.log("Access granted");
            return;
        } else {
            attempts++;
            console.log(`Incorrect password. Attempts left: ${3 - attempts}`);
        }


    }
}

function InventoryDepletionTracker(){
    let i=120, c=0;
    while(i>0){
        console.log(`Current inventory: ${i}`);
        i -= 15;
        c++;
    }
    console.log(`Total cycles to deplete inventory: ${c}`);
}

function  DayScheduler(){
    for(let i=1; i<=7; i++){
        if(i!== 7){
            console.log(`Day ${i}: Workday`);
        }   
        else{
            console.log("Day 7: Rest day");
            continue;
        }   
    }
}

function MarathonEnergyTracker()
{
    let energy = 100;
    i=0;
    do{
        console.log(`Hour ${i}: Energy level is ${energy}`);
        if(energy <= 0){
            console.log("Energy depleted, cannot continue marathon.");
            break;
        }
        energy -= 9; 
        i++;
    }
    while(energy > 30);;
    console.log("Marathon training completed.");
}

pattern(4);
//PasswordRetrySystem();
InventoryDepletionTracker();
DayScheduler();
MarathonEnergyTracker();