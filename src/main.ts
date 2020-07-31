import Vue from 'vue'
import App from './App.vue'

import i18n from "./locales";
import store from "./store";
import moment from "moment";
import {
    MessageBox,
    Message,
    Row,
    Col,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Button,
    Badge,
    Card,
    Tag,
    Form,
    FormItem,
    Input,
    Select,
    Option,
    Dialog,
    Tooltip,
} from "element-ui";

Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;
Vue.use(Row);
Vue.use(Col);
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);
Vue.use(Button);
Vue.use(Badge);
Vue.use(Card);
Vue.use(Tag);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(Dialog);
Vue.use(Tooltip);

Vue.filter("formatDate", (value: number) => {
    if (!value) return "";
    return moment(value).format("YYYY/MM/DD HH:mm:ss");
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
    i18n,
    store,
}).$mount('#app')
