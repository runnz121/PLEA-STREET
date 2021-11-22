import React from 'react'
import styled from 'styled-components'
import { Icon, Button } from 'semantic-ui-react'

import Menubar from './Menubar'

const Wrap = styled.div`
    max-width: 640px;
    margin: 0px auto;
    padding-bottom: 0px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 87vh;
`

function TestStartPage() {
  return (
    <Wrap>
      <Menubar />
      <Content>
        <Icon name='question' size='massive' style={{ width: '50%', height: '50%' }} />
        <Button size='big'>검사 시작!</Button>
      </Content>
    </Wrap>

  )
}

export default TestStartPage
