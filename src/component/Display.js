import React from 'react';
import Select from './display/Select'
import Detail from './display/Detail'

const Display = ({issues, onChange, selected_issue_id}) => {
  return (
    <div>
      <Select issues={issues} onChange={issue => onChange(issue)}/>
      <Detail selected_issue_id={selected_issue_id} issues={issues}/>
    </div>
  )
}

export default Display;
