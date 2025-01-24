
import { useDispatch, useSelector } from 'react-redux'
import Form from './components/form/Form'
import { useNavigate } from 'react-router-dom'
import { login } from '../../../store/authSlice'
import STATUSES from '../../globals/status/statuses'

const Login = () => {
  const { status, user } = useSelector((state) => state.auth)
  const Navigate = useNavigate()

  const dispatch = useDispatch()
  const handleLogin = (data) => {
    dispatch(login(data))

    //check the status value
    if (status === STATUSES.SUCCESS) {
      return Navigate('/')
    } else {
      return Navigate('/login')
    }
  }
  return (
   
  <Form type='Login' user={user} onSubmit={handleLogin}/>
  )
}

export default Login