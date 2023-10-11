import { NextResponse } from "next/server";

import Mailjet from "node-mailjet";
const mailer = (from, toEmailList, subject, html, publicKey, privateKey) => {
  const mailjet = Mailjet.apiConnect(publicKey, privateKey);
  return mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: from,
          Name: from.match(/([^@]+)/)[1],
        },
        To: toEmailList.map((email) => {
          return {
            Email: email,
            Name: email.match(/([^@]+)/)[1],
          };
        }),

        Subject: subject,
        HTMLPart: html,
      },
    ],
  });
};

export async function POST(req) {
  const requestBody = await req.json();
  const name = requestBody.name;
  const email = requestBody.email;
  const message = requestBody.message;

  const from = "no-reply@sec-dojo.com"; // to replace with sekops email
  const toEmailList = JSON.parse(process.env.NEXT_MAILJET_TO_EMAIL_LIST);

  const subject = `Sekops Contact Message From ${name}`;
  const html = `<p>A new form was sent in Sekops's landing page.</p><p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`;

  try {
    const data = await mailer(
      from,
      toEmailList,
      subject,
      html,
      process.env.NEXT_MAILJET_PUBLIC_KEY,
      process.env.NEXT_MAILJET_PRIVATE_KEY,
    );

    console.log("[MailJet] Success", data);
    return NextResponse.json({
      statusCode: data.response.status,
      message: "Your message has been submitted",
    });
  } catch (error) {
    console.log("[MailJet] Error", error);

    // Console log the error
    return NextResponse.json({
      statusCode: 400,
      message: "Something went wrong please try again later",
    });
  }
}
