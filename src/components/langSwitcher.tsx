import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'

import {LOCALE} from '@cTypes/inputTypes'

const LangSwitcher = ({className}:{className?:string}) => {

    const router = useRouter()
    const [locale, setLocale] = useState<LOCALE>(router.locale!.split("-")[0] as LOCALE)

    const languages: {[key:string]: string} = {
        en: "En",
        el: "Ελ"
    }

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const locale = event.target.value as LOCALE

        setLocale(locale)
        router.push(router.pathname, router.pathname, { locale })
    }

    return (
        <select className={`bg-inherit focus:outline-none text-lg md:text-sm ${className}`} value={locale} onChange={handleChange}>
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
