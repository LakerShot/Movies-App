import { Col, Row, Spin } from 'antd'
import React from 'react'

const Loader = () => {
  return (
    <Row align="middle" justify="center mb2">
      <Col>
        <Spin size="large" />
      </Col>
    </Row>
  )
}

export default Loader
