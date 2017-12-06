import React from 'react';
import Issue from './register/Issue'
import Member from './register/Member'

const Register = ({members, onRegisterIssue, onRegisterMember}) => {
  return (
    <div>
      <Issue members={members} onRegister={issue => onRegisterIssue(issue)}/>
      <Member onRegister={member => onRegisterMember(member)}/>
    </div>
  )
}

export default Register;
