import React from 'react'

export default function Alerts(props) {
  return (
    props.Alert && <div className={`alert alert-warning alert-dismissible fade show alert alert-${props.Alert.type}`} role="alert">
    <strong> {props.Alert.type}</strong> {props.Alert.msg}
    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  )
}
