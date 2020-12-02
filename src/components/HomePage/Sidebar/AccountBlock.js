import React from 'react'
import s from './Sidebar.module.css';

const AccountBlock = (props) => {

  const { subBlock, username } = props;

  return (
    <div className={s.block}>
      <div className={s.header}>
        <div className={s.title}>Jestes zalogowany jako: </div>
        <div className={s.username}>{username}</div>
      </div>
      {subBlock}
    </div>
  )
}

export default AccountBlock