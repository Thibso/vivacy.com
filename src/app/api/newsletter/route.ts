import { EmailTemplate } from "@/app/components/email/newsletterTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { firstname, lastname, email, country } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "vivacy.com <contact@thibs-te.fr>",
      to: ["marketing@vivacy.com"],
      subject: "Newsletter",
      react: EmailTemplate({
        firstname,
        lastname,
        email,
        country,
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
