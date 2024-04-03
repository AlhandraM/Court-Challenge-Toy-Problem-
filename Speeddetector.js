// below 70 you are ok
//case 1 you are 75
//75-70 =5
//5/5=1

//case 80
//80-70= 10
//10/5=2

const readline = require("readline");

const rl = readline.createInterface(process.stdin, process.stdout);

function checkspeed(speed) {
  if (speed < 70) {
    return "OK";
  }

  let diff = speed - 70;
  let point = Math.floor(diff / 5);

  if (point > 12) {
    return "Licence Suspended";
  }
  return "Points deducted: " + point;
}

function main() {
  rl.question("What is your speed\n", (speed) => {
    let s = parseInt(speed);
    if (isNaN(s)) {
      console.log("Please enter a number\n");
      main();
      return;
    }
    console.log(checkspeed(s));
    rl.close();
  });
}

main();
