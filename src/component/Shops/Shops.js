import { useEffect, useState } from 'react';
import './Shops.css'
import Aproduct from '../Aproduct/Aproduct';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/fakedb';
const Shops = () => {
    const [products, setProducts] = useState([])
    const [cart,setcart]=useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handalAddToCart=(product)=>{
        console.log(product);
        const newCart=[...cart,product];
        setcart(newCart);
        addToDb(product.id);
    }

    return (
        <div className='product-container'>
            <div className='shoo-container'> 
            {
                     products.map(product=><Aproduct
                     key={product.id}
                      product={product}
                      handalAddToCart={handalAddToCart}
                    ></Aproduct>)
            } 
            </div>       
            <div className='cart-container'>
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shops;