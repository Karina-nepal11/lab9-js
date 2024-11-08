// Q1: Player Class with Level and Points System
class Player {
  constructor(name) {
    this.name = name;
    this.lvl = 1;       // Level starts at 1 by default
    this.points = 0;    // Points start at 0 by default
  }

  // Method to add experience points and level up if needed
  gainXp(points) {
    this.points += points;
    while (this.points >= 10) { // Level up when points reach 10
      this.points -= 10;
      this.lvl += 1;
    }
  }

  // Method to display player's stats
  describe() {
    return `Player: ${this.name}, Level: ${this.lvl}, Points: ${this.points}`;
  }
}

// Example usage
const player1 = new Player("Alex");
player1.gainXp(7);
console.log(player1.describe()); // Expected: Player: Alex, Level: 1, Points: 7
player1.gainXp(5);
console.log(player1.describe()); // Expected: Player: Alex, Level: 2, Points: 2

  