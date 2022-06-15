import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export const loginContext = createContext()

export const TwitterProvider = ({ children }) => {
    const [appStatus, setAppStatus] = useState('loading')
    const [currentAccount, setCurrentAccount] = useState('')
    const [currentUser, setCurrentUser] = useState({})
    const [tweets, setTweets] = useState([])
    const router = useRouter()

useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

    /**
   * Checks if there is an active wallet connection
   */
     const checkIfWalletIsConnected = async () => {
        if (!window.ethereum) return setAppStatus('noMetaMask')
        try {
          const addressArray = await window.ethereum.request({
            method: 'eth_accounts',
          })
          if (addressArray.length > 0) {
            setAppStatus('connected')
            setCurrentAccount(addressArray[0])
    
            createUserAccount(addressArray[0])
          } else {
            router.push('/')
            setAppStatus('notConnected')
          }
        } catch (error) {
          router.push('/')
          setAppStatus('error')
          console.error();
        }
      }

    }