import React, {CSSProperties} from "react";
import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  flex: 0;
  font-size: 144px;
`
const Subtitle = styled.div`
  flex: 0;
  font-size: 48px;
  font-style: italic;
  padding-top: 16px;
  color: #00000088;
`

const Definition = styled.div`
  font-size: 36px;
  padding: 16px 0 64px;
  flex: 1
`

const Footer = styled.div`
  flex: 0;
  display: flex;
  flex-wrap: wrap;
  padding-top: 32px;
`

const Left = styled.div`
  font-size: 36px;
  text-decoration: none;
  flex: 1;
`

const Right = styled.div`
  font-size: 36px;
  font-style: italic;
  text-align: right;
  flex: 1;
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
