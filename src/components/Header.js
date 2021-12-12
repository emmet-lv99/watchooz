import React from 'react'
import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom'

const Header = props => {
  const wrapperInlineStyle = {
    width: '100%',
    height: '50px',
    paddingLeft: '16px',
    paddingRight: '16px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'lightGrey',
    boxSizing: 'border-box',
  }

  const TitleInlineStyle = {
    textAlign: 'center',
    flex: '1',
  }

  const navigate = useNavigate()

  return (
    <>
      {props.pageName === 'Login' ? (
        <div style={wrapperInlineStyle}>
          <p>watchooz</p>
        </div>
      ) : (
        <div style={wrapperInlineStyle}>
          <p onClick={() => navigate(-1)}>뒤로</p>
          <p style={TitleInlineStyle}>{props.pageName}</p>
          {props.heartButton === true ? <Link to={'/likes'}>하트</Link> : <></>}
        </div>
      )}
    </>
  )
}

Header.defaultProps = {
  heartButton: false,
}

Header.propTypes = {
  pageName: PropTypes.string.isRequired,
  heartButton: PropTypes.bool,
}

export default Header
