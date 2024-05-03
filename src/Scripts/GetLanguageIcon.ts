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

var defaults = {
    fr: 'FR',
    en: 'US',
    es: 'ES',
};


export const getLangIcon = (locale: string) => {
    var split = locale.toUpperCase().split(/-|_/);
    var lang = split.shift();
    var code = split.pop();

    if (!/^[A-Z]{2}$/.test(code)) {
        code = defaults[lang.toLowerCase()];
    }

    if (!code) {
        return '';
    }
    const iconComponent = iconMapping[lang.toLowerCase()];
    return iconComponent ? iconComponent : null;
}


