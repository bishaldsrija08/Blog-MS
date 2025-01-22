import Form from './components/form/Form'
import {useDispatch} from 'react-redux'
import { register } from '../../../store/authSlice'
const Register = () => {

  const dispatch = useDispatch()
  const handleChange = (data)=>{
    dispatch(register(data))
  }

  return (
    <Form type='Register' onSubmit={handleChange}/>
  )
}

export default Register