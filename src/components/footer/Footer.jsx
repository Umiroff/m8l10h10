import React from 'react'
import '../../sass/footer.scss'
import { useTranslation } from 'react-i18next'

function Footer() {
    let {t, i18n} = useTranslation()
  return (
    <>
        <div className='footer'>
            <div className='footer__buyers'>
                <p>{t("footer.about")}</p>
                <button>{t("footer.pickup")}</button>
                <br />
                <button>{t("footer.vac")}</button>
            </div>
            <div className='footer__partners'>
                <p>{t("footer.forusers")}</p>
                <button>{t("footer.connect")}</button>
                <br />
                <button>{t("footer.questions")}</button>
            </div>
            <div className='footer__company'>
                <p>{t("footer.forent")}</p>
                <button>{t("footer.sell")}</button>
                <br />
                <button>{t("footer.sellerlog")}</button>
            </div>
            <div className='footer__social'>
                <p>{t("footer.social")}</p>
                <button>Telegram</button>
                <br />
                <button>Instagram</button>
            </div>
        </div>
    </>
  )
}

export default Footer