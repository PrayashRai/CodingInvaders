const participants = [
    "John M.", "David H.", "Rajesh A.",
    "Sunita S.", "Mohammed A.", "Ram J.",
    "Anita R.", "Suresh R.", "Sara M.",
    "Nick C.", "Lakshmi N."
  ];
  
  // Divide participants into two teams
  let team1 = [];
  let team2 = [];
  
  for (let i = 0; i < participants.length; i++) {
    if (i % 2 === 0) {
      team1.push(participants[i]);
    } else {
      team2.push(participants[i]);
    }
  }
  
  // If the difference between team sizes is more than 1, move participants to balance the teams
  const diff = Math.abs(team1.length - team2.length);
  while (diff > 1) {
    if (team1.length > team2.length) {
      team2.push(team1.pop());
    } else {
      team1.push(team2.pop());
    }
    diff = Math.abs(team1.length - team2.length);
  }
  
  console.log("Team 1: " + team1.join(","));
  console.log("Team 2: " + team2.join(","));
  