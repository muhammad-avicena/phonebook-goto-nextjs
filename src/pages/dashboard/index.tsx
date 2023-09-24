import { Animated, bounce, Container, listContainer } from '@/shared/styles';
import { Phone, ContactPhone, Edit } from '@mui/icons-material';
import { useRouter } from 'next/router';

const Users = () => {

    const router = useRouter();

    return (
        <>
            <div css={listContainer}>
                <Animated animation={bounce}>
                    <Phone /> Phone Book App
                </Animated>
                <Container onClick={() => router.push('/listcontact')}>
                    <ContactPhone /> Contact List
                </Container>
                <Container onClick={() => router.push('/formcontact')}>
                    <Edit /> Form Contact
                </Container>
            </div >
        </>
    )
};

export default Users;
