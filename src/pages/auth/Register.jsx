import Form from './components/form/Form'
import { useDispatch, useSelector } from 'react-redux'
import { register, setStatus } from '../../../store/authSlice'
import STATUSES from '../../globals/status/statuses'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
const Register = () => {
  const { status } = useSelector((state) => state.auth)
  const Navigate = useNavigate()

  const dispatch = useDispatch()
  const handleRegister = (data) => {
    dispatch(register(data))
  }
  useEffect(()=>{
     //check the status value
     if (status === STATUSES.SUCCESS) {
       Navigate('/login')
       dispatch(setStatus(null))
    } else {
       Navigate('/register')
  }
  }, [status])

  return (
    <Form type='Register' onSubmit={handleRegister} />
  )
}

export default Register