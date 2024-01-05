

const Contact = () => {
  const payment = async () => { 
    const data = await fetch("http://localhost:1234/payment")
    const json = await data.json()
  }
  return (
    <div className="max-w-md mx-auto bg-green-200 p-8 rounded-md shadow-md mt-5 text-center">
      <h1 className="text-3xl font-bold mb-6 ">Contact Me</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 mb-2">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
            placeholder="Suraj Khonde"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 mb-2">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
            placeholder="Surajrkhonde@gmail.com"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-600 mb-2">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
            placeholder="Type your message here..."
          />
        </div>
        <div className="mb-6">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-red-500 text-white py-2 px-4 rounded-full focus:outline-none focus:ring focus:border-indigo-300 transition duration-300"
          >
            Send Your Thoughts
          </button>
        </div>
        <p className="text-blue-900 text-sm text-center">I'll get back to you as soon as possible!</p>
      </form>
     
    </div>
  )
};
export default Contact;