import { Category } from "./cateEnum";

class ItemData {
    // !表示可以为空
    id!: number;
    cateId!: Category;
    title!: string;
    content!: string;
    createTime!: number;
    constructor(
        id: number = -1,
        cateId: number = -1,
        title: string = "",
        content: string = ""
    ) {
        this.id = id;
        this.cateId = cateId;
        this.title = title;
        this.content = content;
        this.createTime = Date.now();
    }
}

export default ItemData;
