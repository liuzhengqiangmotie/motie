import DataHelper from "./DataHelper";
import ItemData from "../model/ItemData";

// 负责处理数据
class ActionHelper {
    dataHelper: DataHelper = new DataHelper("memoData", "id");
    memoList: Array<ItemData>;
    constructor() {
        this.memoList = this.readData();
    }
    // 读取本地数据后转为ItemData类型数组后设置给memolist
    readData(): Array<ItemData> {
        const arr = this.dataHelper.readData();
        const arrItem = arr.map((e: any) => {
            const { id, cateId, title, content, createTime } = e;
            let item = new ItemData(id, cateId, title, content);
            // fixed time
            item.createTime = createTime;
            return item;
        });
        return arrItem;
    }
    // 新增笔记
    add(item: ItemData): number {
        // 获取当前应该存入的id
        item.id = this.dataHelper.getNewId();
        this.memoList.push(item);
        this.dataHelper.saveData(this.memoList);
        return item.id;
    }
    // 修改笔记
    edit(item: ItemData): boolean {
        debugger
        let editItem: ItemData | undefined = this.memoList.find(
            (e) => e.id === item.id
        );
        if (editItem) {
            editItem.cateId = item.cateId;
            editItem.title = item.title;
            editItem.content = item.content;
            this.dataHelper.saveData(this.memoList);
            return true;
        }
        return false;
    }
    // 删除笔记
    remove(id: number): boolean {
        const delIndex: number = this.memoList.findIndex((e) => e.id === id);
        if (delIndex > -1) {
            this.memoList.splice(delIndex, 1);
            this.dataHelper.saveData(this.memoList);
            return true;
        }
        return false;
    }
}

export default ActionHelper;
