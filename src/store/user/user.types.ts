import { UserData } from '../../utils/firebase/firebase.utils'

export type UserState = {
    currentUser: UserData | null
}
