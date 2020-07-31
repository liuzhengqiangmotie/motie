import Vue from "vue";
import Vuex from "vuex";
import ActionHelper from "./ActionHelper";
import { setLanguage } from "../locales";

Vue.use(Vuex);

const store = new Vuex.Store({
    // 共享数据
    state: {
        actionHelper: new ActionHelper(),
        showEdit: false,
        language: "zh",
        transMemo: null,
        filterCateId: -1, // 筛选分类
    },
    // 共享方法
    mutations: {
        changeLanguage(state: any, lan: string) {
            console.log("language changed to :", lan);
            state.language = lan;
            setLanguage(lan);
        },
        // showEdit page
        showEdit(state: any, newMemo: any) {
            state.transMemo = newMemo;
            state.showEdit = true;
        },
    },
});

export default store;
