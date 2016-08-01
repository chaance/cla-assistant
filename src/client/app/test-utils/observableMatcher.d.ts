declare module jasmine {
  interface Matchers {
    toComplete(): boolean;
    toEmitValues(...values: any[]): boolean;
    toFailWithError(error: any): boolean;
  }
}