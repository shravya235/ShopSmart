export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // Here, you could integrate with an email service like SendGrid, Mailgun, etc.
    // For now, just log the form data for demo purposes.

    console.log('Form Data:', { name, email, subject, message });

    try {
      // Simulate email sending logic or backend API request
      // Example: sendEmail(name, email, subject, message);

      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  } else {
    // Handle invalid request method (should be POST)
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
