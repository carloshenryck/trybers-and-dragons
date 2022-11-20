import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    private fighter: Fighter,
    private monsters: SimpleFighter[],
  ) {
    super(fighter);
  }

  fight(): number {
    this.monsters.every((monster) => {
      while (this.player.lifePoints > 0 && monster.lifePoints > 0) {
        this.player.attack(monster);
        if (monster.lifePoints < 0) return false;
        monster.attack(this.player);
      }
      return true;
    });

    return super.fight();
  }
}

export default PVE;