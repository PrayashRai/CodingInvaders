function totalPrice(items, costs) {
  let orders = [];
  let maxCost = 0;
  let maxIndex = 0;
  for (let i = 0; i < items.length; i++) {
    let order = { [items[i]]: costs[i] };
    orders.push(order);
    if (costs[i] > maxCost) {
      maxCost = costs[i];
      maxIndex = i;
    }
  }
  console.log({orders: orders[maxIndex]});
}

totalPrice(["item1", "item2", "item3"], [200, 400, 260]);
