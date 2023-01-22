import { useTransform } from "framer-motion";
import React from "react";

import useWrapperScroll from "../Model/useWrapperScroll";

import { Container, Header, Logo, BurguerMenu, Footer } from "./styles";

const UniqueOverlay: React.FC = () => {
    const { scrollYProgress } = useWrapperScroll()

    const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])
    
    return(
        <Container>
            <Header>
                <Logo />
                <BurguerMenu />
            </Header>

            <Footer style={{ opacity }}>
                <ul>
                    <li>
                        <a href="#">Tesla</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <a href="#">by Vitor Guedes</a>
                    </li>
                </ul>
            </Footer>
        </Container>
    )
}

export default UniqueOverlay