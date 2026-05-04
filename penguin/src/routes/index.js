import route from '@config/route'
import Home from '@pages/home'
import Profile from '@pages/profile'
import ChatPage from '@pages/chat-pc'
import Login from '@pages/auth/login'
import Register from '@pages/auth/register'
import FollowingPage from '../pages/following'
import NewsPage from '../pages/news'
import LoginHandler from '../pages/auth/login-handler'

export const routesPrivate = [
  {
    path: route.home,
    component: <Home />
  },
  {
    path: route.profile,
    component: <Profile />
  },
  {
    path: route.chat,
    component: <ChatPage />
  },
  {
    path: route.following,
    component: <FollowingPage />
  },
  {
    path: route.news,
    component: <NewsPage />
  }
]

export const routesPublic = [
  {
    path: '/login/redirect/google',
    component: <LoginHandler />
  },
  {
    path: route.login,
    component: <Login />
  },
  {
    path: route.register,
    component: <Register />
  }
]
