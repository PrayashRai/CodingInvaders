class HashTable {
  constructor() {
    this.table = new Array(100);
    this.size = 0;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  setPlayer(playerNameValue, playerScoreValue, playerUniqueIdValue) {
    playerScoreValue = Number(playerScoreValue);
    const hashIndex = this._hash(playerNameValue);
    if (this.table[hashIndex]) {
      for (let items of this.table[hashIndex]) {
        items[1] = Number(items[1]);
        if (items[0] === playerNameValue && items[2] === playerUniqueIdValue) {
          items[1] += playerScoreValue;
          return `Player score at index ${hashIndex} with Unique id ${playerUniqueIdValue} is updated. New score is ${items[1]}`;
        }
      }
      this.table[hashIndex].push([
        playerNameValue,
        playerScoreValue,
        playerUniqueIdValue,
      ]);
      return `Different player with the same name is added:\nindex ${hashIndex}. \nName: ${playerNameValue},  \nScore: ${playerScoreValue},  \nUnique Id: ${playerUniqueIdValue}`;
    } else {
      this.table[hashIndex] = [];
      this.table[hashIndex].push([
        playerNameValue,
        playerScoreValue,
        playerUniqueIdValue,
      ]);
      return `Player details are added at index ${hashIndex}.  \nName: ${playerNameValue},  \nScore: ${playerScoreValue}, \nUnique Id: ${playerUniqueIdValue}`;
    }
  }

  get(key) {
    const hashIndex = this._hash(key);
    let playerDetails;
    if (this.table[hashIndex]) {
      if (this.table[hashIndex].length > 1) {
        let pUid = prompt(
          "Found multiple records with the provided name. Please specify Unique Id."
        );
        for (let i = 0; i < this.table[hashIndex].length; i++) {
          if (
            this.table[hashIndex][i][0] === key &&
            this.table[hashIndex][i][2] === pUid
          ) {
            let name = this.table[hashIndex][i][0];
            let score = this.table[hashIndex][i][1];
            let uid = this.table[hashIndex][i][2];
            return `Found it: \n[Name: ${name}, Score: ${score}, Unique Id: ${uid}]`;
          }
        }
      } else if (this.table[hashIndex].length === 1) {
        let name = this.table[hashIndex][0][0];
        let score = this.table[hashIndex][0][1];
        let uid = this.table[hashIndex][0][2];
        return `Found it: \n[Name: ${name}, Score: ${score}, Unique Id: ${uid}]`;
      } else {
      }
    }
    alert("Player not found..");
    return "Player Not found";
  }

  display() {
    this.table.forEach((values, index) => {
      const chainedValues = values.map(
        ([playerName, playerScore, playerUniqueId]) =>
          `\n[Name: ${playerName}, Score: ${playerScore}, Unique Id: ${playerUniqueId}]`
      );
      console.log(`${index}: ${chainedValues}`);
    });
  }
}

let myTable = new HashTable();

function promptBox1() {
  const promptOptions1 = Number(
    prompt(
      `Please enter one of the provided options to proceed.. \n\n 1. Capture Score \n 2. Get Score \n 3. Done`
    )
  );
  if (promptOptions1 === 1) {
    promptBox2();
  } else if (promptOptions1 === 2) {
    promptBox3();
  } else if (promptOptions1 === 3) {
  } else {
    alert("Not a valid input. Please write the provided numbers only.");
    promptBox1();
  }
}

function promptBox2() {
  let name = prompt("Name:").trim();
  let score = prompt("Score:").trim();
  let uniqueId = prompt("Unique Id:").trim();
  if (name !== "" && score !== "" && uniqueId !== "") {
    console.log(myTable.setPlayer(name, score, uniqueId));
    myTable.display();
    promptBox1();
  } else {
    alert("All fields are mandatory to fill.");
    console.log("All fields are mandatory to fill.");
    promptBox2();
  }
}

function promptBox3() {
  let searchPlayerName = prompt("Enter player name:");
  console.log(myTable.get(searchPlayerName));
  promptBox1();
}
