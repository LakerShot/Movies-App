import { Col, Row, Image, Button, Space } from 'antd'
import React from 'react'
import poster from '../../../assets/deadpool.jpg'
import imageNotFound from '../../../assets/image-not-found.png'
import './Movie.css'

const Movie = () => {
  return (
    <Col span={12}>
      <div className="movie">
        <Row>
          <Col span={10}>
            <Image src={poster} fallback={imageNotFound} className="image_poster" alt="Image poster"/>
          </Col>
          <Col span={14}>
            <div className="info">
              <div className="info__header">
                <h3 className="info__title">DeadPool</h3>
                <div className="info__raiting">6.5</div>
              </div>
              <p className="info__date">March 5, 2018</p>
              <div className="info__topic topic">
                <Space>
                  <Button size='small' className="topic__btn">Action</Button>
                  <Button size='small' className="topic__btn">Drama</Button>
                </Space>
              </div>
              <div className="info__about">
                <p className="info__text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Numquam nulla cumque vitae cupiditate aliquid perferendis 
                  facilis voluptas minima ex dignissimos explicabo facere, 
                  id, quaerat amet. Sit rerum quia voluptatum exercitationem?
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  )
}

export default Movie
