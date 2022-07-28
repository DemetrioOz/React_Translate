import br from '../../assets/ptBR.svg'
import fr from '../../assets/fr.svg'
import en from '../../assets/en.svg'
import { t } from 'i18next'
import './style.css'
import { useTranslation } from 'react-i18next'

const languageOptions = [
  {
    name: "Português",
    value: "ptBR",
    flag: br
  },
  {
    name: "English",
    value: "en",
    flag: en
  },
  {
    name: "Français",
    value: "fr",
    flag: fr
  }
]

export const LanguageSwitch = () => {
  const { t, i18n } = useTranslation()
  return(
    <div className='languageSwtich'>
      <span>{t("selectLanguage")}</span>
      {
        languageOptions.map((language) => (
          <button
          key={language.value}
            onClick={() => {
              i18n.changeLanguage(language.value)
            }}
          >
            <img src={language.flag} alt={language.name} />
            <span>{language.name}</span>
          </button>
        ))
      }
    </div>
  )
}