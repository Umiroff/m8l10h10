import React, { useEffect, useState } from 'react'
import '../../sass/products.scss'
import { useTranslation } from 'react-i18next'



function Products() {
    let {t, i18n} = useTranslation()
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch("https://dummyjson.com/products")
        .then((res) => res.json())
            .then((json) => {
                setData(json.products)
            });
    },[])

    let pros = data?.map(el => (
        <div key={el.id} className='pros__items__card'>
            
            <img src={el.images[0]} alt="" />
            <p className='pros__items__card__title'>{el.title}</p>
            <p className='pros__items__card__buy'>1 buy</p>
            <s className='pros__items__card__oldprice'>{el.price-1} UZS</s>
            <p className='pros__items__card__price'>{el.price} UZS</p>
        </div>
    ))
    
  return (
    <>
        <div className='pros'>
            <p className='pros__title'>{t("products.products")}</p>
            <div className='pros__items'>
                {pros}
            </div>
        </div>
    </>
  )
}

export default Products