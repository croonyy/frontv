import { checkToken } from '../utils/requests'

const routerCheckToken = async (to, from, next) => {
    // ...
    // console.log(to, from, next)
    await checkToken()
    next()
}

export { routerCheckToken }
