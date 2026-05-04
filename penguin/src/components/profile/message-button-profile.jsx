import { Button, Spinner, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axiosClient from '../../config/axios'
import { getCurrentSelectedRoom } from '../../redux/conversationSlice'

const GotoChatButton = ({ member, receiver }) => {
  const toast = useToast()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [senderId, receiveId] = member

  const handleGoToRoomChat = async () => {
    try {
      if (senderId && receiveId) {
        setLoading(true)
        const room = await axiosClient.get(`/conversation/find/${senderId}/${receiveId}`)
        if (room?.id) {
          dispatch(getCurrentSelectedRoom({ info: room, receiver }))
        } else {
          const res = await axiosClient.post(`/conversation/create`, { member: member })
          dispatch(getCurrentSelectedRoom({ info: res, receiver }))
        }
        navigate('/chat')
      } else {
        throw new Error('Something went wrong')
      }
    } catch (err) {
      toast({
        position: 'bottom-right',
        title: 'Message',
        description: 'Something went wrong',
        duration: 1500
      })
      console.log(err)
    } finally {
      setLoading(false)
    }
  }
  return <Button onClick={handleGoToRoomChat}>{loading ? <Spinner /> : 'Messages'}</Button>
}

export default GotoChatButton
