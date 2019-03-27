// https://eslint.org/docs/user-guide/configuring

// root 限定配置文件的使用范围
// parser 指定eslint的解析器
// parserOptions 设置解析器选项
// extends 指定eslint规范
// plugins 引用第三方的插件
// env 指定代码运行的宿主环境
// rules 启用额外的规则或覆盖默认的规则
// globals 声明在代码中的自定义全局变量

module.exports = {
  root: true,
  parserOptions: {
      parser: 'babel-eslint',
  },
  env: {
      browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['airbnb-base'],
  globals: {
      wx: false,
      getApp: false,
      Page: false,
      Component: false,
      getCurrentPages: false,
  },
  plugins: ['html'],
  // add your custom rules here
  rules: {
      'import/extensions': [
          'error',
          'always',
          {
              js: 'never',
          },
      ],
      'linebreak-style': 0,
      // allow param reassign
      'no-param-reassign': 0,
      // max-len
      'max-len': 0,
      'no-restricted-syntax': 0,
      // no-lonely-if
      'no-lonely-if': 0,
      'func-names': 0,
      // allow not code default export
      'import/prefer-default-export': 0,
      'no-plusplus': 0,
      'no-else-return': 0,
      'no-loop-func': 0,
      // 芝麻云仓开发
      'object-curly-newline': [
          'error',
          {
              consistent: true,
          },
      ],
      'no-console': 0, // 不能有console.log
      'import/extensions': 0,
      'import/no-unresolved': 0,
      'import/no-extraneous-dependencies': 0,
      'global-require': 0,
      'arrow-body-style': 0, // 箭头函数体不能立即return
      'no-continue': 0, // 不允许用continue
      'no-unused-expressions': 0, // 允许短路求值
      'no-underscore-dangle': 0, // 下划线命名
    //   'guard-for-in':0, //for in 内部必须有 hasOwnProperty
      'no-shadow':0, //禁止变量名与上层作用域内的定义过的变量重复,很多时候函数的形参和传参是同名的
      'comma-dangle':0,  //对象的最后一个属性末尾必须有逗号
      'indent':0,    //一个缩进必须用四个空格替代
      'operator-linebreak':0, //需要换行的时候，操作符必须放在行末.有时放在第二行开始处更易读
      'eol-last':0, //文件最后一行必须有一个空行
      'consistent-return':0, //禁止函数在不同分支返回不同类型的值
      'arrow-parens':0, //箭头函数只有一个参数的时候，必须加括号
      'quote-props':0 //对象字面量的键名禁止用引号括起来
  },
};
// 'array-callback-return': 0, // 箭头函数不需要return
