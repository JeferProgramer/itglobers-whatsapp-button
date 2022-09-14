import React  from "react";
import PropTypes from "prop-types";
import styles from "./styles.css";
type Props = {
  logo: string
  phone: string
  message: string,
  width: number,
  height: number
}
const WhatsappButton = ({logo, phone, message, width, height}:Props) => {
  const formattedMessage = message.replace(/ /g, "%20")
  console.log("Mi mensaje formateado es  "+formattedMessage, logo)
  return(
  <>
    <div className={`fixed bottom-2 right-2 flex flexColumn ${styles.containerButton}`}>
      <a
        href={`https://wa.me/${phone}?text=${formattedMessage}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          src={logo}
          width={width}
          height={height}
          alt="Logo de WhatsApp"
        />
      </a>
    </div>
  </>
  )
}
WhatsappButton.propTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

WhatsappButton.defaultProps = {
  logo: "mi-logo.png",
  phone: "3004507575",
  message: "Estas comunicandote con VTEX University , por favor ingresa tu duda",
  width: 80,
  height: 80
}

WhatsappButton.schema = {
  title: "Boton de WhatsApp",
  type: "object",
  properties: {
    logo:{
      title: "Logo de WatsApp que se relacione con la marca",
      type: "string",
      widget:{
        "ui:widget": "image-uploader"
      }
    },
    phone:{
      title: "Telefono",
      description: "Agrega por favor el numero de telefono",
      type: "string"
    },
    message:{
      title: "Mensaje",
      description: "Agrega por favor el mensaje que se vera para tu cliente",
      type: "string",
      widget:{
        "ui:widget": "textarea"
      }
    }
  }
}

export default WhatsappButton;
