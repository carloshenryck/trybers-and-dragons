import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  private static instanceCounter = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.instanceCounter += 1;
  }

  get energyType(): string {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage.instanceCounter;
  }
}

export default Mage;