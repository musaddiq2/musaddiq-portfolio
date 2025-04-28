import { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! (Placeholder)');
  };

  return (
    <motion.div
      className="max-w-md mx-auto"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
    >
      <Typography variant="h5" className="mb-6 text-center">
        Get in Touch
      </Typography>
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Message"
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          variant="outlined"
        />
        <Button
          type="submit"
          variant="contained"
          className="bg-cyan-500 hover:bg-cyan-600 w-full"
        >
          Send Message
        </Button>
      </form>
    </motion.div>
  );
};

export default ContactForm;