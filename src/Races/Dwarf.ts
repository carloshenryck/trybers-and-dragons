import Race from './Race';

class Dwarf extends Race {
  readonly _maxLifePoints: number;
  private static instanceCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.instanceCounter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf.instanceCounter;
  }
}

export default Dwarf;