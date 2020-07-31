import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);
// 通过选项创建 VueI18n 实例
const i18n = new VueI18n({
    locale: "zh", // 设置地区
    messages: {
        en: require("./en.json"),
        zh: require("./zh.json"),
    }, //设置地区信息
});

export const setLanguage = (lan: string) => {
    i18n.locale = lan;
};
const DEFAULT_LANG = "zh";

setLanguage(DEFAULT_LANG);

export default i18n;
