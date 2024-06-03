import React, { useState,useEffect } from 'react'
import '../../sass/navbar.scss'
import { useTranslation } from 'react-i18next';
import { CiLocationOn } from "react-icons/ci";
import { IoSearch, IoPersonOutline, IoCartOutline  } from "react-icons/io5";
import { FaListUl, FaRegHeart } from "react-icons/fa";



function Navbar() {
    const [lang, setLang] = useState(localStorage.getItem("i18nextLng") || "uz")

    useEffect(() => {
        i18n.changeLanguage(lang)
    },[lang])
    let {t, i18n} = useTranslation()
    const [cat, setCat] = useState(false)
  return (
    <>
        <div className='nav'>
            <div className="nav__top">
                <div className='nav__top__loc'>
                    <div>
                        <CiLocationOn/>
                        <p>{t("nav-top.location")}:</p>
                        <select name="" id="">
                            <option value="">Tashkent</option>
                            <option value="">Chirchiq</option>
                        </select>
                    </div>
                    <p>{t("nav-top.pickup")}</p>
                </div>
                <p className='nav__top__offer'>{t("nav-top.offer")}</p>
                <div className='nav__top__sqm'>
                    <p>{t('nav-top.sell')}</p>
                    <p>{t('nav-top.questions')}</p>
                    <p>{t('nav-top.order')}</p>
                    <select value={lang} name="" id="" onChange={e => setLang(e.target.value)}>
                        <option value="uz">Uzbek</option>
                        <option value="en">English</option>
                    </select>
                </div>
            </div>

            <div className='nav__mid'>
                <h2>uzum market</h2>
                <button className="openbtn" onClick={() => setCat(!cat)}><FaListUl/> Catalog</button>
                {
                    cat ? 
                    <div className='nav__mid__cats'>
                        <p>{t("catalogs.plan")}</p>
                        <p>{t("catalogs.sale")}</p>
                        <p>{t("catalogs.cooling")}</p>
                        <p>{t("catalogs.pool")}</p>
                        <p>{t("catalogs.electr")}</p>
                        <p>{t("catalogs.appli")}</p>
                        <p>{t("catalogs.cloth")}</p>
                        <p>{t("catalogs.shoes")}</p>
                        <p>{t("catalogs.acces")}</p>
                        <p>{t("catalogs.bac")}</p>
                        <p>{t("catalogs.health")}</p>
                        <p>{t("catalogs.h-pro")}</p>
                    </div>
                    :
                    <></>
                }

                <form action="">
                    <input type="text" placeholder={t("nav-mid.inp")}/>
                    <div>
                        <IoSearch style={{width: 25, height: 25}}/>
                    </div>
                </form>

                <div className='nav__mid__btns'>
                    <IoPersonOutline style={{width: 25, height: 25}}/>
                    <p> {t("nav-mid.log")}</p>
                </div>
                <div className='nav__mid__btns'>
                    <FaRegHeart style={{width: 25, height: 25}}/>
                    <p> {t("nav-mid.fav")}</p>
                </div>
                <div className='nav__mid__btns'>
                    <IoCartOutline  style={{width: 25, height: 25}}/>
                    <p> {t("nav-mid.cart")}</p>
                </div>
                
            </div>

            {
                !cat ?
                <div className='nav__bot'>
                    <p>{t("catalogs.plan")}</p>
                    <p style={{width: 100}}>{t("catalogs.sale")}</p>
                    <p style={{width: 160}}>{t("catalogs.cooling")}</p>
                    <p style={{width: 130}}>{t("catalogs.pool")}</p>
                    <p style={{width: 100}}>{t("catalogs.electr")}</p>
                    <p>{t("catalogs.appli")}</p>
                    <p style={{width: 70}}>{t("catalogs.cloth")}</p>
                    <p style={{width: 100}}>{t("catalogs.shoes")}</p>
                    <p>{t("catalogs.acces")}</p>
                    <p style={{width: 160}}>{t("catalogs.bac")}</p>
                    <p style={{width: 80}} onClick={() => setCat(!cat)}>{t("catalogs.more")}</p>
                </div>
                :
                <></>
            }
        </div>
    </>
  )
}

export default Navbar