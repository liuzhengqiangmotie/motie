import DataHelper from "./DataHelper";
import ItemData from "../model/ItemData";
// 负责处理数据
var ActionHelper = /** @class */ (function () {
    function ActionHelper() {
        this.dataHelper = new DataHelper("memoData", "id");
        this.memoList = this.readData();
    }
    // 读取本地数据后转为ItemData类型数组后设置给memolist
    ActionHelper.prototype.readData = function () {
        var arr = this.dataHelper.readData();
        var arrItem = arr.map(function (e) {
            var id = e.id, cateId = e.cateId, title = e.title, content = e.content, createTime = e.createTime;
            var item = new ItemData(id, cateId, title, content);
            // fixed time
            item.createTime = createTime;
            return item;
        });
        return arrItem;
    };
    // 新增笔记
    ActionHelper.prototype.add = function (item) {
        // 获取当前应该存入的id
        item.id = this.dataHelper.getNewId();
        this.memoList.push(item);
        this.dataHelper.saveData(this.memoList);
        return item.id;
    };
    // 修改笔记
    ActionHelper.prototype.edit = function (item) {
        debugger;
        var editItem = this.memoList.find(function (e) { return e.id === item.id; });
        if (editItem) {
            editItem.cateId = item.cateId;
            editItem.title = item.title;
            editItem.content = item.content;
            this.dataHelper.saveData(this.memoList);
            return true;
        }
        return false;
    };
    // 删除笔记
    ActionHelper.prototype.remove = function (id) {
        var delIndex = this.memoList.findIndex(function (e) { return e.id === id; });
        if (delIndex > -1) {
            this.memoList.splice(delIndex, 1);
            this.dataHelper.saveData(this.memoList);
            return true;
        }
        return false;
    };
    return ActionHelper;
}());
export default ActionHelper;
//# sourceMappingURL=ActionHelper.js.map