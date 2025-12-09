# 1DV609-1-pt2 - Poker-Squares game

## About

This repo is the first assignment (part 2) in the course 1DV609 Mjukvarukvalitet and contains an implementation of the game Poker Squares.  

The game is plaid by picking a card from the top of a shuffled deck and placing in a cell of a 5 x 5 board. Certain combinations of cards give points and the combinations are checked both horizontally and vertically. The objective of the game is to get as high score as possible.  

The full list of combinations/points is:  


| Hand | Description | Points |
| -----|-------------|---------|
| Royal Flush | [10, J, Q, K, A] of the same suite|100 |
| Straight Flush |five ranks in sequence of the same suite, for example [ 2, 3, 4, 5, 6] |75 |
| Four of a Kind | four cards of the same rank | 50|
| Full House | three of a kind + a pair |25 |
| Flush | five cards of the same suite, ranks not in sequence |20 |
| Straight | five ranks in sequence, not of the same suite | 15|
| Three of a Kind | three cards of same rank |10 |
| Two Pairs | two different pairs |5 |
| One Pair | two cards of same rank |2 |


If two rules are fulfilled the user get points only for the rule that gives the highest points. For example if both Straight Flush and Flush are fulfilled user will get 75 points. 
When the user has filled all slots the total points should be displayed to the user.
