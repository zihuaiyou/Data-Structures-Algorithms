export let Compare = {
    LESS_THAN: -1,
    BIG_THAN: 1,
  };
  
  export function defaultCompares(a, b) {
    if (a === b) return 0;
    return a < b ? Compare.LESS_THAN : Compare.BIG_THAN;
  }

  export function swap(array,a,b){
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
  }

  export function reverseCompare(compareFn){
    return (a,b) => compareFn(b,a);
  }
  