import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

console.log("GMAIL USER:", process.env.GMAIL_USER);
console.log("GMAIL PASS:", process.env.GMAIL_PASS ? "OK" : "NÃO LIDA");

const app = express();
app.use(express.json());
app.use(cors());

// Rota de teste para verificar se o servidor está rodando
app.get("/", (req, res) => {
  res.json({ message: "Backend Magitech rodando com sucesso!", status: "OK" });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Backend funcionando com Gmail",
    gmailConfigured: !!(process.env.GMAIL_USER && process.env.GMAIL_PASS),
  });
});

// Rota de recuperação de senha
app.post("/api/forgot-password", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res
      .status(400)
      .json({ success: false, message: "Email é obrigatório" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Gera um código simples de recuperação (6 dígitos)
    const recoveryCode = Math.floor(100000 + Math.random() * 900000);

    // Corpo do email de recuperação
    const emailBody = `
Olá!

Você solicitou a recuperação de senha da Magitech Studios.

Seu código de recuperação é: ${recoveryCode}

Este código é válido por 30 minutos.

Se você não solicitou esta recuperação, ignore este email.

Atenciosamente,
Equipe Magitech Studios
    `;

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Recuperação de Senha - Magitech Studios",
      text: emailBody,
    });

    res.status(200).json({
      success: true,
      message: "Email de recuperação enviado com sucesso!",
      code: recoveryCode, // Em produção, você salvaria isso no banco de dados
    });
  } catch (error) {
    console.error("Erro ao enviar email de recuperação:", error);
    res.status(500).json({
      success: false,
      message: "Erro ao enviar email de recuperação.",
      error: error.message,
    });
  }
});

// Rota de feedback de cursos
app.post("/api/send-feedback", async (req, res) => {
  const { courseId, recipientEmail, responses, timestamp } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Monta corpo do email
    let emailBody = `FEEDBACK - CURSO: ${
      courseId ? courseId.toUpperCase() : ""
    }\n========================================\n\n`;
    if (Array.isArray(responses)) {
      responses.forEach((item, index) => {
        emailBody += `${index + 1}. ${item.question}\n`;
        if (item.subtitle) emailBody += `   ${item.subtitle}\n`;
        emailBody += `   Resposta: ${item.answer}\n\n`;
      });
    }
    emailBody += `========================================\nData: ${timestamp}\n`;

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: recipientEmail,
      subject: `Feedback - ${courseId}`,
      text: emailBody,
    });

    res
      .status(200)
      .json({ success: true, message: "E-mail enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    res
      .status(500)
      .json({
        success: false,
        message: "Erro ao enviar e-mail.",
        error: error.message,
      });
  }
});

// ========================================
// 🆕 NOVA ROTA - SUPORTE
// ========================================
app.post("/api/enviar-suporte", async (req, res) => {
  const { nome, email, mensagem } = req.body;

  // Validação
  if (!nome || !email || !mensagem) {
    return res.status(400).json({
      success: false,
      message: "Por favor, preencha todos os campos",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Email HTML formatado
    const htmlEmail = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .info-box { background: white; padding: 15px; margin: 10px 0; border-left: 4px solid #667eea; border-radius: 5px; }
          .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Nova Mensagem de Suporte</h2>
          </div>
          <div class="content">
            <div class="info-box">
              <strong>👤 Nome:</strong><br>
              ${nome}
            </div>
            
            <div class="info-box">
              <strong>Email:</strong><br>
              <a href="mailto:${email}">${email}</a>
            </div>
            
            <div class="info-box">
              <strong>💬 Mensagem:</strong><br>
              ${mensagem.replace(/\n/g, "<br>")}
            </div>
            
            <div class="info-box">
              <strong>Data/Hora:</strong><br>
              ${new Date().toLocaleString("pt-BR", {
                timeZone: "America/Sao_Paulo",
              })}
            </div>
          </div>
          <div class="footer">
            <p>Este email foi enviado automaticamente pelo sistema de suporte da Magitech</p>
            <p>Para responder, clique em "Responder" no seu cliente de email</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Configurar o email
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Envia para o próprio email de suporte
      replyTo: email, // Email do usuário para resposta
      subject: `Suporte Magitech - ${nome}`,
      html: htmlEmail,
    };

    // Enviar email
    await transporter.sendMail(mailOptions);

    console.log(
      "Email de suporte enviado com sucesso para:",
      process.env.GMAIL_USER
    );

    res.status(200).json({
      success: true,
      message: "Mensagem enviada com sucesso!",
    });
  } catch (error) {
    console.error("❌ Erro ao enviar email de suporte:", error);
    res.status(500).json({
      success: false,
      message: "Erro ao enviar mensagem. Tente novamente.",
      error: error.message,
    });
  }
});

const PORT = process.env.GMAIL_PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Email configurado: ${process.env.GMAIL_USER}`);
});
