import i18n from 'i18next'; 
import { initReactI18next } from 'react-i18next';

import enJson from './translations/en.json'
import frJson from './translations/fr.json'
import ptBRJson from './translations/ptBR.json'

export default i18n.use(initReactI18next).init({
  fallbackLng: 'ptBR',
  interpolation: {
    escapeValue: false
  },
  resources: {
    en: enJson,
    fr: frJson,
    ptBR: ptBRJson
  }
})