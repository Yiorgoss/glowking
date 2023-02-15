import {useState } from 'react'
import {useRouter} from 'next/router'

import {LOCALE} from '@cTypes/inputTypes'



const LangSwitcher = () => {

    const router = useRouter()
    const [locale, setLocale] = useState<LOCALE>(router.locale!.split("-")[0] as LOCALE)

    const languages: {[key:string]: string} = {
        en: "English",
        gr: "Ελληνικά"
    }

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const locale = event.target.value as LOCALE

        setLocale(locale)
        router.push(router.pathname, router.pathname, { locale })
    }

    return (
        <select value={locale} onChange={handleChange}>
            {Object.keys(languages).map((lang, i) => {
                return (
                    <option value={lang} key={i}>
                        {languages[lang]}
                    </option>
                )
            })}
        </select>
    )


}

export default LangSwitcher
