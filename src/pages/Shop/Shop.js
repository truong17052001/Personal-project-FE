import classNames from 'classnames/bind';
import styles from './Shop.module.scss';
import React, { useEffect, useState } from 'react';
import { getProduct } from '~/api/api';
//component
import CardProduct from '~/components/CardProduct/CardProduct';
import Breadcrumb from '~/components/Breadcrumb/Breadcrumb';

const cx = classNames.bind(styles);

function Shop() {
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        async function loadProduct(){
            const data= await getProduct();
            setProduct(data);
        }
        loadProduct();
    },[])
    return (
        <div className={cx('wrapper')}>
            <Breadcrumb>SHOP</Breadcrumb>
            <div className={cx('products')}>
            {product.map((products,index) => {
                return <CardProduct name={products.ProductName} des={products.Description} price={products.Price} ></CardProduct>;
            })}
            </div>
        </div>
    );
}

export default Shop;
