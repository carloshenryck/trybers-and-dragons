import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static instanceCounter = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.instanceCounter += 1;
  }

  get energyType(): string {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger.instanceCounter;
  }
}

export default Ranger;