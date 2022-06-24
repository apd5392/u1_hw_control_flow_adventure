alert(
  `Welcome to um..., Well to tell you the truth I wasn't ready to start an adventure with you but here we are.`
);
let playerName = prompt("First things first. What woud you like to be called?");
alert(`Welcome ${playerName}`);
let choice = prompt(`So any way, Where do you want to go?`);
alert(`Wait did you say ${choice}?`);
alert(`That's interesting...`);
alert(`Unfortunately, that isn't an option`);

let playerLocation = prompt(
  `Now. Where would you like to actually go?\n (A)North\n (B)South\n (C)East\n (D)West\n (E)If else statements are not working`
);

if (playerLocation === "A" || "a") {
  North();
} else if (playerLocation === "B" || "b") {
  alert("b");
} else if (playerLocation === "C" || "c") {
  alert("c");
} else if (playerLocation === "D" || "d") {
  alert("d");
} else {
  alert(`Game over!`);
}

function North() {
  alert(`So You want to go to the North. Its a dangerous path.`);
  alert(`Oh no ${playerName} We have a problem!`);
  alert(`You are going to have to fight.`);
  let enemyA = prompt(`Who would you rather fight? \n (A)Burt\n (B)Greg\n`);
  if (enemyA === "A" || "a") {
    alert(`Ah so you chose to fight Burt`);
    alert(`Lucky for you he doesn't want to fight`);
    alert(`Yea I know random right?`);
    alert(
      `Now ${playerName}, lets be honest, this adventure may be short for you, but making this adventure took me a while.`
    );
    let finalDestinationA = prompt(
      `Now yould you want to go\n (A)If else statements are not working\n (B)If else statements are not working\n`
    );
    switch (finalDestinationA) {
      case "A":
        alert("At least switch is working");
        break;
      case "B":
        alert("B worked");
        break;
      default:
        alert("default worked");
        break;
    }
  } else if (enemyA === "B" || "b") {
    alert(`You chose Greg`);
    alert(`Ah so you chose to fight Greg`);
    alert(`Unlucky for you he does want to fight`);
    alert(`Are you prepared?`);
  }
}

// let jump = prompt('Enter 1 or 2')
// if (jump === 'A') {
//   alert(`Worked`)
// } else if (jump === 'B'){
//   alert(`b worked`)
// } else{
//   alert(`else worked`)
// }
