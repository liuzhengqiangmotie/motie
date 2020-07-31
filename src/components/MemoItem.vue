<template>
    <div class="memo-container">
        <el-card class="memo" shadow="hover">
            <div slot="header" class="header">
                <span>{{ memo.title }}</span>
                <div>
                    <el-tooltip
                            class="item"
                            effect="dark"
                            :content="$t('pop_card.toolTip_edit')"
                            placement="bottom"
                    >
                        <el-button
                                size="mini"
                                circle
                                @click="doEdit"
                                icon="el-icon-edit"
                        ></el-button>
                    </el-tooltip>
                    <el-tooltip
                            class="item"
                            effect="dark"
                            :content="$t('pop_card.toolTip_del')"
                            placement="bottom"
                    >
                        <el-button
                                @click="doDel"
                                size="mini"
                                circle
                                type="danger"
                                icon="el-icon-delete"
                        ></el-button>
                    </el-tooltip>
                </div>
            </div>
            <div class="content">
                <div class="text">{{ memo.content }}</div>
                <div class="footer">
          <span class="cate">
            {{ $t("card.category") }}:
            <el-tag :type="tagStyle(memo.cateId)" size="small" effect="dark">
              {{ tagTran(memo.cateId) }}
            </el-tag>
          </span>
                    <span class="creTime">
            {{ $t("card.create_time") }}: {{ memo.createTime | formatDate }}
          </span>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from "vue-property-decorator";
    import ItemData from "../model/ItemData";
    import { DescType } from "../model/cateEnum";

    @Component
    export default class MemoItem extends Vue {
        @Prop() memo!: ItemData;
        descType: any = DescType;

        tagStyle(id: string | number): string {
            return this.descType.find((e: any) => e.cateId == id).tagStyle;
        }
        tagTran(id: string | number): string {
            const tran: any = this.$t(
                this.descType.find((e: any) => e.cateId == id).tran
            );
            return tran;
        }
        doEdit() {
            // deepclone memo
            const newMemo = JSON.parse(JSON.stringify(this.memo));
            // trans to store
            this.$store.commit("showEdit", newMemo);
        }
        doDel(): void {
            const title: any = this.$t("message_title.warning");
            const message: any = this.$t("message_content.confirm_delete");
            const confirm: any = this.$t("button.confirm");
            const cancel: any = this.$t("button.cancel");
            this.$confirm(message, title, {
                confirmButtonText: confirm,
                cancelButtonText: cancel,
                type: "warning",
            }).then(() => {
                this.$store.state.actionHelper.remove(this.memo.id);
                const message: any = this.$t("message_content.delete_success");
                this.$message.success(message);
            });
        }
    }
</script>
