
import { useDispatch, useSelector } from 'react-redux'
import Form from './components/form/Form'
import { useNavigate } from 'react-router-dom'
import { login, setStatus } from '../../../store/authSlice'
import STATUSES from '../../globals/status/statuses'
import { useEffect } from 'react'

const Login = () => {
  const { status, user } = useSelector((state) => state.auth)
  const Navigate = useNavigate()

  const dispatch = useDispatch()
  const handleLogin = (data) => {
    dispatch(login(data))
  }

  useEffect(() => {
    //check the status value
    if (status === STATUSES.SUCCESS) {
      Navigate('/')
      dispatch(setStatus(null))
    } else {
      Navigate('/login')
    }
  }, [status])
  return (

    <Form type='Login' user={user} onSubmit={handleLogin} />
  )
}

export default Login