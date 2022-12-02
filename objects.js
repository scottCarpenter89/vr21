let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "https://bit.ly/2ysFran"
  };

  programming.languages.push("Go");

  console.log(programming.languages);

  programming.difficulty = 7;
  console.log(programming.difficulty);

  delete programming.jokes;
  console.log(programming);
  
programming.isFun = true;
console.log(programming);