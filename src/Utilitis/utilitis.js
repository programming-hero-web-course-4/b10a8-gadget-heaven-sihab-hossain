import toast from "react-hot-toast"
// cart data added
const getData = () => {
    const all = localStorage.getItem('addCart')
    if (all) {
        const addCart = JSON.parse(all)
        return addCart

    } else {

        return []
    }
}


const addToCart = gadgets => {
    const addCart = getData()
    const isExist = addCart.find (item => item.product_id == gadgets.product_id)
    if(isExist) return toast.error('alredy added')
    
    addCart.push(gadgets)
    localStorage.setItem('addCart', JSON.stringify(addCart))
    toast.success('Successfully Added on cart')
}

// wishlish data added

const getWishListData = () => {
    const all = localStorage.getItem('addWish')
    if (all) {
        const addCart = JSON.parse(all)
        return addCart

    } else {

        return []
    }
}


const addToWish = gadgets => {
    const addCart = getWishListData()
    const isExist = addCart.find (item => item.product_id == gadgets.product_id)
    if(isExist) return toast.error('alredy added')
    
    addCart.push(gadgets)
    localStorage.setItem('addWish', JSON.stringify(addCart))
    toast.success('Successfully Added on WishList')
}
export {
    addToCart,
    getData,
    addToWish,
    getWishListData
}