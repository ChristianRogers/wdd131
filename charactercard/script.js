characterCard = {
  name: "Snortleblat",
  image: "snortleblat.webp",
  class: "Swamp Beast Diplomat",
  level: 8,
  health: 100,
  attacked: function () {
    this.health -= 10;
    if (this.health <= 0) {
      this.health = 0;
    }
    console.log(`${this.name} was attacked! Health is now ${this.health}.`);
    document.getElementById("health").textContent = `Health: ${this.health}`;
  },
  levelUp: function () {
    this.level += 1;
    document.getElementById("level").textContent = `Level: ${this.level}`;
    console.log(`${this.name} leveled up! Level is now ${this.level}.`);
  },
};

img = document.querySelector("img");
img.src = characterCard.image;
img.alt = characterCard.name;

document.querySelector(".name").textContent = characterCard.name;
document.querySelector("#class").textContent = `Class: ${characterCard.class}`;
document.querySelector("#level").textContent = `Level: ${characterCard.level}`;
document.querySelector(
  "#health"
).textContent = `Health: ${characterCard.health}`;

attackButton = document.getElementById("attack-button");
attackButton.addEventListener("click", function () {
  characterCard.attacked();
});

levelUpButton = document.getElementById("level-up-button");
levelUpButton.addEventListener("click", function () {
  characterCard.levelUp();
});
