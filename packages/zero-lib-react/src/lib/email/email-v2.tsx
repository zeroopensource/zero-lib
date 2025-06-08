'use client'
import {
  render,
  Html,
  Button,
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
  Markdown as ReMarkdown,
  TailwindConfig,
} from '@react-email/components'
import { ZeroLogo } from '@/lib'

type Props = {
  preview?: string
  header?: string
  body?: string
  footer?: string
}

export const EmailV2 = (props: Props) => {
  return (
    <Html lang='en'>
      <Head />
      {props.preview && <Preview>{`${props.preview}`}</Preview>}
      <Body style={body}>
        <Container style={container}>
          <Section>
            <Row style={{ height: '40px' }}>
              <Column style={{ padding: '8px', borderRight: border }}>
                <Text style={{ margin: '0px' }}>{props.header}</Text>
              </Column>
              <Column width='40' align='right'>
                <Container style={{ marginTop: '6px', marginLeft: '10px' }}>
                  <ZeroLogo />
                </Container>
              </Column>
            </Row>
          </Section>
          <Section style={{ borderTop: border }}>{props.body}</Section>
        </Container>
      </Body>
    </Html>
  )
}
export const renderEmailV2React = render
export const renderEmailV2 = ({
  header,
  body,
}: {
  header: string
  body: string
}) => render(<EmailV2 header={header} body={body} />, { pretty: true })

const body = {
  backgroundColor: '#09090B',
  color: '#ffffff',
  fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
  padding: '8px',
}

const container = {
  borderRadius: '6px', // rounded-md
  border: '1px solid #27272a', // hsl(240, 3.7%, 15.9%)
}

const border = '1px solid #27272a'
