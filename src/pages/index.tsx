import { bounce, AnimatedContainer, centerColumnStyle, HeaderContainer, centerStyle } from '@/shared/styles';
import { Phone, ContactPhone, Edit } from '@mui/icons-material';
import { useRouter } from 'next/router';

export default function Home() {

    const router = useRouter();
    return (
        <>
            <div css={centerColumnStyle}>
                <HeaderContainer>
                    <h1><Phone /> Phone Book App</h1>
                </HeaderContainer >
                <AnimatedContainer animation={bounce} onClick={() => router.push('/listcontact')}>
                    <ContactPhone /> Contact List
                </AnimatedContainer>
                <AnimatedContainer animation={bounce} onClick={() => router.push('/formcontact')}>
                    <Edit /> Form Contact
                </AnimatedContainer>
                <HeaderContainer>
                    <p css={centerStyle}> © 2023 Muhammad Avicena. All rights reserved</p>
                </HeaderContainer >
            </div >
        </>
    )
};
