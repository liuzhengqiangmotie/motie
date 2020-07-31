<template>
  <el-row class="navbar">
    <el-col :span="12">
      <Language />
    </el-col>
    <el-col :span="12" class="handle">
      <el-dropdown @command="handleNewAdd">
        <el-button>
          {{ $t("button.add_new") }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="text">{{
            $t("button.text_label")
            }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown @command="handleNewType">
        <el-button :type="actionType.type" style="margin-left:10px">
          {{ actionType.text }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
                  :divided="index == 1"
                  v-for="(item, index) in descType"
                  :key="index"
                  :command="item.cateId"
          >
            <el-tag
                    effect="dark"
                    :size="index > 0 ? 'small' : ''"
                    :type="item.tagStyle"
            >
              {{ $t(item.tran) }}
              {{ getNumber(item.cateId) }}
            </el-tag>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import ItemData from "../model/ItemData";
    import Language from "./Language.vue";
    import { DescType } from "../model/cateEnum";

    @Component({
        components: {
            Language,
        },
    })
    export default class MenuBar extends Vue {
        descType: any = DescType;
        get actionType() {
            const currentCateId: number = this.$store.state.filterCateId;
            const current = this.descType.find((e: any) => e.cateId == currentCateId);
            console.log(current);
            return {
                text: `${this.$t(current.tran)} ${this.getNumber(currentCateId)}`,
                type: current.tagStyle,
            };
        }
        handleNewAdd(command: string): void {
            switch (command) {
                case "text":
                    // rest transMemo
                    this.$store.state.transMemo = new ItemData(-1, 0);
                    this.$store.state.showEdit = true;
                    break;
                default:
                    break;
            }
        }
        handleNewType(command: string | number): void {
            this.$store.state.filterCateId = command;
        }
        getNumber(cateId: string | number): number {
            const memoList = this.$store.state.actionHelper.memoList;
            return cateId == -1
                ? memoList.length
                : memoList.filter((e: any) => e.cateId == cateId).length;
        }
    }
</script>
