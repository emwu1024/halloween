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
export function valueToCategory(seedValue: number, round: number) {
  console.log('Categories: ');
  console.log(categories);
  console.log('Round: ' + round);

  const category =
    categories[Object.keys(categories)[round - 1] as keyof object];
  console.log('Category Selected: ' + category);

  return category;
}
