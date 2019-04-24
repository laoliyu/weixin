Page({
  data: {
    hasUserInfo:
      false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo: {},
    addShow: false,
    // 默认情况不输出
    addText: '',
    todos: []

  },
  addInput: function (e) {
    
    this.setData({
      addText: e.detail.value
    })

  },
  addTodo: function (e) {
    // -输入框有没有trim检测有没有内容
    if(!this.data.addText.trim()){
      return;
    }
    // -todos界面上wx:for
    // setData() 重新绘制这个页面
    let todos = this.data.todos;
    todos.push({
      id:new Date().getTime(),
      title:this.data.addText,
      status:'0'
    })
    this.setData({
      todos
    });

    // - 退出输入状态
    this.addTodoHide();
  },
  getUserInfo: function (e) {
    // console.log(e);
    this.setData({
      userInfo: e.detail.userInfo,
      // MVVM编程 响应式 状态
      hasUserInfo: true
    })
  },
  addTodoShow: function (e) {
    this.setData({
      addShow: true
      // 点击之后就表单出现
    })
  },
  addTodoHide: function (e) {
    this.setData({
      addShow: false
    })
  }

})