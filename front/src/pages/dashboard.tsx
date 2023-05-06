import Header from "@/components/header"
import { IUserName } from "@/types"
import { GetServerSideProps } from "next"
import nookies from "nookies"


const Dashboard = ({name}: IUserName) => {
    return (
        <>
        <Header name={name}  isLogged/>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const cookies = nookies.get(ctx)
    if(!cookies['kenzie.token']){
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
    return {
        props: {name: cookies['kenzie.user']}
    }
}

export default Dashboard