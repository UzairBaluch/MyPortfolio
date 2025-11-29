import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState(""); // 'success', 'error', or ''
  const { theme } = useTheme();

  const headingColor = theme === "dark" ? "text-white" : "text-slate-900";
  const descriptionColor = theme === "dark" ? "text-gray-400" : "text-slate-600";
  const inputStyles = theme === "dark"
    ? "bg-zinc-900/60 border-zinc-700 text-white placeholder-zinc-500"
    : "bg-white border-slate-300 text-slate-900 placeholder-slate-400";
  const buttonStyles = theme === "dark"
    ? "bg-white text-black hover:bg-gray-100"
    : "bg-slate-900 text-white hover:bg-slate-800";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    // **EmailJS integration**
    emailjs
      .send(
        
        "template_rf33337",  
        formData,
        "Jzl838v9XvPDaOWWR"    
      )
      .then(
        () => setStatus("success"),
        () => setStatus("error")
      );

    // Reset form
    setFormData({ name: "", email: "", message: "" });

    // Reset status after 3 seconds
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <section className="w-full max-w-4xl mx-auto p-6">
      <div className="rounded-2xl border border-dashed p-8"
        style={{ borderColor: theme === "dark" ? "#3f3f46" : "#cbd5e1" }}>
        <h2 className={`text-2xl font-bold mb-2 ${headingColor}`}>Get in Touch</h2>
        <p className={`text-sm mb-6 ${descriptionColor}`}>
          Have a question or want to work together? Drop me a message!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className={`w-full px-4 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${theme === "dark" ? "focus:ring-white" : "focus:ring-slate-900"} ${inputStyles}`}
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className={`w-full px-4 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${theme === "dark" ? "focus:ring-white" : "focus:ring-slate-900"} ${inputStyles}`}
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={4}
            className={`w-full px-4 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 resize-none ${theme === "dark" ? "focus:ring-white" : "focus:ring-slate-900"} ${inputStyles}`}
          />

          <button
            type="submit"
            className={`w-full px-6 py-3 rounded-lg text-sm font-semibold transition-colors ${buttonStyles}`}
          >
            Send Message
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-sm text-green-500 text-center">
            ✓ Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-sm text-red-500 text-center">
            Please fill in all fields or try again.
          </p>
        )}
      </div>
    </section>
  );
}
