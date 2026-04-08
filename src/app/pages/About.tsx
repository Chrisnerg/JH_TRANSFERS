import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Shield, Award, Users, TrendingUp, Target, Heart } from "lucide-react";

export function About() {
  const stats = [
    { number: "500,000+", label: "Passengers Annually" },
    { number: "15+", label: "Years Experience" },
    { number: "400+", label: "Corporate Partners" },
    { number: "4.9", label: "Average Rating" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Safety",
      description: "Your safety is our top priority. All our drivers are thoroughly vetted and our vehicles are maintained to the highest standards.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every journey, ensuring professional service and comfortable transportation.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "We put our customers first, providing personalized service and 24/7 support for all your travel needs.",
    },
    {
      icon: Target,
      title: "Reliability",
      description: "Count on us for punctual, dependable service. We monitor flights and traffic to ensure you're always on time.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We continuously improve our services with modern technology and best practices in the transportation industry.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We're passionate about showcasing South Africa's beauty and providing memorable travel experiences.",
    },
  ];

  const timeline = [
    {
      year: "2010",
      title: "Founded",
      description: "JH TRANSFERS was established with a mission to make passenger transport safe and easy.",
    },
    {
      year: "2013",
      title: "Expansion",
      description: "Extended operations to 5 major cities across South Africa.",
    },
    {
      year: "2016",
      title: "Fleet Growth",
      description: "Became the largest private shuttle fleet in the industry.",
    },
    {
      year: "2020",
      title: "Technology Integration",
      description: "Launched mobile app and online booking platform for seamless customer experience.",
    },
    {
      year: "2024",
      title: "Award Recognition",
      description: "Recognized as South Africa's most trusted shuttle service provider.",
    },
    {
      year: "2026",
      title: "Continued Excellence",
      description: "Serving 500,000+ passengers annually with 4.9-star rating.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1750210505997-ed85e9f8cb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzaHV0dGxlJTIwdmFuJTIwdHJhbnNwb3J0YXRpb258ZW58MXx8fHwxNzc1NjMxMTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="About us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            South Africa's most trusted airport shuttle and tour service provider since 2010
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-teal-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-semibold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Founded in 2010, JH TRANSFERS began with a simple yet powerful mission: to make passenger
                  transport safe and easy to book and use. Everything we do is in support of this simple, yet complex
                  goal.
                </p>
                <p>
                  Over the years, we've grown to become South Africa's largest private transfer provider, trusted by
                  thousands of people on a daily basis. Our success is built on our unwavering commitment to safety,
                  reliability, and customer satisfaction.
                </p>
                <p>
                  We've expanded our operations to cover all major cities across South Africa, from Johannesburg to Cape
                  Town, Durban to Port Elizabeth. With more branches in South Africa than any other service provider,
                  we're always close by when you need us.
                </p>
                <p>
                  Today, we transport over 500,000 passengers per year and maintain partnerships with over 400 local
                  companies. Our 4.9-star rating and thousands of positive reviews speak to the quality of service we
                  provide every single day.
                </p>
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1768829781487-a697bc656313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkcml2ZXIlMjB1bmlmb3JtfGVufDF8fHx8MTc3NTYzMTE1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional driver"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-8">"</div>
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
              Our mission is to make passenger transport safe and easy to book and use — everything we do is in support
              of this simple, yet complex goal.
            </h2>
            <p className="text-xl text-gray-600">- Managing Director</p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full">
                  <value.icon className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Milestones in our growth story</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {item.year}
                  </div>
                  {index !== timeline.length - 1 && <div className="w-1 flex-1 bg-teal-200 mt-2"></div>}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1626894169601-482d26b23f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZSUyMG1vdW50YWluJTIwY2FwZSUyMHRvd258ZW58MXx8fHwxNzc1NjMxMTUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Cape Town"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-4xl font-semibold text-gray-900 mb-6">Why We're Different</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">100% Safety Record</h3>
                    <p className="text-gray-600">
                      Because we get them safely from Point A to Point B with zero stress or fuss - and we'll throw in a
                      smile for good measure.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Largest Fleet</h3>
                    <p className="text-gray-600">
                      More branches in South Africa than any other service provider, with the largest private shuttle
                      fleet in the industry.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Track Record</h3>
                    <p className="text-gray-600">
                      Almost 20 years of experience in the transport sector, with over 500,000 passengers transported per
                      year.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
