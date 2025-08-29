import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message, service, frequency, duration } = await req.json();

    await resend.emails.send({
      from: "onboarding@resend.dev", // must be verified in Resend dashboard
      to: "andrebalao26@gmail.com", // your inbox
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
    return NextResponse.json({ ok: false, error: "Erro ao enviar email" }, { status: 500 });
  }
}
