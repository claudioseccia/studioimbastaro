import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const WorkWithUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    file: null,
  });
  const [status, setStatus] = useState("");
  const recaptchaRef = useRef();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const token = await recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset();

      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("message", form.message);
      if (form.file) formData.append("file", form.file);
      formData.append("recaptcha", token);

      const res = await fetch("/mail.php", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (result.success) {
        setStatus("✅ Mail sent successfully!");
      } else {
        setStatus("❌ Error: " + result.error);
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Error connecting to server.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mail-form">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        required
      />
      <input
        type="file"
        name="file"
        accept=".pdf,.doc,.docx,.png,.jpg"
        onChange={handleChange}
      />
      <button type="submit">Send</button>
      <ReCAPTCHA
        sitekey="YOUR_RECAPTCHA_SITE_KEY"
        size="invisible"
        ref={recaptchaRef}
      />
      <p>{status}</p>
    </form>
  );
};

export default WorkWithUs;
