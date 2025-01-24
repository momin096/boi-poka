const getStoredReadList = () => {
    // read list 
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        
        return [];

    }

    
}

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();

    if (storedList.includes(id)) {
        // already exit
        alert('this is already exist');
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
    }
}


const getStoredWishList = () =>{
    const storedWishListStr = localStorage.getItem('wish-list');
    if(storedWishListStr){
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }
    else{
        return [];
    }
}


const addToWishList = (id) =>{
    const storedWishList = getStoredWishList();
    if (storedWishList.includes(id)){
        alert('already exist');
    }
    else{
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr);
    }
}

export { addToStoredReadList , addToWishList }