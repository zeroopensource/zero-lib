import {
  Body,
  Container,
  Column,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  render,
} from '@react-email/components'
import * as React from 'react'
import { ZERO_LINKS } from '../constants'
import parse from 'html-react-parser'

const baseUrl =
  'https://raw.githubusercontent.com/zero-company/zero-lib/refs/heads/main/packages/zero-lib-react/public'

const patchStyles = `a{color:#004dcf;text-decoration:none}`

type Props = {
  header: string
  preview?: string
  body: string
}

export const EmailV3 = (props: Props) => {
  const bodyReact = parse(props.body)

  return (
    <Html>
      <Head>
        <style>{patchStyles}</style>
      </Head>
      {props.preview && <Preview>{props.preview}</Preview>}
      <Body style={main}>
        <Container style={container}>
          <Section style={{ backgroundColor: '#09090B' }}>
            <Row>
              <Column>
                <Img
                  style={{
                    ...sectionLogo,
                    paddingTop: '10px',
                    paddingBottom: '10px',
                  }}
                  src={`${baseUrl}/zero-logo-v1-padding.png`}
                  width='40'
                  height='40'
                  alt='Zero'
                />
              </Column>
            </Row>
          </Section>

          <Section style={paragraphContent}>
            <Text style={heading}>
              {props.header
                .split(' ')
                .filter(x => x !== '[zero]')
                .join(' ')}
            </Text>
            <Text style={{ ...paragraph, whiteSpace: 'pre-line' }}>
              {bodyReact}
            </Text>
          </Section>
          <Section style={paragraphContent}>
            <Hr style={hr} />
          </Section>
          <Section style={paragraphContent}>
            <Text style={{ ...paragraph, marginBottom: 2, marginTop: 0 }}>
              Thank you,
            </Text>
            <Text
              style={{
                ...paragraph,
                fontSize: '20px',
                marginTop: 2,
                marginBottom: 24,
              }}
            >
              The Zero Team
            </Text>
          </Section>
          <Section
            style={{
              ...containerContact,
              width: '100%',
              paddingTop: '20px',
              paddingBottom: '20px',
              paddingLeft: '40px',
              paddingRight: '40px',
              backgroundColor: '#09090B',
              borderRadius: '0px',
              color: '#d1d1d1',
            }}
          >
            <Row>
              <Link
                style={footerLink}
                href={ZERO_LINKS.website}
                target='_blank'
                rel='noopener noreferrer'
              >
                website
              </Link>
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <Link
                style={footerLink}
                href={ZERO_LINKS.github}
                target='_blank'
                rel='noopener noreferrer'
              >
                github
              </Link>
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <Link
                style={footerLink}
                href={ZERO_LINKS.twitter}
                target='_blank'
                rel='noopener noreferrer'
              >
                x
              </Link>
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <Link
                style={footerLink}
                href={ZERO_LINKS.facebook}
                target='_blank'
                rel='noopener noreferrer'
              >
                facebook
              </Link>
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <Link
                style={footerLink}
                href={ZERO_LINKS.discord}
                target='_blank'
                rel='noopener noreferrer'
              >
                discord
              </Link>
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <Link
                style={footerLink}
                href={ZERO_LINKS.buymeacoffee}
                target='_blank'
                rel='noopener noreferrer'
              >
                support
              </Link>
              <Text
                style={{
                  ...paragraph,
                  fontSize: '12px',
                  margin: 0,
                  color: '#d1d1d1',
                  marginTop: 20,
                  lineHeight: '20px',
                }}
              >
                ©2024 Zero, an Open Source company. All Rights Reserved.
              </Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export const renderEmailV3React = render
export const renderEmailV3 = ({
  header,
  preview,
  body,
}: {
  header: string
  preview?: string
  body: string
}) =>
  render(<EmailV3 header={header} body={body} preview={preview} />, {
    pretty: true,
  })

const footerLink = {
  color: '#d1d1d1',
  textDecoration: 'underline',
}

const main = {
  backgroundColor: '#dbddde',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const sectionLogo = {
  padding: '0 40px',
  color: '#fff',
}

const container = {
  margin: '30px auto',
  backgroundColor: '#fff',
  borderRadius: 5,
  overflow: 'hidden',
}

const containerContact = {
  backgroundColor: '#f0fcff',
  width: '90%',
  borderRadius: '5px',
  overflow: 'hidden',
  paddingLeft: '20px',
}

const heading = {
  fontSize: '14px',
  lineHeight: '26px',
  fontWeight: '700',
  color: '#004dcf',
}

const paragraphContent = {
  padding: '0 40px',
}

const paragraph = {
  fontSize: '14px',
  lineHeight: '22px',
  color: '#3c4043',
}

const link = {
  ...paragraph,
  color: '#004dcf',
}

const hr = {
  borderColor: '#e8eaed',
  margin: '20px 0',
}

const footer = {
  maxWidth: '100%',
}
