abstract class Archetype {
  readonly name: string;
  readonly special: number;
  readonly cost: number;

  constructor(name:string) {
    this.name = name;
    this.special = 0;
    this.cost = 0;
  }

  abstract get energyType(): string;

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }
}

export default Archetype;