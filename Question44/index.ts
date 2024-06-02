function sandwiches(...ingredients :string[])
{
        console.log("Your Oredered Sandwich contain: ");
    for(let i =0;i<ingredients.length;i++)
        {
                console.log(`${ingredients[i]} `);
        }

}

sandwiches("Cheese");
sandwiches("Cheese","Lettuce","Tomatoes");
sandwiches("Cheese","Lettuce","Origano","Peproni");
sandwiches("Cheese","Lettuce","Chicken","Onion","Bell Pepper");