import Race from './Race';

class Elf extends Race {
  readonly _maxLifePoints: number;
  private static instanceCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.instanceCounter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf.instanceCounter;
  }
}

export default Elf;