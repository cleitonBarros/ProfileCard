import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import enJson from '../../locale/en.json'
import frJson from '../../locale/fr.json'
import ptJson from '../../locale/pt.json'
import esJson from '../../locale/es.json'

let languagePattern = navigator.language


const isValid = () => languagePattern === 'pt-BR'  ?  'pt' : 'en'

i18n.use(initReactI18next).init({
    resources:{
        pt:ptJson,
        en:enJson,
        fr:frJson,
        es:esJson,
    },


    fallbackLng: isValid(),
    interpolation:{
        escapeValue:false,
    },
})
export default i18n