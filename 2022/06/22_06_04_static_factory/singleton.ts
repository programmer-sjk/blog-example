class Singleton {
  private static singleton: Singleton;

  private constructor() {}

  static getInstance(): Singleton {
    if (this.singleton === null) {
      this.singleton = new Singleton();
    }

    return this.singleton;
  }
}
