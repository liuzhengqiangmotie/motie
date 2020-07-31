<template>
    <el-select
            @change="languageChange"
            size="mini"
            v-model="$store.state.language"
            filterable
    >
        <el-option label="中文" value="zh"> </el-option>
        <el-option label="Engilsh" value="en"> </el-option>
    </el-select>
</template>

<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";

    @Component
    export default class Language extends Vue {
        languageChange(value: string) {
            this.$store.commit("changeLanguage", value);
        }
    }
</script>
