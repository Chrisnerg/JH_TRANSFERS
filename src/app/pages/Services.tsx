import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  Plane,
  Car,
  MapPin,
  Building2,
  Users,
  Clock,
  Shield,
  CheckCircle,
  Briefcase,
} from "lucide-react";

export function Services() {
  const mainServices = [
    {
      icon: Plane,
      title: "Airport Shuttle Services",
      description:
        "Reliable and punctual airport transfers to and from all major South African airports including OR Tambo, Cape Town International, King Shaka, and more.",
      features: [
        "Real-time flight monitoring",
        "Meet and greet service",
        "Luggage assistance",
        "Door-to-door service",
        "Professional drivers",
        "Clean, comfortable vehicles",
      ],
      image: "https://images.unsplash.com/photo-1758669246636-17a5f6d972ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb3J0JTIwdGVybWluYWwlMjBtb2Rlcm58ZW58MXx8fHwxNzc1NjE1MzE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: MapPin,
      title: "Tour Services",
      description:
        "Explore the beauty of South Africa with our customized tour packages. From Cape Town's scenic routes to Kruger National Park safaris, we've got you covered.",
      features: [
        "Customizable tour packages",
        "Experienced tour guides",
        "Multiple destination options",
        "Small group or private tours",
        "Photography opportunities",
        "Cultural experiences",
      ],
      image: "https://images.unsplash.com/photo-1626894169601-482d26b23f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZSUyMG1vdW50YWluJTIwY2FwZSUyMHRvd258ZW58MXx8fHwxNzc1NjMxMTUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Building2,
      title: "Corporate Transport",
      description:
        "Professional transportation solutions for businesses including executive transfers, corporate events, and team transportation with flexible scheduling.",
      features: [
        "Executive vehicle options",
        "Account management",
        "Flexible scheduling",
        "Monthly billing available",
        "Conference & event support",
        "Professional appearance",
      ],
      image: "https://images.unsplash.com/photo-1750210505997-ed85e9f8cb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzaHV0dGxlJTIwdmFuJTIwdHJhbnNwb3J0YXRpb258ZW58MXx8fHwxNzc1NjMxMTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const additionalServices = [
    {
      icon: Car,
      title: "Long Distance Transfers",
      description: "Comfortable inter-city travel across South Africa",
    },
    {
      icon: Users,
      title: "Group Transportation",
      description: "Spacious vehicles for groups and families",
    },
    {
      icon: Briefcase,
      title: "Business Travel",
      description: "Reliable transport for business professionals",
    },
  ];

  const popularDestinations = [
    "Johannesburg - OR Tambo Airport",
    "Cape Town International Airport",
    "King Shaka International Airport - Durban",
    "Kruger National Park",
    "Garden Route",
    "Wine Country - Stellenbosch",
    "Table Mountain & Cape Peninsula",
    "Pilanesberg Game Reserve",
    "Drakensberg Mountains",
    "Wild Coast",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1774281701720-fa161a58157a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZhcmklMjB0b3VyJTIwdmVoaWNsZXxlbnwxfHx8fDE3NzU2MzExNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Our services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Comprehensive transportation solutions across South Africa - from airport transfers to customized tours
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center">
                      <service.icon className="h-7 w-7 text-teal-600" />
                    </div>
                    <h2 className="text-3xl font-semibold text-gray-900">{service.title}</h2>
                  </div>

                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-block bg-teal-600 text-white px-8 py-3 rounded-md hover:bg-teal-700 transition-colors"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">More ways we can help you travel with ease</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-8 text-center space-y-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full">
                  <service.icon className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">What Makes Us Different</h2>
            <p className="text-xl text-gray-600">Excellence in every journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full">
                <Shield className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Safety First</h3>
              <p className="text-gray-600">All drivers are professionally trained and vehicles are regularly maintained to the highest standards</p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full">
                <Clock className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Punctuality</h3>
              <p className="text-gray-600">We monitor flight times and traffic to ensure you never miss a flight or appointment</p>
            </div>

            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full">
                <Users className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Customer Care</h3>
              <p className="text-gray-600">24/7 customer support and personalized service for all your travel needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">Popular Destinations</h2>
            <p className="text-xl text-gray-600">We serve all major cities and tourist destinations across South Africa</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {popularDestinations.map((destination, index) => (
              <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-4">
                <MapPin className="h-5 w-5 text-teal-600 flex-shrink-0" />
                <span className="text-gray-700">{destination}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold mb-6">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 text-teal-100 max-w-2xl mx-auto">
            We can create a tailored transportation package for your specific needs. Contact us to discuss your requirements
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-teal-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-lg font-semibold"
          >
            Get a Custom Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
