/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

import QrCodeWithLogo from "qrcode-with-logos";
import image from "../images/bandera.png";

const generateQRCodeWithLogo = async () => {
  console.log("Generating QR code with logo...");
  const inputUrl = document.getElementById("qr-code-text").value;
  console.log("Input URL: ", inputUrl);
  new QrCodeWithLogo({
    canvas: document.getElementById("qr-code"),
    content: inputUrl,
    download: false,
    width: 300,
    logo: {
      src: image,
    },
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("generate-qr-code");
  button.addEventListener("click", generateQRCodeWithLogo);
});
