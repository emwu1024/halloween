import { categories } from '../content/categories.ts';

export function seedToValue(seed: string) {
  let runningTotal = 0;
  console.log('Seed Is: ' + seed);
  for (let i = 0; i < seed.length; i++) {
    console.log('Current Character: ' + seed[i]);
    runningTotal += seed.charCodeAt(i);
  }
  console.log('Final Running Total: ' + runningTotal);
  return runningTotal;
}

// NOTE: Round is 1-indexed based off of human convention so guests aren't weirded out by 0-indexing.
// NOTE: Algorithm finds the remainder of the seedValue divided by the length of the given category.
export function valueToCategory(seedValue: number, round: number) {
  console.log('Categories: ');
  console.log(categories);
  console.log('Round: ' + round);

  const category =
    categories[Object.keys(categories)[round - 1] as keyof typeof categories];
  console.log('Category Selected: ' + category);

  const selectedItem = category[seedValue % category.length];
  console.log('\n\nItem Is: ' + selectedItem);
  return selectedItem;
}

// returns the array of categories that corresponds to the givne round
export function getCategoryFromRound(round: number) {
  return categories[
    Object.keys(categories)[round - 1] as keyof typeof categories
  ];
}
