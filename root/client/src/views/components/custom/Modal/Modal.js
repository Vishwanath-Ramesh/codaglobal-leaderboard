import React from 'react'
import PropTypes from 'prop-types'
import { IconButton } from '@material-ui/core'

import './Modal.css'

function Header({ children }) {
  return <div className="modal__header">{children}</div>
}

function Title({ children }) {
  return <span className="modal__title">{children}</span>
}

function Close({ children, onClick }) {
  return (
    <span className="modal__close">
      <IconButton aria-label="Close" disableRipple onClick={onClick}>
        {children}
      </IconButton>
    </span>
  )
}

function Content({ children }) {
  return <div className="modal__content">{children}</div>
}

function Footer({ children }) {
  return <div className="modal__footer">{children}</div>
}
const Modal = ({ open, children }) => {
  if (!open) return null

  return <div className="modal">{children}</div>
}

Header.propTypes = {
  children: PropTypes.element.isRequired,
}

Title.propTypes = {
  children: PropTypes.element.isRequired,
}

Close.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
}

Content.propTypes = {
  children: PropTypes.element.isRequired,
}

Footer.propTypes = {
  children: PropTypes.element.isRequired,
}

Modal.defaultProps = {
  open: false,
}

Modal.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.element.isRequired,
}

Modal.Header = Header
Modal.Title = Title
Modal.Close = Close
Modal.Content = Content
Modal.Footer = Footer

export default Modal
