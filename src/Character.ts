import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import Energy from './Energy';
import Archetype, { Mage } from './Archetypes';

import getRandomInt from './utils';

class Character implements Fighter {
  readonly race: Race;
  readonly archetype: Archetype;
  private _maxLifePoints: number;
  private _strength: number;
  private _lifePoints: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this.race = new Elf(name, this._dexterity);
    this.archetype = new Mage(name);
    this._maxLifePoints = this.race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { 
      type_: this.archetype.energyType, 
      amount: getRandomInt(1, 10), 
    };
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  get dexterity(): number {
    return this._dexterity;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense > 0 
      ? attackPoints - this._defense
      : 1;
      
    this._lifePoints = this._lifePoints - damage > 0 
      ? this._lifePoints - damage
      : -1;

    return this._lifePoints;
  }
  
  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
  
  levelUp(): void {
    const lifePoints = this._maxLifePoints + getRandomInt(1, 10);
    this._maxLifePoints = lifePoints > this.race.maxLifePoints 
      ? this.race.maxLifePoints
      : lifePoints;
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: Fighter): void {
    const damage = enemy.defense + (this._strength * 1.5);
    enemy.receiveDamage(damage);
  }
}

export default Character;