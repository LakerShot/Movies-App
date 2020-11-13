import { Col, Row, Image, Button, Space, Rate } from 'antd'
import React from 'react'
import imageNotFound from '../../../assets/image-not-found.png'
import { IMAGE_PREVIEW } from '../../../utils/keys'
import { enumTabs, monthNames } from '../../../utils/constants'
import './Movie.css'

const Movie = ({ title, overview, poster_path, release_date, vote_average, tabTitle}) => {
  // const limitStr = (rawString, maxLength, symbol = "...") => {
  //   if (!maxLength) return rawString
  //   return rawString.substr(0, maxLength - symbol.length) + symbol
  // }

  const limitStr = (rawString, maxLength, symbol = "...") => {
    if (!maxLength) return rawString
    const arrOfStrings = rawString.split(" ")
    const output = arrOfStrings.reduce((acc, string, idx) => {
      if (maxLength > idx) acc.push(string)
      return acc
    }, [])
    // add '...' in the end of the array
    // output.push(symbol)
    if (rawString) {
      output.push(symbol)
    } else {
      output.push("Sorry, we couldn't find short description about this movie.")
    }

    return output
  }


  const dataConverter = (rawDate = new Date()) => {
    const fullData = new Date(rawDate)
    const year = fullData.getFullYear()
    const month = monthNames[fullData.getMonth()]
    const day = fullData.getDate()

    return `${month} ${day}, ${year}`
  }

  const filmRateColor = (rate) => {
    const baseClassName = 'info__raiting'
    if (rate > 7) return `${baseClassName}_green`
    if (rate > 5) return `${baseClassName}_yellow`
    if (rate > 3) return `${baseClassName}_orange`
    return `${baseClassName}_red`
  }

  const formatedStrings = limitStr(overview, 30)
  const formatedDate = dataConverter(release_date)

  return (
    <Col span={12} xs={24} md={12}>
      <div className="movie">
        <Row>
          <Col span={10}>
              <Image
                /* eslint-disable-next-line */
                src={`${IMAGE_PREVIEW}/${poster_path}`}
                fallback={imageNotFound}
                className="image_poster"
                alt="Image poster"
                // height="100%"
              />
          </Col>
          <Col span={14}>
            <div className="info">
              <div className="info__header">
                <h3 className="info__title">{title}</h3>
                {/* eslint-disable-next-line */}
                <div className={`info__raiting ${filmRateColor(vote_average)}`}>{vote_average}</div>
              </div>
              <p className="info__date">{formatedDate} </p>
              <div className="info__topic topic">
                <Space>
                  <Button size='small' className="topic__btn">Action</Button>
                  <Button size='small' className="topic__btn">Drama</Button>
                </Space>
              </div>
              <div className="info__about">
                <p className="info__text">
                  {formatedStrings && formatedStrings.join(' ')}
                </p>
              </div>
              <div className="info__rate">

                <Rate
                  style={{fontSize: "1.4em"}}
                  disabled={tabTitle === enumTabs.rated}
                  count={10}
                  allowHalf
                  /* eslint-disable-next-line */
                  defaultValue={tabTitle === enumTabs.rated ? vote_average : 0}
                  className="info__stars mb1"
                />

              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  )
}

export default Movie
