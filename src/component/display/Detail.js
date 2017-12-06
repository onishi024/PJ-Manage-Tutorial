import React, { Component } from 'react';

const Detail = ({selected_issue_id, issues}) => {
  const selected_issue = issues.find(issue => issue.id === selected_issue_id)
  const member_str = selected_issue.members.map(member => member + ", ")
  return (
    <div>
      <h3>案件詳細情報</h3>
      <ul>
        <li>案件名：{selected_issue.title}</li>
        <li>工数：{selected_issue.man_hours}人日</li>
        <li>メンバー：{member_str}</li>
        <li>分類：{selected_issue.type}</li>
      </ul>
    </div>
  )
}

export default Detail
