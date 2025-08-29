import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message, service, frequency, duration } = await req.json();

    // Criar o transporter com Gmail SMTP
    const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // SSL
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS, // app password
  },
  tls: {
    rejectUnauthorized: false, // sometimes needed for Gmail
  },
});


    // Enviar email
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: "andrebalao26@gmail.com", // para onde queres receber
      subject: `Novo contacto de ${name}`,
      html: `
        <h2>Nova mensagem recebida</h2>
        <p><b>Nome:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Serviço:</b> ${service || "N/A"}</p>
        <p><b>Frequência:</b> ${frequency || "N/A"}</p>
        <p><b>Duração:</b> ${duration || "N/A"}</p>
        <p><b>Mensagem:</b></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { ok: false, error: (error as Error).message || "Erro ao enviar email" },
      { status: 500 }
    );
  }
}
