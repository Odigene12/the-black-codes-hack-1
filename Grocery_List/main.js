var groceryListObject = {
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
};

var listItem = "";

var buildGroceryListAndCart = function (groceryList) {
    $.each(groceryList, function (key, value) {
        value = value === "false" ? false : true;

        if (!value) {
            listItem = "<div id=" + key + "><input id=" + key + " type='checkbox' class='groceryCheckbox' name='item'>" + key + "</div>";
            $("#groceryList").append(listItem)
        } else {
            listItem = "<div id=" + key + "><input type='checkbox' name='item' checked>" + key + "</div>";
            $("#groceryCart").append(listItem);
        }
    });

    bindListEvents();
}

var bindListEvents = function () {
    $("#groceryList input[type=checkbox]").each(function () {
        var item = this;
        $(item).change(function () {
            this.setAttribute("checked", "checked");
            this.checked = true;
            var parentItem = $(item).parent().html();
            var parentItemID = $(item).parent().attr('id');
            var parentItemELement = "div#" + parentItemID;
            console.log(parentItem);
            $("#groceryList").find(parentItemELement).remove()
            $("#groceryCart").append(parentItem);
        })
    });
}

$(document).ready(function () {

    buildGroceryListAndCart(groceryListObject);

});