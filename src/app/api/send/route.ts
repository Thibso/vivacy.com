import { EmailTemplate } from "@/app/components/email/template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const {
      emailTo,
      firstname,
      lastname,
      email,
      country,
      specialisation,
      subject,
      message,
    } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "vivacy.com <contact@thibs-te.fr>",
      to: [emailTo, "gestion.healthcie@gmail.com", "mjy@moniqueblanchard.com"],
      // to: ["thibautsoulet33@gmail.com"],
      subject: "Contact from vivacy.com",
      react: EmailTemplate({
        firstname,
        lastname,
        email,
        country,
        specialisation,
        subject,
        message,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
