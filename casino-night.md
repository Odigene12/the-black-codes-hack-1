# Casino Night
You’ve been asked to create a suite of basic casino style mini games for a new RPG. These games will use a currency earned though doing tasks in the RPG called Locts (not real money).

## Challenge
For this challenge we will be dealing with some math, random number generation, and pattern recognition. Feel free to ask for help if having trouble with the math side of any of the challenges. For simplicities sake have all players start with a set number of Locts (50 is a good start).

You will be presented with the goal and rules of the game and left to your own devices to design your code to meet those requirements.
<hr>

# Level 1
One of the first random number generator tasks we learn is to build a game of dice or craps. In the game you have two die that can be rolled each with the possibility of rolling a number between 1 and 6.

If a player rolls a combined score of 7 on their first turn then they win. If they roll a combine score of 2, 3, or 12 then they “crap out” and lose. If they roll any other number then they keep rolling trying to hit that number again. At this point in time 7 becomes the enemy and hitting it loses the game, else they keep rolling until they hit the first number.

## A Step Further
Going a step further add betting to the game. Allow players to bet their Locts on whether or not they will win. They pay out should be 2:1. So if a person bets 2 Locts they will win and then win they get 4 locts in their store. Also allow them to bet on which number will be rolled.
<hr>

# Level 2
Next you’ve been asked to create an in game version of blackjack (21). The idea here is to get as close to 21 without going over (busting).

For this number cards count as the number on the card 2-10. Face cards (Jack, Queen, King) count as 10 each and an Ace can count as 11 or 1.

In most casinos players play against the dealer so you’ll need to deal card not only to the player but create logic for the computer to play against them.

Initially two cards are dealt and the play may place bets before the cards are dealt. Pay out is 2:1. Once cards are dealt to both player and dealer the player may choose to remain or “hit” take another card. Keep track of the points the player and dealer has so that if they go over 21 the other wins.

## A Step Further
Going even further add graphics to your game to display cards. If it is a console game use ASCII art to display cards.

Typically the top card is shown so show the dealer’s top card. Add logic for the dealer based on the player’s top card so they “hit” if it is high enough and their cards are within a certain range.
<hr>

# Level 3
Texas Hold-em is a variation of poker where each player is delt 2 cards then share a center group of 5 cards to make the best hand out of the 2 cards they have and 3 of the 5 shared cards.

Each player must bet the same as the other players so if one raises the bet then the other players when it is their turn must at least bet the same amount as the largest bet to stay in the game. If a player drops out all Locts previously bet in that game are forfeit to the winning player.

Play starts with an initial bet then the first two cards are dealt to each player. This is followed by a round of betting. Each player may increase the bet, stay (not increase the bet), or fold (forfeit the turn and previous bets). This continues around the group until no new bets are place or need to be met.

Next the first three community cards are placed down. After that another round of betting begins. Next the 4th community card is show followed by another round of betting. Finally the last card is shown and the final round of betting begins.

Design the game so that there are 4 computer generated players and the fifth is the player of the mini game.

## A Step Further
Going a step further add on option to make the game 5 Card Draw where each player is dealt 5 cards and then a round of betting ensues. After that round each player may trade in up to 3 cards, 4 if the one they keep is an Ace. Then the final round of betting.