export class Nodes {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}
export class DoubleNodes extends Nodes {
  constructor(element) {
    super(element);
    this.prev = undefined;
  }
}
export function defaultEquals(a, b) {
  return a === b;
}
export const Compare = {
  LESS_THAN: -1,
  EQUALS: 0,
  BIG_THAN: 1,
};

export function defaultCompares(a, b) {
  if (a === b) return 0;
  return a < b ? Compare.LESS_THAN : Compare.BIG_THAN;
}
