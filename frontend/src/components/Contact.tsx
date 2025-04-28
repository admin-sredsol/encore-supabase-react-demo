export default function Contact() {
  return (
    <section className="py-12 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">
          Contact Us
        </h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2 text-gray-900 dark:text-gray-100"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              rows={4}
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}