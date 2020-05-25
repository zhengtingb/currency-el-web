<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        v-if="isTableIndex"
        label="序号"
        type="index"
        width="50"
        align="center"
        fixed
      >
      </el-table-column>
      <el-table-column
        v-for="(item, index) in lableList"
        :key="index"
        :width="item.width"
        :label="item.lableName"
        :prop="item.lableKey"
        align="center"
        :fixed="item.fixed"
      >
        <template slot-scope="scope">
          <template v-if="item.slot">
            <slot :name="item.slot" :row="scope.row"></slot>
          </template>
          <span v-else>{{
            item.format
              ? item.format(scope.row[item.lableKey])
              : scope.row[item.lableKey]
          }}</span>
        </template>
      </el-table-column>
    </el-table>
    <div class="footer-pages">
      <el-pagination
        background
        layout="prev, pager, next"
        @current-change="pageChange"
        :total="1000"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "commonTable",
  props: {
    // // 表头数据
    // lableList:{
    //     type: Array,
    //     default: () => []
    // },
    // // 表格数据
    // tableData:{
    //     type: Array,
    //     default: () => []
    // }

    isTableIndex: {
      type: Boolean,
      default: true
    }
  },
  data: () => {
    return {
      //isTableIndex:true,
      lableList: [
        {
          lableName: "设备条码",
          lableKey: "deviceCode",
          type: "input"
        },
        {
          lableName: "供应商",
          lableKey: "provider",
          type: "select",
          format: function(val) {
            return val + "qqqqq";
          },
          options: [
            {
              value: "666",
              label: "黄金糕"
            },
            {
              value: "1111",
              label: "双皮奶"
            }
          ]
        },
        {
          lableName: "安装日期",
          lableKey: "installTime",
          type: "date",
          slot: "installTime",
          fixed: "right"
        },
        {
          lableName: "不可编辑",
          lableKey: "spanNoEdit"
        }
      ],
      tableData: [
        {
          id: "88",
          deviceCode: "9999",
          provider: "666",
          installTime: "2002-11-11",
          spanNoEdit: "7777"
        },
        {
          deviceCode: "22299",
          provider: "1111",
          installTime: "2002-11-12",
          spanNoEdit: "3333"
        }
      ],
      input: "",
      inputTime: ""
    };
  },
  mounted() {},
  computed: {},
  watch: {},
  methods: {
    inputChange(rowData) {
      console.log(rowData);
      this.$emit("rowChangeData", rowData);
      this.$emit("tableAllData", this.tableData);
      console.log(this.tableData);
    },
    formatOption(val) {
      console.log(val);
      return val + "AAA";
    },
    pageChange(data) {
      console.log(data);
      this.$emit("current-change", data);
    }
  }
};
</script>
<style lang="scss" scoped>
.input-noborder {
  border: none;
  .el-input__inner {
    border: none !important;
    text-align: center;
  }
}
.footer-pages {
  background: #fff;
  padding: 10px 20px;
  text-align: right;
}
</style>
