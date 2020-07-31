// DataHelper 负责localStorage操作
class DataHelper {
    dataKey: string;
    primaryKey: string;
    constructor(dataKey: string, primaryKey: string) {
        this.dataKey = dataKey;
        this.primaryKey = primaryKey;
    }
    // 读取本地数据,根据dataKey
    readData(): any {
        const strData: string | null = localStorage.getItem(this.dataKey);
        let arrData: any = [];
        if (strData != null) {
            arrData = JSON.parse(strData);
        }
        return arrData;
    }
    // 保存数据到localstorage
    saveData(arrData: Array<Object>): void {
        let str: string = JSON.stringify(arrData);
        localStorage.setItem(this.dataKey, str);
    }
    // 新增获取id
    getNewId(): number {
        let arr: any = this.readData();
        // 添加id
        const newId: number =
            arr.length > 0 ? arr[arr.length - 1][this.primaryKey] + 1 : 1;

        return newId;
    }
    // 删除数据, by id
    removeDataById(id: number | string): boolean {
        const arr: Array<any> = this.readData();
        const index = arr.findIndex((e: any) => e[this.primaryKey] === id);
        if (index > -1) {
            arr.splice(index, 1);
            this.saveData(arr);
            return true;
        }
        return false;
    }
}

export default DataHelper;
