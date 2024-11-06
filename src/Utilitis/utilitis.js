// const getData = () =>{
//     const all = localStorage.getItem('addCart')

// }


const addToCart = gadgets => {
 const addCart = []
 addCart.push(gadgets)
 localStorage.setItem('addCart', JSON.stringify(addCart) )
}
export {addToCart}
