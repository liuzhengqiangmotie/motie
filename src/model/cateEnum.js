var Category;
(function (Category) {
    Category[Category["Work"] = 0] = "Work";
    Category[Category["Life"] = 1] = "Life";
    Category[Category["Study"] = 2] = "Study";
})(Category || (Category = {}));
var DescType = [
    {
        cateId: -1,
        tran: "button.all",
        tagStyle: "info",
    },
    {
        cateId: 0,
        tran: "pop_card.work",
        tagStyle: "success",
    },
    {
        cateId: 1,
        tran: "pop_card.life",
        tagStyle: "primary",
    },
    {
        cateId: 2,
        tran: "pop_card.study",
        tagStyle: "warning",
    },
];
export { Category, DescType };
//# sourceMappingURL=cateEnum.js.map