import Vue from "vue";
import Vuex from "vuex";
import ActionHelper from "./ActionHelper";
import { setLanguage } from "../locales";
Vue.use(Vuex);
var store = new Vuex.Store({
    // 共享数据
    state: {
        actionHelper: new ActionHelper(),
        showEdit: false,
        language: "zh",
        transMemo: null,
        filterCateId: -1,
    },
    // 共享方法
    mutations: {
        changeLanguage: function (state, lan) {
            console.log("language changed to :", lan);
            state.language = lan;
            setLanguage(lan);
        },
        // showEdit page
        showEdit: function (state, newMemo) {
            state.transMemo = newMemo;
            state.showEdit = true;
        },
    },
});
export default store;
//# sourceMappingURL=index.js.map