import { ChangeEvent, FormEvent, useState } from "react";
import SEOHead from "../components/SEOHead";

type SubmitStatus = "idle" | "success" | "error";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
}

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "Restaurant",
      name: "3Bros Burgers",
      email: "sean.myles.gray@gmail.com",
      areaServed: "United States",
    },
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus("idle");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatus("error");
        setStatusMessage(
          payload.message ??
            "Something went wrong while sending your message. Please try again."
        );
        return;
      }

      setStatus("success");
      setStatusMessage("Thanks. Your message has been sent.");
      setFormData(initialFormData);
    } catch {
      setStatus("error");
      setStatusMessage(
        "Something went wrong while sending your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Contact Us - 3Bros Burgers"
        description="Contact 3Bros Burgers. Send us a message and we will get back to you."
        canonical="/contact"
        keywords="contact 3Bros, burger restaurant contact, send message"
        structuredData={structuredData}
      />

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-la-petunia text-[var(--color-sub-green)]">
            Contact Us
          </h1>
          <p className="mt-3 text-gray-700">
            Send us a message and we will reply as soon as possible.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-5">
              <label className="block">
                <span className="block mb-2 text-sm font-medium text-gray-700">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--color-sub-green)]"
                  placeholder="Your full name"
                />
              </label>

              <label className="block">
                <span className="block mb-2 text-sm font-medium text-gray-700">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--color-sub-green)]"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="block">
              <span className="block mb-2 text-sm font-medium text-gray-700">
                Subject
              </span>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--color-sub-green)]"
                placeholder="How can we help?"
              />
            </label>

            <label className="block">
              <span className="block mb-2 text-sm font-medium text-gray-700">
                Message
              </span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[var(--color-sub-green)]"
                placeholder="Write your message"
              />
            </label>

            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-md bg-[var(--color-sub-green)] px-6 py-3 text-white font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {status !== "idle" && (
              <p
                className={`text-sm ${
                  status === "success" ? "text-green-700" : "text-red-700"
                }`}
                role="status"
              >
                {statusMessage}
              </p>
            )}
          </form>

          <div className="mt-8 border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-600">Direct email:</p>
            <a
              href="mailto:sean.myles.gray@gmail.com"
              className="text-[var(--color-sub-green)] hover:underline"
            >
              sean.myles.gray@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
