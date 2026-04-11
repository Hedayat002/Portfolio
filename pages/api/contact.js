import { connectDB } from '@/lib/mongodb'
import Message from '@/lib/models/Message'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, subject, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' })
  }

  try {
    await connectDB()

    const newMessage = await Message.create({ name, email, subject, message })

    return res.status(201).json({
      success: true,
      message: 'Message sent successfully!',
      id: newMessage._id,
    })
  } catch (error) {
    console.error('Contact API error:', error)
    return res.status(500).json({ error: 'Failed to send message. Please try again.' })
  }
}
