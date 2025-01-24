import Form from './components/form/Form'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../../store/authSlice'
import STATUSES from '../../globals/status/statuses'
import { useNavigate } from 'react-router-dom'
const Register = () => {
  const { status } = useSelector((state) => state.auth)
  const Navigate = useNavigate()

  const dispatch = useDispatch()
  const handleRegister = (data) => {
    dispatch(register(data))

    //check the status value
    if (status === STATUSES.SUCCESS) {
      return Navigate('/login')
    } else {
      return Navigate('/register')
    }
  }

  return (
    <Form type='Register' onSubmit={handleRegister} />
  )
}

export default Register