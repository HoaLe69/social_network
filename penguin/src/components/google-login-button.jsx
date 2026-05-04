import { Button } from '@chakra-ui/react'
import GoogleIcon from './icons/GoogleIcon'
import { useGoogleLogin } from '@react-oauth/google'
import { useCallback } from 'react'

const GoogleButtonLogin = ({ title }) => {
  const googleAuthorizeURL = useCallback(token => {
    return `${process.env.REACT_APP_GOOGLE_AUTHORIZE_URL}/login/redirect/google?code=${token}`
  }, [])

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: tokenResponse => {
      window.location.assign(googleAuthorizeURL(tokenResponse?.access_token))
    }
  })
  return (
    <Button gap={2} width="full" onClick={handleGoogleLogin}>
      <GoogleIcon />
      {title}
    </Button>
  )
}

export default GoogleButtonLogin
