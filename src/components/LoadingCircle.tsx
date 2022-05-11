import React from 'react'

type LoadingProps = {
  color?: string;
  variant?: string;
}

export default function LoadingCircle({color, variant}: LoadingProps) {
  const getColor = function(){
    if (variant === 'filled') {
      return 'white'
    } else if (color) {
      return color
    } else {
      return 'red'
    }
  }
  const defaultColor = color || 'red'

  return (
 
      <svg className={`animate-spin h-5 w-5 text-${getColor()}-800 mx-2 `} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke={`${getColor()}`} strokeWidth="4"></circle>
          <path className="opacity-75" fill={`${getColor()}`} d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
  )
}

