import React, { Component } from 'react';
import WarningComponent from 'warning-component';
import 'warning-component/dist/main.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timezone: 'UTC-10:00',  //时区格式
      timezonePK: '', //时区pk
      taskDetailDataTaskTime: [],//任务定时规则
      rulesForTasktimeTips: '',//必填提示语
      tableDataForTaskway: {},//任务定时规则
      userlistAllData: [],//所有消息接收人   
      taskUserList: [],//当前已选消息接收人
      taskDetailData: [],//任务详情 
    }
  }
  /**
 * 获取当前选中row的信息
 * @param {Array} selectedList 选中行信息
 * @param {Object} record 选中行信息
 * @param {Number} index 选中行行数
 * @param {Array} newData 选中行信息
 */
  getSelectedDataForTimerules (selectedList, record, index, newData) {
    console.log('App -> getSelectedDataForTimerules -> selectedList, record, index, newData', selectedList, record, index, newData)
  }
  /**
   * 新增定时规则点击确定后的回调
   * @param {Object} value 新增定时规则数据
   */
  tasktimeCallback (value) {
    console.log('App -> tasktimeCallback -> value', value)
  }
  /**
   * 删除定时规则
   * @param {String} oper 默认值为 'delete'
   * @param {Number} index 删除行索引
   */
  onDeleteTimeRules (oper, index) {
    console.log('App -> onDeleteTimeRules -> oper, index', oper, index)
  }
  /**
   * 编辑定时规则
   * @param {String} oper 默认值为 'edit'
   * @param {Object} data 编辑行数据
   * @param {Number} index 编辑行索引
   */
  onEditTimerules (oper, data, index) {
    console.log('App -> onEditTimerules -> oper, data, index', oper, data, index)

  }
  render () {
    const { taskDetailDataTaskTime, tableDataForTaskway, rulesForTasktimeTips, userlistAllData, taskUserList, taskDetailData, timezone, timezonePK } = this.state
    return (
      <WarningComponent
        className={'demo'}
        taskDetailDataTaskTime={taskDetailDataTaskTime}
        rulesForTasktimeTips={rulesForTasktimeTips}
        tableDataForTaskway={tableDataForTaskway}
        userlistAllData={userlistAllData}
        taskUserList={taskUserList}
        taskDetailData={taskDetailData}
        timezone={timezone}
        timezonePK={timezonePK}
        getSelectedDataForTimerules={this.getSelectedDataForTimerules.bind(this)}
        tasktimeCallback={this.tasktimeCallback.bind(this)}
        onDeleteTimeRules={this.onDeleteTimeRules.bind(this)}
        onEditTimerules={this.onEditTimerules.bind(this)}
      />)
  }
}

export default App;
