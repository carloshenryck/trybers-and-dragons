import Race from './Race';

class Halfling extends Race {
  readonly _maxLifePoints: number;
  private static instanceCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.instanceCounter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling.instanceCounter;
  }
}

export default Halfling;