/**
 * 全局注册自定义过滤器
 * vue.filter
 * 过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符号指示
 * 注释：1.必须放在Vue实例化前面
 * 2. 过滤器函数始终以表达式的值作为第一个参数
 * 3. 可以设置两个过滤器参数,前提是这两个过滤器处理的不冲突
 * 4. 用户从input输入的数据在回传到model之前也可以先处理
 * 5. 可用于双花括号插值{{msg|capitalise}}
 * 6.可用于v-bind 表达式
 */
import Vue from 'vue';

var Name_MAP = [ // 项目名称下拉选择数据
  {
    value: "0",
    text: "全部"
  },
  {
    value: "1",
    text: "第一项"
  }, {
    value: "2",
    text: "第二项"
  }, {
    value: "3",
    text: "第三项"
  }, {
    value: "4",
    text: "第四项"
  }, {
    value: "5",
    text: "第五项"
  }
]
const SEX_MAP = {
  1: '男',
  2: '女'
}
const EDU_MAP = {
  '1': '大专以下',
  '2': '大专',
  '3': '本科',
  '4': '硕士',
  '5': '博士',
  '6': '及以上',
  '7': '其他'
}
const EDU_Class = {
  '1': '合作班',
  '2': '常规班',
  '3': '自创班'
}

Vue.filter('nameFilter', function(s) {
  if (!s) return ''
  let n = parseInt(s);
  return Name_MAP[n].text;
})

Vue.filter('sexFilter', function(s) {
  if (!s) return ''
  let n = parseInt(s);
  return SEX_MAP[n];
})

Vue.filter('edu', (value) => {
  return EDU_MAP[value];
});

Vue.filter('classFilter', (value) => {
  return EDU_Class[value];
});

// 为空时的默认处理
Vue.filter('empty', function(s, v) {
  if (!s) return v;
  return s;
})

Vue.filter('dateformatter', function(t, v) {
  if (!t) return v;
  var y = t.getFullYear()
  var m = t.getMonth() + 1
  var d = t.getDay()
  var h = t.getHours()
  var mm = t.getMinutes()
  var ss =  t.getSeconds()
  mm = mm > 9 ? mm : '0' + mm
  ss = ss > 9 ? ss : '0' + ss
  return  y + '-'  + (m > 9 ? m : '0' + m) + '-'  + (d > 9 ? d : '0' + d)  + ' '  + h + ':'  + mm  + ':' + ss
})
