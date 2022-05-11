
import { ReactNode, ReactPropTypes } from 'react';
import LoadingCircle from './LoadingCircle'
import styles from  '../styles/button.module.css'

type Props =  {
  color?: string;
  variant?: string;
  children?: ReactNode;
  loading?: boolean;
  onClick: () => void;

}

export default function Button({children, onClick, loading, variant, color}: Props) {

  return (
    <button
      className={styles[variant || 'btn-primary']}
      onClick={onClick}
    >
      {children}
      {loading &&  
      <LoadingCircle
        color={color}
        variant={variant}
      />       
    }
    </button>
  )
}
