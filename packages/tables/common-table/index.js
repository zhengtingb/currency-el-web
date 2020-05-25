// 导入组件，组件必须声明 name
import commonTable from "./index.vue";

// 为组件提供 install 安装方法，供按需引入
commonTable.install = function(Vue) {
  Vue.component(commonTable.name, commonTable);
};
// 默认导出组件
export default commonTable;
