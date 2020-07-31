var ItemData = /** @class */ (function () {
    function ItemData(id, cateId, title, content) {
        if (id === void 0) { id = -1; }
        if (cateId === void 0) { cateId = -1; }
        if (title === void 0) { title = ""; }
        if (content === void 0) { content = ""; }
        this.id = id;
        this.cateId = cateId;
        this.title = title;
        this.content = content;
        this.createTime = Date.now();
    }
    return ItemData;
}());
export default ItemData;
//# sourceMappingURL=ItemData.js.map