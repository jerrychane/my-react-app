import React, { Component } from 'react';
import WarningComponent from 'warning-component';
import 'warning-component/dist/main.css';
import moment from 'moment';
moment.locale('zh-cn');  //中文
// moment.locale('en');//英文
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
      languageFlag: 'zh_CN',
    }
  }
  /**
 * 获取当前选中row的信息
 * @param {Array} selectedList 选中行信息
 * @param {Object} record 选中行信息
 * @param {Number} index 选中行行数
 * @param {Array} newData 选中行信息
 */

  getSelectedDataForTimerules = (selectedList, record, index, newData) => {
    console.log('App -> getSelectedDataForTimerules -> selectedList, record, index, newData', selectedList, record, index, newData)
  }
  /**
   * 新增定时规则点击确定后的回调
   * @param {Object} value 新增定时规则数据
   */
  tasktimeCallback = (value) => {
    console.log('App -> tasktimeCallback -> value', value)
  }
  /**
   * 删除定时规则
   * @param {String} oper 默认值为 'delete'
   * @param {Number} index 删除行索引
   */
  onDeleteTimeRules = (oper, index) => {
    console.log('App -> onDeleteTimeRules -> oper, index', oper, index)
  }
  /**
   * 编辑定时规则
   * @param {String} oper 默认值为 'edit'
   * @param {Object} data 编辑行数据
   * @param {Number} index 编辑行索引
   */
  onEditTimerules = (oper, data, index) => {
    console.log('App -> onEditTimerules -> oper, data, index', oper, data, index)
  }

  /**
 * 选人组件:消息设置-设置-确定后的回调函数，获取消息接收人
 * @param {Number} sendflag 发送时机 0-都不发送 1-失败发送 2-成功失败都发送
 * @param {Array} taskUserList 消息设置选中行信息
 */
  taskuserListCallback = (sendflag, taskUserList) => {
    console.log('App -> taskuserListCallback -> sendflag, taskUserList', sendflag, taskUserList)
  }

  /**
 * 选人组件:获取消息设置后的所有状态信息
 * @param {Object} TaskUserState 消息设置点击确定后所有state信息
 */
  getTaskUserState = (TaskUserState) => {
    console.log('App -> getTaskUserState -> TaskUserState', TaskUserState)
  }
  /**
   * 选人组件：删除接收人
   * @param {Object} record 选中行信息
   * @param {Number} index 选中行行数
   */
  deleteUserSelected = (record, index) => {
    console.log('App -> deleteUserSelected -> record, index', record, index)
  }

  render () {
    console.log(process.env)
    const { taskDetailDataTaskTime, tableDataForTaskway, rulesForTasktimeTips, userlistAllData, taskUserList, taskDetailData, timezone, timezonePK ,languageFlag} = this.state
    console.log(window.navigator.language);
    return (
      <WarningComponent
        className={'demoClassName'}
        refs={'demoRefs'}
        locale={languageFlag}
        taskDetailDataTaskTime={taskDetailDataTaskTime}
        rulesForTasktimeTips={rulesForTasktimeTips}
        tableDataForTaskway={tableDataForTaskway}
        userlistAllData={userlistAllData}
        taskUserList={taskUserList}
        taskDetailData={taskDetailData}
        timezone={timezone}
        timezonePK={timezonePK}
        getSelectedDataForTimerules={this.getSelectedDataForTimerules}
        tasktimeCallback={this.tasktimeCallback}
        onDeleteTimeRules={this.onDeleteTimeRules}
        onEditTimerules={this.onEditTimerules}
        taskuserListCallback={this.taskuserListCallback}
        getTaskUserState={this.getTaskUserState}
        deleteUserSelected={this.deleteUserSelected}
      />)
  }
}

export default App;
