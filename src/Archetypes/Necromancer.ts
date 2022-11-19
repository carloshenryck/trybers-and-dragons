import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static instanceCounter = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.instanceCounter += 1;
  }

  get energyType(): string {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.instanceCounter;
  }
}

export default Necromancer;