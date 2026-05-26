import { ChangeEvent, FormEvent, useState } from "react";

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

export default function ContactView() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

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
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-la-petunia text-leaf">
          Contact Us
        </h2>
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
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-leaf"
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
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-leaf"
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
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-leaf"
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
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-leaf"
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
            className="inline-flex items-center justify-center rounded-md bg-leaf px-6 py-3 text-whey font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-leaf focus:ring-offset-2"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {status !== "idle" && (
            <p
              className={`text-sm ${
                status === "success" ? "text-green-700" : "text-red-700"
              }`}
              // role=alert interrupts screen readers immediately (appropriate for errors and confirmations)
              role="alert"
              aria-live="assertive"
            >
              {statusMessage}
            </p>
          )}
        </form>

        <div className="mt-8 border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-600">Direct email:</p>
          <a
            href="mailto:3brosfood@gmail.com"
            className="text-leaf hover:underline"
          >
            3brosfood@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
