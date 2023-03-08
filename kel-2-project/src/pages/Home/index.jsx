import React from 'react'
import { Header } from '../../components'
import {Form} from 'react-bootstrap'

export default function Home() {
  return (
    <>
    <Header >
        <Form.Text className="text-muted">
            Form text
        </Form.Text>
    </Header>
    <div>Home</div>
    </>
  )
}
