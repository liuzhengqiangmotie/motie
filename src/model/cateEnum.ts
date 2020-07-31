enum Category {
    Work = 0,
    Life = 1,
    Study = 2,
}

const DescType = [
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
