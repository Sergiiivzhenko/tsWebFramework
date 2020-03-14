export class Attributes<T> {
  constructor(private data: T) {}

  get(propName: string): (number | string) {
    return this.data[propName];
  }

  set(update: T): void {
    this.data = {
      ...this.data,
      ...update,
    };
  }
}
