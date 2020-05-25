// 导入组件，组件必须声明 name
import editTable from "./index.vue";

// 为组件提供 install 安装方法，供按需引入
editTable.install = function(Vue) {
  Vue.component(editTable.name, editTable);
};
// 默认导出组件
export default editTable;
