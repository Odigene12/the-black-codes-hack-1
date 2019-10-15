# Grocery List
These Challenges will help you learn some of the basic problems you might see on a white board in an interview. This challenge builds partly on some of the skills used last month but instead of manipulating arrays and strings we will manipulate objects and lists.

## The Challenge
For this challenge we will begin with a grocery list. You will be manipulating this list to help buy groceries.

```
{
    "milk": "false",
    "eggs": "false",
    "batteries": "false",
    "bread": "false",
    "orange juice": "false",
    "grape juice": "false",
    "bananas": "false",
    "pears": "false",
    "apples": "false",
    "American cheese": "false",
    "Cheddar cheese": "false",
    "Shredded cheese": "false"
}
```

<hr>

# Level 1
Each of the items in the grocery list has a boolean value of false. Write an app to help a shopper keep track of their items. Allow a shopper to change the value to true when they have selected the item. A value of false means they do not have the item and a value of true means it is in their cart.

<hr>

# Level 2
Adding to level 1 sort the items by the boolean value so that the items left (false) are at the top of the display and the items obtained (true) are at the bottom. Update the list as the shopper selects changes a value.

<hr>

# Level 3
Help the shopper further by grouping the items so they can find them easier in the store. Create a nested list or object with values for cheeses, fruits, etc. Then sort the items in the nested lists to only show the items not in the cart (false).

## A step further
Add prices to the items and track the amount for the shopper. To really be impressive calculate the taxes as well.