
const goods = [

    ["Apples", "fruit"],
 
    ["Milk 3.2%", "dairy products"],
 
    ["Potato", "vegetables"],
 
    ["Brinjal", "vegetables"],
 
    ["Mango", "fruit"],
 
    ["Cheese", "dairy products"]
 
 ]
const categorizedGoods = {}
 for(const [item, category] of goods){
    if (!categorizedGoods[category]){
        categorizedGoods[category] = []
    }
    categorizedGoods[category].push(item);
 }

 for ( const category in categorizedGoods) {
    console.log(category.toLocaleUpperCase());
    console.log(categorizedGoods[category].join('\n'));
    console.log('\n')
 }