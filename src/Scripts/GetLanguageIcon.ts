import EnIcon from "../components/icons/EN.astro";
import EsIcon from "../components/icons/ES.astro";
import FrIcon from "../components/icons/FR.astro";

interface IconMapping {
    [key: string]: any;
}
const iconMapping: IconMapping = {
    en: EnIcon,
    es: EsIcon,
    fr: FrIcon
};

const defaults: { [key: string]: string } = {
    fr: 'FR',
    en: 'US',
    es: 'ES',
};

export const getLangIcon = (locale: string) => {
    const split = locale.toUpperCase().split(/-|_/);
    let lang = split.shift();
    const code = split.pop();

    if (!lang) {
        return '';
    }

    if (!code || !/^[A-Z]{2}$/.test(code)) {
        lang = defaults[lang.toLowerCase()];
    }

    if (!lang) {
        return '';
    }

    const iconComponent = iconMapping[lang.toLowerCase()];
    return iconComponent ? iconComponent : null;
}
