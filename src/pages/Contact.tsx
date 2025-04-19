import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formRef = useRef<HTMLFormElement>(null);

  
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!formRef.current) return;

  emailjs
    .sendForm(
      "service_mvormrn", // ✅ Your service ID
      "template_eimmpjm", // ✅ Your template ID
      formRef.current, // ✅ Form reference
      "C2lxoyveDBM6Ifz75" // ✅ Your public key
    )
    .then(() => {
      alert("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // clear form
    })
    .catch((error) => {
      console.error("❌ Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    });
};
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-white">Get in Touch</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-teal-400"></div>
            <p className="text-gray-300 max-w-3xl">
              I'm always open to new opportunities and collaborations. Feel free
              to reach out!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-blue-400" />
                <div>
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <p className="mt-1 text-gray-400">
                    Boikanyokanyo481@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-blue-400" />
                <div>
                  <h3 className="text-lg font-medium text-white">Phone</h3>
                  <p className="mt-1 text-gray-400">+27 82 667 4431</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-blue-400" />
                <div>
                  <h3 className="text-lg font-medium text-white">Location</h3>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=61+Christiaan+De+Wet+Street,+Witbank,+eMalahleni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 text-blue-400 hover:underline"
                  >
                    <p className="mt-1 text-gray-400">
                      61 Christiaan De Wet Street
                    </p>
                  </a>
                </div>
              </div>
            </div>

            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="from_name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  id="from_name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="from_email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  id="from_email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="mt-1 block w-full rounded-lg bg-gray-800 border-gray-700 text-white focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Send Message <Send className="ml-2" size={20} />
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
