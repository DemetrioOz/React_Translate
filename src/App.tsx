import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './App.css'
import { LanguageSwitch } from './components/languageSwitch'

function App() {
  const { t } = useTranslation()
  return (
    <div className="App">
      <LanguageSwitch />
      <header className="App-header">
        <h1>{t("welcome")}</h1>
        <h2>{t("find")}</h2>
      </header>
    </div>
  )
}

export default App
