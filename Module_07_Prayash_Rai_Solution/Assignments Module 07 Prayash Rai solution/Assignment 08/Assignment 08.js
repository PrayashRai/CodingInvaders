const participantsInput = prompt("Enter participants' names divided by commas:");
const participants = participantsInput.split(",");
const queue = [];

for (let i = 0; i < participants.length; i++) {
  const participant = participants[i].trim();
  queue.push({
    name: participant,
    number: i + 1
  });
}

queue.sort((a, b) => a.name.localeCompare(b.name));

for (let i = 0; i < queue.length; i++) {
  const participant = queue[i];
  console.log(`${participant.name} - ${participant.number}`);
}
