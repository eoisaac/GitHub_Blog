import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import enUS from 'date-fns/locale/en-US'

const locales = {
  'en-US': enUS,
  'pt-BR': ptBR,
}

type Locale = 'en-US' | 'pt-BR'

export const formateDateRelativeToNow = (locale: Locale, date: Date) => {
  return formatDistanceToNow(date, {
    locale: locales[locale],
    addSuffix: true,
  })
}
