export class Nodes{
    constructor(element){
        this.element = element;
        this.next = undefined;
    }
}

export function defaultEquals(a,b){
    return a === b;
}

export class DoubleNodes extends Nodes {
    constructor(element) {
        super(element);
        this.prev = undefined;
    }
}