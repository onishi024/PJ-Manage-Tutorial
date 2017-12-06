import React from 'react';

const Select = ({issues, onChange}) => {

  let issue_id

  const _onChange = () => {
    onChange(Number(issue_id.value))
  }

  return (
    <div>
      <h3>案件選択</h3>
      <select onChange={() => _onChange()}
              ref={el => issue_id = el} >
        {issues.map(issue => <option key={issue.id} value={issue.id}>{issue.title}</option>)}
      </select>
    </div>
  )

}

export default Select
