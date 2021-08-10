import { Container, Flex, Image, Link } from "@chakra-ui/react";
import React from "react";
import { GenericTitle as ContactTitle } from "../common/GenericTitle";
import ContactForm from "./ContactForm";
import facebookIcon from "./icons/facebook-icon.png";
import instagramIcon from "./icons/instagram-icon.png";
import whatsappIcon from "./icons/whatsapp-icon.png";

const ContactPage = ({ info }) => {
  //Data incomming from API
  const { facebookUrl, instagramUrl, whatsappUrl, email } = info;

  return (
    <div>
      <ContactTitle text="Contacto" />

      <ContactForm />

      {/* Contact info */}
      <Container>
        <Flex m={3} alignContent="center" justifyContent="center">
          <Link href={facebookUrl} isExternal>
            <Image m={2} src={facebookIcon} />
          </Link>

          <Link href={instagramUrl} isExternal>
            <Image m={2} src={instagramIcon} />
          </Link>

          <Link href={whatsappUrl} isExternal>
            <Image m={2} src={whatsappIcon} />
          </Link>
        </Flex>

        <Flex alignContent="center" justifyContent="center">
          <strong>{email}</strong>
        </Flex>
      </Container>
    </div>
  );
};

export default ContactPage;
