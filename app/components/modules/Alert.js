import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Alert = () => {
    const [show, setShow] = useState(true)
    const { status, message } = useSelector(state => state.alert)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: 'UPDATE_ALERT', payload: { status, message } })
        setShow(true)
        const timer = setTimeout(() => {
            setShow(false)
            dispatch({ type: 'RESET_ALERT' })
        }, 5000)
        return () => clearTimeout(timer)
    }, [message, status])

    return show && <div className={`alert alert--${status}`}>{message}</div>
}

export default Alert
