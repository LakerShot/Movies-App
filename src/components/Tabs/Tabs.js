import { Button, Col, Row } from 'antd'
import React from 'react'
import './Tabs.css'

const Tabs = () => {
  return (
    <Row align="middle" justify="center mb2">
      <Col>
        <div className="tabs">
          <Button type="link" className="tabs__btn search">Search</Button>
          <Button type="link" className="tabs__btn rated">Rated</Button>
          <div className="underline">{' '}</div>
        </div>
      </Col>
    </Row>
  )
}

export default Tabs