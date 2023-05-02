const prompt = require("prompt-sync")();

const deposit = () => {
    const depositAmount = prompt("enter a amount to be deposited : ");
    const numberdepositamount = parseFloat(depositAmount);
    if(isNaN(numberdepositamount) || numberdepositamount <=0){
        console.log("invalid deposit amount , try again");
    }
}  

deposit();