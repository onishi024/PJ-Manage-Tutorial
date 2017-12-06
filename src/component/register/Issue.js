import React from 'react';

const Issue = ({members, onRegister}) => {

  let _title, _man_hours, _type
  let _members = []

  const _onSubmit = event => {
    event.preventDefault()
    onRegister({
      title: _title.value,
      man_hours: _man_hours.value,
      members: _members,
      type: _type.value
    })
    _title.value = _man_hours.value =''
    _title.focus()
  }

  const _onChange = member => {
    if (_members.find(_member => _member.id === member.id) === undefined){
      _members.push(member)
    } else {
      _members = _members.filter(_member => _member.id !== member.id)
    }
  }

  return (
    <div>
      <h3>案件登録</h3>
      <form onSubmit={event => _onSubmit(event)} >
        <p><label>案件名：<input type="text" name="title" ref={el => _title = el} /></label></p>
        <p><label>工数：<input type="text" name="man_hours" ref={el => _man_hours = el} /></label></p>
        <p><label>メンバー：
          {members.map((member, index) =>
            <div>
              <input
                type="checkbox"
                name="members"
                value={member.name}
                onChange={() => _onChange(member)}/>{member.name}
            </div>
          )}
        </label></p>
        <p><label>分類：
          <select name="type" ref={el => _type = el}>
            <option>開発委託</option>
            <option>作業依頼</option>
          </select>
        </label></p>
      <button>登録</button>
      </form>
    </div>
  )
}

export default Issue
