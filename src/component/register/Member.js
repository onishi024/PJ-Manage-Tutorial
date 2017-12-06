import React from 'react';

const Member = ({onRegister}) => {

  let _member

  const _onSubmit = event => {
    event.preventDefault()
    onRegister(_member.value)
    _member.value =''
  }
  return (
    <div>
      <h3>メンバー登録</h3>
      <form onSubmit={event => _onSubmit(event)} >
        <p><label>メンバー名：<input type="text" name="member" ref={el => _member = el} /></label></p>
      <button>登録</button>
      </form>
    </div>
  )
}

export default Member
