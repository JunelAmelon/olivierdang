import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface ContactFormData {
  firstName: string;
  email: string;
  phone: string;
  address: string;
  message: string;
  services: string[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  try {
    const formData: ContactFormData = req.body;
    
    // Validation des données
    if (!formData.firstName || !formData.email || !formData.message) {
      return res.status(400).json({ 
        success: false,
        message: 'Champs requis manquants (nom, email, message)' 
      });
    }

    // Configuration du transporteur email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true pour 465, false pour autres ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Préparer le contenu de l'email
    const servicesText = formData.services.length > 0 
      ? formData.services.join(', ') 
      : 'Aucun service spécifique sélectionné';

    const emailHtml = generateEmailHTML(formData, servicesText);

    // Envoyer l'email à Olivier
    await transporter.sendMail({
      from: `"${formData.firstName}" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO || 'olivier@olivierdang.fr',
      replyTo: formData.email,
      subject: ` Nouveau contact: ${formData.firstName} - ${formData.services[0] || 'Demande générale'}`,
      html: emailHtml,
    });

    // Envoyer un email de confirmation au client
    await sendConfirmationEmail(transporter, formData);

    console.log(' Emails envoyés avec succès');

    res.status(200).json({ 
      success: true, 
      message: 'Message envoyé avec succès !' 
    });

  } catch (error) {
    console.error(' Erreur lors de l\'envoi:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Erreur lors de l\'envoi du message. Veuillez réessayer.' 
    });
  }
}

// Fonction pour générer le HTML de l'email à Olivier
function generateEmailHTML(data: ContactFormData, servicesText: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Nouveau contact depuis votre site</title>
      <style>
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
          line-height: 1.6; 
          color: #333; 
          margin: 0; 
          padding: 0; 
        }
        .container { 
          max-width: 600px; 
          margin: 0 auto; 
          background: #ffffff; 
        }
        .header { 
          background: linear-gradient(135deg, #7384bc, #5a6ba8); 
          color: white; 
          padding: 30px; 
          text-align: center; 
          border-radius: 0; 
        }
        .content { 
          padding: 30px; 
        }
        .info-block { 
          background: #f8f9fa; 
          padding: 20px; 
          margin: 15px 0; 
          border-radius: 8px; 
          border-left: 4px solid #7384bc; 
        }
        .label { 
          font-weight: bold; 
          color: #7384bc; 
          display: inline-block; 
          width: 120px; 
        }
        .message-block { 
          background: #f5f5f5; 
          padding: 20px; 
          border-radius: 8px; 
          margin: 15px 0; 
          font-style: italic; 
          border-left: 4px solid #28a745; 
        }
        .services-block { 
          background: #e8f2ff; 
          padding: 15px; 
          border-radius: 8px; 
          margin: 15px 0; 
        }
        .footer { 
          text-align: center; 
          padding: 20px; 
          background: #f8f9fa; 
          border-top: 1px solid #dee2e6; 
        }
        .btn { 
          display: inline-block; 
          background: #7384bc; 
          color: white !important; 
          padding: 12px 24px; 
          text-decoration: none; 
          border-radius: 6px; 
          margin: 10px; 
        }
        .timestamp {
          color: #6c757d;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🏠 Nouveau Contact</h1>
          <p>Olivier Dang Immobilier</p>
        </div>
        
        <div class="content">
          <p>Bonjour Olivier,</p>
          <p>Vous avez reçu un nouveau message depuis votre site web :</p>

          <div class="info-block">
            <p><span class="label"> Nom :</span> ${data.firstName}</p>
            <p><span class="label"> Email :</span> <a href="mailto:${data.email}">${data.email}</a></p>
            <p><span class="label"> Téléphone :</span> <a href="tel:${data.phone}">${data.phone || 'Non renseigné'}</a></p>
            <p><span class="label"> Adresse :</span> ${data.address || 'Non renseignée'}</p>
          </div>

          <div class="message-block">
            <strong> Message :</strong><br>
            "${data.message}"
          </div>

          <div class="services-block">
            <strong> Services demandés :</strong><br>
            ${servicesText}
          </div>

          <div class="footer">
            <p class="timestamp"><strong> Reçu le :</strong> ${new Date().toLocaleString('fr-FR', {
              timeZone: 'Europe/Paris',
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</p>
            
            <a href="mailto:${data.email}?subject=Re: Votre demande immobilière&body=Bonjour ${data.firstName},%0D%0A%0D%0AMerci pour votre message..." class="btn">
              Répondre directement
            </a>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Fonction pour envoyer un email de confirmation au client
async function sendConfirmationEmail(transporter: any, data: ContactFormData) {
  const confirmationHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
          line-height: 1.6; 
          color: #333; 
        }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
        .header { 
          background: linear-gradient(135deg, #7384bc, #5a6ba8); 
          color: white; 
          padding: 30px; 
          text-align: center; 
        }
        .content { padding: 30px; }
        .highlight { 
          background: #f8f9fa; 
          padding: 20px; 
          margin: 20px 0; 
          border-radius: 8px; 
          border-left: 4px solid #7384bc; 
        }
        .contact-info {
          background: #e8f2ff;
          padding: 20px;
          border-radius: 8px;
          margin: 20px 0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1> Message bien reçu !</h1>
          <p>Merci ${data.firstName} pour votre confiance</p>
        </div>
        
        <div class="content">
          <p>Bonjour <strong>${data.firstName}</strong>,</p>
          
          <p>Nous avons bien reçu votre message et vous remercions de l'intérêt que vous portez à nos services immobiliers.</p>
          
          <div class="highlight">
            <p><strong> Notre engagement :</strong> Notre équipe vous recontactera dans les <strong>2 heures</strong> pour discuter de votre projet.</p>
          </div>
          
          <div class="highlight">
            <h3> Récapitulatif de votre demande :</h3>
            <p><strong>Services :</strong> ${data.services.join(', ') || 'Conseil général'}</p>
            <p><strong>Votre message :</strong><br><em>"${data.message}"</em></p>
          </div>
          
          <div class="contact-info">
            <h3> En attendant, vous pouvez nous contacter :</h3>
            <ul style="list-style: none; padding: 0;">
              <li style="margin: 10px 0;"> <strong>Téléphone :</strong> +33 1 23 45 67 89</li>
              <li style="margin: 10px 0;"> <strong>Email :</strong> contact@olivierdang.fr</li>
              <li style="margin: 10px 0;"> <strong>Adresse :</strong> 123 Avenue des Champs-Élysées, 75008 Paris</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px;">
            <p><strong>L'équipe Olivier Dang Immobilier</strong></p>
            <p style="color: #7384bc; font-style: italic;">Votre partenaire immobilier de confiance</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  await transporter.sendMail({
    from: `"Olivier Dang Immobilier" <${process.env.SMTP_USER}>`,
    to: data.email,
    subject: ' Votre message a été reçu - Olivier Dang Immobilier',
    html: confirmationHtml,
  });
}