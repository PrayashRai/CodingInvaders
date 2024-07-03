let friendsArray = [
    { id: 1, name: "Abhay", amount: 2000 },
    { id: 2, name: "Bunty", amount: 3000 },
    { id: 3, name: "Chinki", amount: 5900 },
    { id: 4, name: "Dimple", amount: 1000 },
    { id: 5, name: "Erica", amount: 2370 }
  ];
  
  // Function to calculate the sum of amounts using reduce
  function calculateTotalAmount(friends) {
    let totalAmount = friends.reduce((accumulator, friend) => accumulator + friend.amount, 0);
    return totalAmount;
  }
  
  // Function to sort the friendsArray in ascending order based on amount
  function sortFriendsArrayAscending(friends) {
    let sortedArray = friends.slice().sort((a, b) => a.amount - b.amount);
    return sortedArray;
  }
  
  // Function to sort the friendsArray in descending order based on amount
  function sortFriendsArrayDescending(friends) {
    let sortedArray = friends.slice().sort((a, b) => b.amount - a.amount);
    return sortedArray;
  }
  
  // Function to find the friend with the largest amount
  function findFriendWithLargestAmount(friends) {
    let friend = friends.reduce((largestFriend, currentFriend) =>
      currentFriend.amount > largestFriend.amount ? currentFriend : largestFriend
    );
    return friend;
  }
  
  // Function to find the friend with the smallest amount
  function findFriendWithSmallestAmount(friends) {
    let friend = friends.reduce((smallestFriend, currentFriend) =>
      currentFriend.amount < smallestFriend.amount ? currentFriend : smallestFriend
    );
    return friend;
  }
  
  
  console.log("Total Amount:", calculateTotalAmount(friendsArray));
  console.log("Friends Sorted in Ascending Order:", sortFriendsArrayAscending(friendsArray));
  console.log("Friends Sorted in Descending Order:", sortFriendsArrayDescending(friendsArray));
  console.log("Friend with Largest Amount:", findFriendWithLargestAmount(friendsArray));
  console.log("Friend with Smallest Amount:", findFriendWithSmallestAmount(friendsArray));
  