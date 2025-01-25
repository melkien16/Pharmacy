import emailjs from "emailjs-com";

const SendRejection = (email, name) => {
  emailjs.send(
    "service_d8kujpi",
    "template_nyyq4cq",
    {
      user_email: email,
      user_name: name,
    },
    "86IW6i1R3GY2ayky7"
  );
};

export default SendRejection;
