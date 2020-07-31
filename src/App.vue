<template>
  <div id="app">
    <MenuBar />
    <ItemList />
    <MemoEdit v-if="$store.state.showEdit" />
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import ItemList from "./components/ItemList.vue";
    import MenuBar from "./components/MenuBar.vue";
    import MemoEdit from "./components/MemoEdit.vue";

    @Component({
        components: {
            ItemList,
            MenuBar,
            MemoEdit,
        },
    })
    export default class App extends Vue {}
</script>
