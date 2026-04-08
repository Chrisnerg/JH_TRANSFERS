import { BookingForm } from "../components/BookingForm";
import { Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react";

export function Contact() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+27 (0) 12 345 6789", "+27 (0) 82 348 0989"],
      description: "Call us 24/7 for immediate assistance",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["+27 (0) 82 348 0989"],
      description: "Quick response via WhatsApp",
      link: "https://wa.me/27823480989",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@shuttleservice.co.za", "bookings@shuttleservice.co.za"],
      description: "Email us for quotes and inquiries",
    },
  ];

  const offices = [
    {
      city: "Johannesburg",
      address: "123 Airport Road, Kempton Park, Johannesburg, 1619",
      phone: "+27 (0) 11 123 4567",
    },
    {
      city: "Cape Town",
      address: "456 Century Boulevard, Century City, Cape Town, 7441",
      phone: "+27 (0) 21 987 6543",
    },
    {
      city: "Durban",
      address: "789 La Mercy Drive, Mount Edgecombe, Durban, 4302",
      phone: "+27 (0) 31 456 7890",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-600 to-teal-700 py-20">
        <div className="container mx-auto px-4 text-white">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-teal-100">
              We're here to help! Get in touch for quotes, bookings, or any questions about our services
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Choose your preferred way to contact us</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 text-center space-y-4 hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full">
                  <method.icon className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">{method.title}</h3>
                <div className="space-y-2">
                  {method.details.map((detail, idx) => (
                    <p key={idx} className="text-lg text-teal-600 font-semibold">
                      {method.link ? (
                        <a href={method.link} className="hover:text-teal-700">
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
                <p className="text-gray-600">{method.description}</p>
              </div>
            ))}
          </div>

          {/* Operating Hours */}
          <div className="bg-teal-50 rounded-lg p-8 max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
              <Clock className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Operating Hours</h3>
            <div className="space-y-2 text-lg">
              <p className="text-gray-700">
                <span className="font-semibold">Customer Service:</span> 24/7
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Office Hours:</span> Monday - Friday: 8:00 AM - 6:00 PM
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Weekends:</span> 9:00 AM - 5:00 PM
              </p>
              <p className="text-gray-600 text-base mt-4">Shuttle services available 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">Request a Quote</h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you with a customized quote within 2 hours
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">Our Offices</h2>
            <p className="text-xl text-gray-600">Visit us at any of our locations across South Africa</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">{office.city}</h3>
                </div>
                <div className="space-y-2 text-gray-700">
                  <p>{office.address}</p>
                  <p className="flex items-center gap-2 text-teal-600 font-semibold">
                    <Phone className="h-4 w-4" />
                    {office.phone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">How do I get a quote?</h3>
              <p className="text-gray-600">
                Simply fill out the quote request form above with your travel details, and we'll respond within 2 hours
                with a customized quote. You can also call or WhatsApp us for immediate assistance.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">How far in advance should I book?</h3>
              <p className="text-gray-600">
                We recommend booking at least 24-48 hours in advance for airport transfers and 1 week in advance for tour
                services. However, we also accept last-minute bookings subject to availability.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept cash, credit/debit cards, EFT, and corporate accounts. Payment details will be provided with
                your quote.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Can I modify or cancel my booking?</h3>
              <p className="text-gray-600">
                Yes, you can modify or cancel your booking. Please contact us as soon as possible. Cancellation policies
                will be outlined in your booking confirmation.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Do you provide services outside South Africa?</h3>
              <p className="text-gray-600">
                Currently, we specialize in transportation services within South Africa only. We cover all major cities
                and tourist destinations across the country.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Are your drivers licensed and insured?</h3>
              <p className="text-gray-600">
                Yes, all our drivers are professionally licensed, trained, and fully insured. We maintain a 100% safety
                record and conduct thorough background checks on all our staff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold mb-6">Still Have Questions?</h2>
          <p className="text-xl mb-8 text-teal-100 max-w-2xl mx-auto">
            Our customer service team is available 24/7 to assist you. Don't hesitate to reach out!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+27123456789"
              className="inline-block bg-white text-teal-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-semibold"
            >
              Call Us Now
            </a>
            <a
              href="https://wa.me/27823480989"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-teal-600 transition-colors font-semibold"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
