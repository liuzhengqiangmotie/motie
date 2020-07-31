import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);
// 通过选项创建 VueI18n 实例
var i18n = new VueI18n({
    locale: "zh",
    messages: {
        en: require("./en.json"),
        zh: require("./zh.json"),
    },
});
export var setLanguage = function (lan) {
    i18n.locale = lan;
};
var DEFAULT_LANG = "zh";
setLanguage(DEFAULT_LANG);
export default i18n;
//# sourceMappingURL=index.js.map