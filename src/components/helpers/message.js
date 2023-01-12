import React from 'react'

export const showErrorMessage = (msg) => {
  return (
    <div class="alert alert-danger" role="alert">
 {msg}
  </div>
  )
}
export const showSuccessMessage = (msg) => {
    return (
      <div class="alert alert-success" role="alert">
   {msg}
    </div>
    )
  }
