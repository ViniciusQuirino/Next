import api from "@/services/api"
import { IUserLogin, IProviderProps } from "@/types"
import { Box, useToast } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { setCookie } from "nookies"
import { createContext, useContext, useState} from "react"

interface AuthProviderData {
    login: (userData: IUserLogin) => void
    avatar: string
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData)

export const AuthProvider = ({children}: IProviderProps) => {
    const [avatar, setAvatar] = useState('')
    const toast = useToast()
    const router = useRouter()
    const login = (userData: IUserLogin) => {
        api.post("/api/login", userData)
        .then((response) => {
            setCookie(null, 'kenzie.token', response.data.token, { maxAge: 60 * 30, path: '/'})
            setCookie(null, 'kenzie.user', response.data.userName, { maxAge: 60 * 30, path: '/'})
            setAvatar(response.data.avatar)
            toast({
                title: 'sucess',
                variant: 'solid',
                position: 'top-right',
                isClosable: true,
                render: () => (
                    <Box color={'gray.50'} p={3} bg={'green.600'} fontWeight={'bold'} borderRadius={'md'}>
                      Login realizado com sucesso !
                    </Box>
                  ),
            })
            router.push('/dashboard')
        })
        .catch((err) => {
            toast({
                title: 'error',
                variant:'solid',
                position: 'top-right',
                isClosable: true,
                render: () => (
                    <Box color={'gray.50'} p={3} bg={'red.600'} fontWeight={'bold'} borderRadius={'md'}>
                      Erro ao logar, verifique se o e-mail e senha estão corretos
                    </Box>
                  ),
            })
        })

    }
    return (
        <AuthContext.Provider value={{login, avatar}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)