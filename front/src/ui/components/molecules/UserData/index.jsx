import React from 'react'
import Text from '../../atoms/Text'

const UserData = ({ user }) => {
  return (
    <div>
      <Text variant="caption" text={user.name} />
      <Text variant="caption" text={user.email} />
      <Text variant="caption" text={user.phone} />
    </div>
  )
}

export default UserData