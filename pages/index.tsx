import React, {CSSProperties} from "react";
import styled from 'styled-components'
import {Property} from "csstype";

const black: string = '#000000dd'
const grey: string = '#00000088'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5%;
`

const Title = styled.h1`
  flex: 0;
  margin: 64px 0 32px;
  font-weight: lighter;
  font-size: 12vw;
  color: ${black}
`
const Subtitle = styled.h2`
  flex: 0;
  margin: 16px 0 0;
  font-weight: normal;
  font-size: 4vw;
  font-style: italic;
  color: ${grey};
`

const Definition = styled.p`
  font-size: 4vw;
  margin: 16px 0 64px;
  flex: 1;
  color: ${black}
`

const Footer = styled.div`
  flex: 0;
  display: flex;
  flex-wrap: wrap;
  margin: 16px 0 16px
`

const Left = styled.h3`
  font-weight: normal;
  font-size: 3vw;
  text-decoration: none;
  flex: 1;
  color: ${grey};
`

const Right = styled.h3`
  font-weight: normal;
  font-size: 3vw;
  font-style: italic;
  text-align: right;
  flex: 1;
  color: ${grey};
`

const linkStyle: CSSProperties = {
    textDecoration: 'none',
    color: '#00000066'
}
export const DESCRIPTION = 'the practice of a remote worker, once realising they can work from anywhere, going to a holiday location to have as their ephemeral office'

const Home: React.FC = () => {


    return <Container>
        <Title>holi-desking</Title>
        <Subtitle>noun</Subtitle>
        <Definition>{DESCRIPTION}</Definition>
        <Footer>
            <Left>
                <a href={"https://theo.dev"} style={linkStyle}>
                    Definitions from Theo Stanton
                </a>
            </Left>
            <Right>
                <a href={"mailto:theo@theo.dev"} style={linkStyle}>
                    Feedback
                </a>
            </Right>
        </Footer>
    </Container>
}

export default Home
