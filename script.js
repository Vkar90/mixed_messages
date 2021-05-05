//Testing local run with node
// console.log("Test message");

generateRandomNumber = num => {
  return Math.floor(Math.random() * num);
};
const messages = {
  signInfo: ["star", "moon", "sun"],
  fortuneOutput: [
    "terrible luck",
    "bad luck",
    "ok luck",
    "good luck",
    "great luck"
  ],
  advice: ["go out", "do not read this", "play more", "trust no one"]
};

// store messages in an array
let personalMessage = [];

//Iterate over the object's properties
for (let prop in messages) {
  let optionIdx = generateRandomNumber(messages[prop].length);
  switch (prop) {
    case "signInfo":
      personalMessage.push(
        `Your sign right now is a "${messages[prop][optionIdx]}". `
      );
      break;
    case "fortuneOutput":
      personalMessage.push(
        `You are having a: "${messages[prop][optionIdx]}". `
      );
      break;
    case "advice":
      personalMessage.push(`You should: "${messages[prop][optionIdx]}".`);
      break;
    default:
      personalMessage.push("Not enough info");
  }
}

let formatMessage = message => {
  const formatted = personalMessage.join("\n");
  console.log(formatted);
};

formatMessage(personalMessage);
