function weather_assistant(temp){ 
if(temp>40)
    console.log("Heatwave Alert! Stay indoors");
else if(temp>=30 && temp<=40)
    console.log("High temperature, stay hydrated");
else if(temp>=20 && temp<30)
    console.log("Pleasant weather.");
else if(temp>=10 && temp<20)
    console.log("Cool day. Carry a jacket.");
else
    console.log("Cold weather, wear warm clothes!");
}

function Bill_Calculator(slabs){
    let sum=0;
    for(let i=0; i<slabs; i++){
        let units = prompt(`Enter units consumed for slab ${i+1}:`);
        if(units==100){
            sum+=1.5 * units;
        }
        else if(units>100 && units<=200){
            sum+=2 * units;
        }
        else if(units>200 && units<=300){
            sum+=3 * units;
        }
        else if(units>300){
            sum+=5 * units;
        }
    }
    console.log(`Total bill amount: ${sum}`);
}


function MovieTicketBooking(day, age){
    if(day.toLowerCase() === 'saturday' || day.toLowerCase() === 'saturaday'){
        console.log("Ticket price is ₹200");
    }
    else{
        if(age<18){
            console.log("Ticket price is ₹100");
        }
        else{
            console.log("Ticket price is ₹200");
        }
    }
}

function Menu(){
    console.log("1. Start Application");
    console.log("2. Stop Application");
    console.log("3. Restart Application");
    console.log("4. Exit");
    let choice = parseInt(prompt("Enter your choice:"));
    switch(choice){
        case 1:
            console.log("Starting application…");
            break;
        case 2:
            console.log("Stopping application…");
            break;
        case 3:
            console.log("Restarting application…");
            break;
        case 4:
            console.log("Exiting…");
            exit(0);
            break;
        default:
            console.log("Invalid choice, please select a valid menu item.");
    }
}

function ATM(){
    console.log("Welcome to ATM");
    console.log("1.Balance Inquiry");    
    console.log("2.Cash Withdrawal");
    console.log("3.Mini Statement");
    console.log("4. Exit");
    let choice=prompt('Enter your choice:');
    switch(choice){
        case 1:
            console.log("Your balance is ₹10,000");
            break;
        case 2:
            let amount = prompt("Enter amount to withdraw:");
            console.log('You have withdrawn ₹1000');
            break;
        case 3:
            console.log("Mini statement: Last 5 transactions");
            break;
        case 4:
            console.log("Exiting ATM…");
            exit(0); 
            break;
        default:
            console.log("Invalid choice, please try again.");
    }
}

function VotingEligibility(age){
    if(age>=18 && age<120){
        console.log("You are eligible to vote.");
    }
    else if(age>0 && age<18){
        console.log("You are not eligible to vote.");
    }
    else{
        console.log('Invalid input');
    }

}

function RankAllocator(marks){
    if(marks>=90 && marks<=100){
        console.log("Rank: 1");
    }
    else if(marks>=75 && marks<90){
        console.log("Rank: 2");
    }
    else if(marks>=60 && marks<75){
        console.log("Rank: 3");
    }
    else if(marks>=40 && marks<60){
        console.log("Rank: 4");
    }
    else if(marks>=0 && marks<40){
        console.log("Failed: No rank.");
    }
    else{
        console.log("Invalid marks entered.");
    }
}

weather_assistant(30);
//Bill_Calculator(3);
MovieTicketBooking('Monday', 20);
//Menu();
//ATM();
VotingEligibility(20);
RankAllocator(85);

