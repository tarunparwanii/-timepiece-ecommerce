export const popElementOfArray = (currentList) =>{
    if (currentList.length===0) return currentList
    let newList = [...currentList];
    newList.pop();
    return newList;
}