import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '@schibstedspain/sui-atom-button'
import IconClose from '@schibstedspain/sui-svgiconset/lib/X'
import IconSuccess from '@schibstedspain/sui-svgiconset/lib/Circlecheck'
import IconInfo from '@schibstedspain/sui-svgiconset/lib/Info'
import IconWarning from '@schibstedspain/sui-svgiconset/lib/Warning'

const baseClass = 'sui-MoleculeNotification'
const ICONS = {
  info: <IconInfo svgClass={`${baseClass}-icon`} />,
  success: <IconSuccess svgClass={`${baseClass}-icon`} />,
  system: <IconInfo svgClass={`${baseClass}-icon`} />,
  warning: <IconWarning svgClass={`${baseClass}-icon`} />
}

class MoleculeNotification extends Component {
  state = { show: false }

  render () {
    const { type, text, buttons } = this.props

    return (
      <div className={`${baseClass} ${baseClass}--${type}`}>
        <div className={`${baseClass}-content`}>
          <div className={`${baseClass}-iconLeft`}>
            { ICONS[type] }
          </div>
          <div className={`${baseClass}-close`} onClick={this.handleClose}>
            <IconClose svgClass={`${baseClass}-icon`} />
          </div>
          <span className={`${baseClass}-text`}>{text}</span>
        </div>
        <div className={`${baseClass}-buttonContainer`}>
          {buttons && buttons.map(button => <Button {...button} />)}
        </div>
      </div>
    )
  }
}

MoleculeNotification.displayName = 'MoleculeNotification'

MoleculeNotification.propTypes = {
  buttons: PropTypes.array,
  position: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string
}

MoleculeNotification.defaultProps = {
  position: 'relative',
  type: 'info'
}

export default MoleculeNotification
