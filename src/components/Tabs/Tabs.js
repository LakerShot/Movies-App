import { Button, Col, Row } from 'antd'
import React from 'react'
import { useMainContext } from '../../context/MainContext'
import { enumTabs, urlType } from '../../utils/constants'
import './Tabs.css'
 
const Tabs = ({ tabTitle, setTabTitle, setMovieTitle, movieTitle }) => {
  const { setCurrentPage, setCurrentUrlType } = useMainContext()

  const handleTabs = (e) => {
    e.preventDefault()
    if (!movieTitle) setMovieTitle('')
    const innerBtnText = e.target.innerHTML
    if (innerBtnText === enumTabs.rated) {
      setCurrentUrlType(urlType.popularMovie)
    }
    setCurrentPage(1)
    setTabTitle(innerBtnText)
  }
 
  return (
    <Row align="middle" justify="center mb2">
      <Col>
        <div className={`tabs tabs_${tabTitle}`}>
          <Button
            onClick={(e) => handleTabs(e)}
            type="link"
            className="tabs__btn tabs__btn__search"
            >Search
          </Button>
          <Button
            onClick={(e) => handleTabs(e)}
            type="link"
            className="tabs__btn tabs__btn__rated"
            >Rated
          </Button>
          <div className="underline">{' '}</div>
        </div>
      </Col>
    </Row>
  )
}

export default Tabs