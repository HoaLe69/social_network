import { useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { verifyUser } from '../redux/api-request/user'
import { useDispatch, useSelector } from 'react-redux'
import ChatFloat from './chat-float/chat-float'

const RequireAuthentication = ({ children }) => {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(state => state.auth.authState.isAuthenticated)
  const { pathname } = useLocation()

  useEffect(() => {
    verifyUser(dispatch)
  }, [])

  if (isAuthenticated === false) return <Navigate to="/login" replace={true} />

  return (
    <>
      {children}
      {pathname !== '/chat' && <ChatFloat />}
    </>
  )
}

export default RequireAuthentication
