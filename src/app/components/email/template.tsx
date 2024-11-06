interface EmailTemplateProps {
  firstname: string;
  lastname: string;
  email: string;
  country: string;
  specialisation: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstname,
  lastname,
  email,
  country,
  specialisation,
  subject,
  message,
}) => (
  <div>
    <h2>Contact via vivacy.com</h2>
    <p>Last Name : {lastname}</p>
    <p>First Name : {firstname}</p>
    <p>Country : {country}</p>
    <p>E-mail : {email}</p>
    <p>Specialisation : {specialisation}</p>
    <p>Subject : {subject}</p>
    <p>Message : {message}</p>
  </div>
);
