function compareArrays(arr1, arr2) {
  
  const result = arr1.every((element, i) => 
         (arr1.length === arr2.length && element === arr2[i]));
  return result;
  }

  
function getUsersNamesInAgeRange(users, gender) {
    let result = users
    .filter(element => element.gender === gender)
    .map(element => element = element.age)
    .reduce((acc, element, i, ages) => {
      if (i != ages.length - 1) {
        return acc + element;
      } else {
        return (acc + element) / ages.length;
      }
    }, 0);
      return result;
  }