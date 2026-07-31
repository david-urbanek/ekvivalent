import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmail = ({ name, email, message }: ContactEmailProps) => (
  <Html>
    <Head />
    <Preview>Nová zpráva z kontaktního formuláře od {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={wordmark}>EKVIVALENT</Text>

        <Section style={card}>
          <Text style={eyebrow}>Kontaktní formulář</Text>
          <Heading style={heading}>Nová zpráva z webu</Heading>

          <Hr style={hr} />

          <Section style={row}>
            <Text style={label}>Jméno</Text>
            <Text style={value}>{name}</Text>
          </Section>

          <Section style={row}>
            <Text style={label}>E-mail</Text>
            <Text style={value}>
              <Link href={`mailto:${email}`} style={link}>
                {email}
              </Link>
            </Text>
          </Section>

          <Section style={row}>
            <Text style={label}>Zpráva</Text>
            <Text style={messageValue}>{message}</Text>
          </Section>

          <Hr style={hr} />

          <Link href={`mailto:${email}`} style={button}>
            Odpovědět
          </Link>
        </Section>

        <Text style={footer}>
          Odesláno z kontaktního formuláře na{" "}
          <Link href="https://ekvivalent.cz" style={footerLink}>
            ekvivalent.cz
          </Link>
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ContactEmail;

const main = {
  backgroundColor: "#f5f5f5",
  fontFamily:
    "'Helvetica Neue', Helvetica, Arial, sans-serif",
  padding: "40px 0",
};

const container = {
  margin: "0 auto",
  maxWidth: "480px",
  padding: "0 24px",
};

const wordmark = {
  color: "#0a0a0a",
  fontSize: "13px",
  fontWeight: "700",
  letterSpacing: "3px",
  margin: "0 0 24px",
  textAlign: "center" as const,
};

const card = {
  backgroundColor: "#ffffff",
  border: "1px solid #e5e5e5",
  borderRadius: "16px",
  padding: "32px",
};

const eyebrow = {
  color: "#8a8a8a",
  fontSize: "11px",
  fontWeight: "600",
  letterSpacing: "1.5px",
  margin: "0 0 8px",
  textTransform: "uppercase" as const,
};

const heading = {
  color: "#0a0a0a",
  fontSize: "24px",
  fontWeight: "600",
  letterSpacing: "-0.5px",
  margin: "0",
};

const hr = {
  borderColor: "#e5e5e5",
  margin: "24px 0",
};

const row = {
  margin: "0 0 16px",
};

const label = {
  color: "#8a8a8a",
  fontSize: "11px",
  fontWeight: "600",
  letterSpacing: "1px",
  margin: "0 0 2px",
  textTransform: "uppercase" as const,
};

const value = {
  color: "#0a0a0a",
  fontSize: "15px",
  margin: "0",
};

const messageValue = {
  ...value,
  lineHeight: "22px",
  whiteSpace: "pre-wrap" as const,
};

const link = {
  color: "#0a0a0a",
  textDecoration: "underline",
};

const button = {
  backgroundColor: "#0a0a0a",
  borderRadius: "999px",
  color: "#ffffff",
  display: "block",
  fontSize: "14px",
  fontWeight: "600",
  padding: "12px 0",
  textAlign: "center" as const,
  textDecoration: "none",
};

const footer = {
  color: "#a0a0a0",
  fontSize: "12px",
  margin: "24px 0 0",
  textAlign: "center" as const,
};

const footerLink = {
  color: "#a0a0a0",
  textDecoration: "underline",
};
