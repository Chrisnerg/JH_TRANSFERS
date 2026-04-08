import { Link } from "react-router";
import { BookingForm } from "../components/BookingForm";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  Shield,
  Clock,
  Users,
  Star,
  MapPin,
  Plane,
  Car,
  CheckCircle,
} from "lucide-react";

export function Home() {
  const features = [
    {
      icon: Shield,
      title: "Safe & Reliable",
      description: "100% safety record with professional, vetted drivers",
    },
    {
      icon: Clock,
      title: "Always On Time",
      description: "Punctual service with real-time flight monitoring",
    },
    {
      icon: Users,
      title: "Professional Service",
      description: "Courteous drivers and premium vehicle fleet",
    },
    {
      icon: Star,
      title: "Top Rated",
      description: "Trusted by thousands with 4.9 star rating",
    },
  ];

  const services = [
    {
      icon: Plane,
      title: "Airport Transfers",
      description: "Reliable pickup and drop-off service to all major South African airports",
      image: "https://images.unsplash.com/photo-1758669246636-17a5f6d972ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb3J0JTIwdGVybWluYWwlMjBtb2Rlcm58ZW58MXx8fHwxNzc1NjE1MzE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Car,
      title: "City Transfers",
      description: "Comfortable transportation for business meetings and events",
      image: "https://images.unsplash.com/photo-1750210505997-ed85e9f8cb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzaHV0dGxlJTIwdmFuJTIwdHJhbnNwb3J0YXRpb258ZW58MXx8fHwxNzc1NjMxMTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: MapPin,
      title: "Tour Services",
      description: "Explore South Africa's beauty with our guided tour packages",
      image: "https://images.unsplash.com/photo-1626894169601-482d26b23f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZSUyMG1vdW50YWluJTIwY2FwZSUyMHRvd258ZW58MXx8fHwxNzc1NjMxMTUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const reasons = [
    "Operational in all major cities across South Africa",
    "Largest private shuttle fleet in the industry",
    "Over 15 years of experience in transport sector",
    "Booking takes less than 60 seconds",
    "Efficient, reliable, friendly and cost-effective",
    "100% safety record with professional drivers",
    "Successful partnerships with 400+ local companies",
    "More branches in SA than any other service provider",
    "500,000+ passengers transported per year",
    "Strong focus on courtesy and professionalism",
  ];

  const testimonials = [
    {
      name: "Gordon Reid",
      text: "Fantastic transfer service, we have used them for 5 weeks now and they are always on time, pleasant and gracious. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1768829781487-a697bc656313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkcml2ZXIlMjB1bmlmb3JtfGVufDF8fHx8MTc3NTYzMTE1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Minenhle Mkhalo",
      text: "I took this shuttle from King Shaka Airport. Booking was super easy and confirmation came instantly. My driver was very professional and friendly. Highly recommend!",
      rating: 5,
    },
    {
      name: "Brenda Naidoo",
      text: "Excellent customer service. I booked 8 shuttles with them and the booking itself was efficient and the drivers were there on time and very helpful. Would recommend 10/10",
      rating: 5,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[760px] py-10 lg:py-14">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1660067532059-bd0b42c90f03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aCUyMGFmcmljYSUyMGxhbmRzY2FwZSUyMHNjZW5pY3xlbnwxfHx8fDE3NzU2MzExNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="South African landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:items-start">
            <div className="text-white space-y-6 lg:pt-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight">
                Across <span className="text-teal-400">South Africa</span> and beyond
              </h1>
              <p className="text-lg sm:text-xl text-gray-200">
                Safe, comfortable, hassle-free airport transfers and tour services throughout South Africa
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-teal-600 text-white px-6 sm:px-8 py-3 rounded-md hover:bg-teal-700 transition-colors text-base sm:text-lg"
                >
                  Get a Quote
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-md hover:bg-white hover:text-gray-900 transition-colors text-base sm:text-lg"
                >
                  Our Services
                </Link>
              </div>
            </div>

            <div className="lg:block lg:self-start">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full">
                  <feature.icon className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Professional transportation solutions for every need</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block bg-teal-600 text-white px-8 py-3 rounded-md hover:bg-teal-700 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">Why Choose JH TRANSFERS</h2>
            <p className="text-xl text-gray-600">
              Established in 2010, we have perfected the art of stress-free transportation
            </p>
            <p className="text-lg text-gray-600 mt-2">
              Here are ten great reasons to book your next transfer with us:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Looking for objective confirmation of the service excellence we offer?</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700">{testimonial.text}</p>
                <div className="flex items-center gap-3 pt-4 border-t">
                  {testimonial.image && (
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">Verified Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-4 bg-gray-50 px-8 py-4 rounded-lg">
              <div className="flex items-center gap-2">
                <img
                  src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_74x24dp.png"
                  alt="Google"
                  className="h-6"
                />
              </div>
              <div className="border-l pl-4">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-gray-900">4.9</span>
                  <div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">11,198 reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold mb-6">Ready to Book Your Journey?</h2>
          <p className="text-xl mb-8 text-teal-100">
            Get a personalized quote for your airport transfer or tour service today
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-teal-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-lg font-semibold"
          >
            Request a Quote Now
          </Link>
        </div>
      </section>
    </div>
  );
}
