import { bounce, AnimatedContainer, centerColumnStyle, HeaderContainer, centerStyle } from '@/shared/styles';
import { Phone, ContactPhone, Edit } from '@mui/icons-material';
import { useRouter } from 'next/router';
import Head from 'next/head';
import logoIcon from "@/assets/logo.png"

export default function Home() {

    const router = useRouter();
    return (
        <>
            <Head>
                <title>Phone Book App</title>
                <meta name="description" content="Build phonebook application using react & next.js | developed by Muhammad Avicena Rahmadianto" />
                <link rel="icon" href="/logo.png" />
            </Head>
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
                    <footer css={centerStyle}> © 2023 Muhammad Avicena. All rights reserved</footer>
                </HeaderContainer >
            </div >
        </>
    )
};
