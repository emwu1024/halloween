# Halloween Game

This project is made to help anyone host a real life version of the Spy Game in real life. The game has been amended to suit our theme, we're going for a Knives Out kinda vibe.

## The Game

1. Players will draw 3(?) random cards from 3(?) decks upon arrival:
   1. A character - Players need to get into the role of their character
   2. A role (Murderer or Bystander) - These cards will have 4(?) seed texts which players will input into this application to retrieve the relevant item from the category. Murderers will have different seeds to Bystanders.
   3. ?
2. Throughout the night during set intervals, players should pull up the application and enter the seed into the

## The Logistics

1. Since this game is meant to be deterministic and yet seemingly random so the hosts can play too the mechanic involves n hard coded categories with a give number of items per category.
2. Seeds will be used to randomise the categories. Current algorithm in mind involves a seed that is max 12(?) chars long and calculating the sum of its ascii or unicode numbers and then finding the modulus when divided by the number of items in the category. The only issue is the potential for clashes so there has to be a way to check that the murderer seed and bystander seeds don't map to the same item.
