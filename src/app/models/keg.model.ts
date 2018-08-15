export class Keg {
  public emptiness: boolean = false;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: string, public pintsRemaining: number) { }
}
