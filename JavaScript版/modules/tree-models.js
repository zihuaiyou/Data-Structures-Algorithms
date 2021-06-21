export default class Node {
  constructor(key) {
    this.left = null;
    this.right = null;
    this.key = key;
  }
}

export let Compare = {
  LESS_THAN: -1,
  BIG_THAN: 1,
};

export function defaultCompares(a, b) {
  if (a === b) return 0;
  return a < b ? Compare.LESS_THAN : Compare.BIG_THAN;
}

export class RedBlackNode extends Node {
  constructor(key) {
    super(key);
    this.parent = null;
    this.color = Color.RED;
  }
  isRed(){
    return this.color === Color.RED;
  }
}

export const Color = {
  RED: 0,
  BLACK: 1,
};
