/* eslint-disable @next/next/no-img-element */
import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";

type EmailProps = {
  userName?: string;
  accountNumber?: string;
};

export default function RevokeSuspensionTemplate({ userName, accountNumber }: EmailProps) {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Container>
            <img style={image} src="https://res.cloudinary.com/dpmx02shl/image/upload/v1707937490/wealthAssets/logo_q7xzbj.png" alt="Wealth Assets Logo" />
          </Container>
          <Text style={bold}>Dear {userName}!</Text>
          <Text style={paragraph}>
            We are contacting you regarding the recent suspension.
          </Text>
          <Text style={paragraph}>
            After conducting our review of the flagged transactions, we have
            determined there was no actual fraudulent or unauthorized activity.
            As a result, we have revoked the account suspension effective
            immediately.
          </Text>
          <Text style={paragraph}>
            You should now have full access restored. Please accept our
            apologies for any inconvenience while under investigation. We
            appreciate your patience and understanding as we take data anomalies
            seriously.
          </Text>
          <Text style={paragraph}>
            Let us know if you have any issues transacting or questions about the status change.
          </Text>
          <Container style={footer}>
            <Text>
              Processed by Capital Wealth Assets Fraud Investigation Team for{" "}
              {userName}
            </Text>
          </Container>
        </Container>
      </Section>
    </Html>
  );
}
// Styles for the email template
const main = {
  backgroundColor: "#FFF",
  margin: "0 auto",
  padding: "2rem",
};

const container = {
   borderRadius: "4px", 
   border: "1px solid #d4d7dc",
  padding: "1rem",
  backgroundColor: "#FFF",
  width: "100%",
};

const image = {
  width: "30px"
}

const bold = {
  fontWeight: "600",
  color: "#0d47a2",
  fontSize: "16px",
  lineHeight: "1.4",
  margin: "2rem 0",
}

const paragraph = {
  fontSize: "14px",
  lineHeight: "1.4",
  color: "#161618",
  margin: "2rem 0",
};

const detailsParagraph = {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#2C3E50",
    margin: "1rem 0",
    fontWeight: "500",
  };
  
  const list ={
      margin: "0.3rem 0",
      color: "#592F1A",
      fontWeight: "600",
  }

const footer = {
  marginTop: "2rem",
  borderTop: "1px solid #B2B3BA",
  paddingTop: "1rem",
};