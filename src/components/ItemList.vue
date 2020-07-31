<template>
    <div class="container" id="memos">
        <MemoItem v-for="item in filterMemo()" :key="item.id" :memo="item" />
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";
    import ItemData from "../model/ItemData";
    import MemoItem from "./MemoItem.vue";

    @Component({
        components: {
            MemoItem,
        },
    })
    export default class ItemList extends Vue {
        memoArr!: Array<ItemData>;
        filterMemo() {
            const memoList = this.$store.state.actionHelper.memoList;
            return this.$store.state.filterCateId == -1
                ? memoList
                : memoList.filter((e: any) => e.cateId == this.$store.state.filterCateId);
        }
    }
</script>
