import emailjs from "emailjs-com";

const SendEmail = (email, name) => {
  emailjs
    .send(
      "service_c2niynl",
      "template_f8bny7y",
      {
        user_email: email,
        user_name: name,
      },
      "myMHRClx16dS83Jod"
    )
  };

export default SendEmail;