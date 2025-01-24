interface EmailTemplateProps {
  firstname: string;
  lastname: string;
  email: string;
  country: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstname,
  lastname,
  email,
  country,
}) => (
  <div>
    <h2>Request to be included in the newletter : </h2>
    <p>Last Name : {lastname}</p>
    <p>First Name : {firstname}</p>
    <p>Country : {country}</p>
    <p>E-mail : {email}</p>
  </div>
);
