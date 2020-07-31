<template>
    <el-dialog
            :title="memo.id == -1 ? $t('pop_card.add') : $t('pop_card.edit')"
            :visible.sync="$store.state.showEdit"
    >
        <el-form :model="memo">
            <el-form-item :label="$t('pop_card.type')">
                <el-select v-model="memo.cateId">
                    <el-option
                            :label="$t('pop_card.work')"
                            :value="cate['Work']"
                    ></el-option>
                    <el-option
                            :label="$t('pop_card.life')"
                            :value="cate['Life']"
                    ></el-option>
                    <el-option
                            :label="$t('pop_card.study')"
                            :value="cate['Study']"
                    ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item :label="$t('pop_card.title')">
                <el-input v-model="memo.title"></el-input>
            </el-form-item>
            <el-form-item :label="$t('pop_card.content')">
                <el-input v-model="memo.content" type="textarea"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="$store.state.showEdit = false">{{
                $t("button.cancel")
                }}</el-button>
            <el-button type="primary" @click="save">{{
                $t("button.save")
                }}</el-button>
        </div>
    </el-dialog>
</template>

<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";
    import ItemData from "../model/ItemData";
    import { Category } from "../model/cateEnum";

    @Component
    export default class MemoEdit extends Vue {
        memo!: ItemData;
        cate: any = Category;

        // for edit status
        created() {
            this.memo = this.$store.state.transMemo;
        }
        save() {
            if (this.memo.title.trim() == "" || this.memo.content.trim() == "") {
                const warning: any = this.$t("pop_card.not_complete_warning");
                return this.$message.warning(warning);
            }
            if (this.memo.id == -1) {
                //新增
                this.$store.state.actionHelper.add(this.memo);
            } else {
                //编辑
                this.$store.state.actionHelper.edit(this.memo);
            }
            this.$store.state.showEdit = false;
        }
    }
</script>
