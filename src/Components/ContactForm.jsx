import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // 'success', 'error', or ''
  const { theme } = useTheme();

  const headingColor = theme === "dark" ? "text-white" : "text-slate-900";
  const descriptionColor =
    theme === "dark" ? "text-gray-400" : "text-slate-600";
  const inputStyles =
    theme === "dark"
      ? "bg-zinc-900/60 border-zinc-700 text-white placeholder-zinc-500"
      : "bg-white border-slate-300 text-slate-900 placeholder-slate-400";
  const buttonStyles =
    theme === "dark"
      ? "bg-white text-black hover:bg-gray-100"
      : "bg-slate-900 text-white hover:bg-slate-800";

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trim values to prevent empty spaces
    if (!email.trim()) {
      setStatus("error");
      return;
    }

    // EmailJS integration
    emailjs
      .send(
        "service_viytt6e", // Your EmailJS Service ID
        "template_cryf6z6", // Your EmailJS Template ID
        { email }, // Form data object
        "kl78yhcPi0G9Ti1Vs" // Your EmailJS Public Key
      )
      .then(
        () => setStatus("success"),
        () => setStatus("error")
      );

    // Reset form
    setEmail("");

    // Reset status after 3 seconds
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <section className="w-full max-w-4xl mx-auto p-6">
      <div
        className="rounded-2xl border border-dashed p-8"
        style={{ borderColor: theme === "dark" ? "#3f3f46" : "#cbd5e1" }}
      >
        <h2 className={`text-2xl font-bold mb-2 ${headingColor}`}>
          Get in Touch
        </h2>
        <p className={`text-sm mb-6 ${descriptionColor}`}>
          Want to hire me? Let's discuss.
Drop your message and let's discuss about your project.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className={`w-full px-4 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              theme === "dark" ? "focus:ring-white" : "focus:ring-slate-900"
            } ${inputStyles}`}
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
            Please fill the field or try again.
          </p>
        )}
      </div>
    </section>
  );
}