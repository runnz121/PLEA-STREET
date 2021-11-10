import React from 'react'
import { Image, List } from 'semantic-ui-react'

function Comment({item: { id, email, body }}) {
  return (
    <List animated verticalAlign='middle'>
      <List.Item>
      <Image avatar src='../images/trash_icon.png' />
        <List.Content>
          <List.Header>ID : {id}</List.Header>
          <List.Description>
            EMAIL : {email}
          </List.Description>
          <List.Description>
            body : {body}
          </List.Description>
        </List.Content>
      </List.Item>
    </List>
  )
}

export default Comment
