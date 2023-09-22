import { Animated, bounce, Combined, Button } from '../../shared/styles'

const Users = () => (
    <div>
        <Animated animation={bounce}>Phone Book App</Animated>
        <Combined>
            View Contact.
        </Combined>
        <Combined>
            Edit Contact.
        </Combined>
        <Combined>
            Delete Contact.
        </Combined>   
    </div>
)

export default Users
