// DataHelper 负责localStorage操作
var DataHelper = /** @class */ (function () {
    function DataHelper(dataKey, primaryKey) {
        this.dataKey = dataKey;
        this.primaryKey = primaryKey;
    }
    // 读取本地数据,根据dataKey
    DataHelper.prototype.readData = function () {
        var strData = localStorage.getItem(this.dataKey);
        var arrData = [];
        if (strData != null) {
            arrData = JSON.parse(strData);
        }
        return arrData;
    };
    // 保存数据到localstorage
    DataHelper.prototype.saveData = function (arrData) {
        var str = JSON.stringify(arrData);
        localStorage.setItem(this.dataKey, str);
    };
    // 新增获取id
    DataHelper.prototype.getNewId = function () {
        var arr = this.readData();
        // 添加id
        var newId = arr.length > 0 ? arr[arr.length - 1][this.primaryKey] + 1 : 1;
        return newId;
    };
    // 删除数据, by id
    DataHelper.prototype.removeDataById = function (id) {
        var _this = this;
        var arr = this.readData();
        var index = arr.findIndex(function (e) { return e[_this.primaryKey] === id; });
        if (index > -1) {
            arr.splice(index, 1);
            this.saveData(arr);
            return true;
        }
        return false;
    };
    return DataHelper;
}());
export default DataHelper;
//# sourceMappingURL=DataHelper.js.map