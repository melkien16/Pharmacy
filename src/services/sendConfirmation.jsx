import emailjs from "emailjs-com";

const SendConfirmation = (email, name) => {
  emailjs.send(
    "service_c2niynl",
    "template_ae06dpb",
    {
      user_email: email,
      user_name: name,
    },
    "myMHRClx16dS83Jod"
  );
};

export default SendConfirmation;
