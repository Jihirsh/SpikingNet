import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Target, Eye, Award, Users, Lightbulb, Globe } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We continuously push the boundaries of technology to create smarter, more efficient solutions.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and building strong partnerships with our clients.",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for perfection in every product and service we deliver to our customers.",
    },
    {
      icon: Globe,
      title: "Sustainability",
      description:
        "We're committed to creating environmentally responsible technology solutions.",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description:
        "SpikingNet Technologies was established with a vision to revolutionize smart home automation.",
    },
    {
      year: "2021",
      title: "First Product Launch",
      description:
        "Successfully launched our first smart device series, gaining recognition in the IoT market.",
    },
    {
      year: "2022",
      title: "Global Expansion",
      description:
        "Expanded operations internationally, serving customers across multiple continents.",
    },
    {
      year: "2023",
      title: "Innovation Award",
      description:
        "Received industry recognition for our groundbreaking IoT platform technology.",
    },
    {
      year: "2024",
      title: "AI Integration",
      description:
        "Integrated advanced AI capabilities into our smart home ecosystem.",
    },
  ];

  return (
    <div className="space-y-16">
      {/* Company Overview */}
      <section className="text-center">
        <h2 className="text-4xl font-bold gradient-text mb-6">
          About SpikingNet Technologies
        </h2>
        <div className="max-w-4xl mx-auto space-y-6 text-gray-600 text-lg leading-relaxed">
          <p>
            Founded with a passion for innovation and a commitment to
            excellence, SpikingNet Technologies has emerged as a leading force
            in the smart home automation and IoT industry. We specialize in
            creating intelligent, connected solutions that transform the way
            people interact with their living and working spaces.
          </p>
          <p>
            Our journey began with a simple vision: to make technology more
            accessible, intuitive, and beneficial for everyone. Today, we're
            proud to serve thousands of customers worldwide, helping them create
            smarter, more efficient environments through our cutting-edge
            products and services.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="glass-effect bg-white/80 backdrop-blur-sm p-8 hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 glow">
                <Target className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold gradient-text">
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center leading-relaxed">
                To empower individuals and businesses with intelligent
                technology solutions that enhance productivity, comfort, and
                sustainability. We strive to bridge the gap between complex
                technology and everyday usability, making smart living
                accessible to all.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-effect bg-white/80 backdrop-blur-sm p-8 hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 glow">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold gradient-text">
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center leading-relaxed">
                To be the global leader in smart technology innovation, creating
                a connected world where technology seamlessly integrates with
                daily life to improve quality of living, increase efficiency,
                and promote environmental sustainability.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold gradient-text mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These fundamental principles guide everything we do and shape our
            company culture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card
              key={index}
              className="glass-effect bg-white/80 backdrop-blur-sm text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-sky-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-sky-600" />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-800">
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {value.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Company Timeline */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold gradient-text mb-4">Our Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Key milestones that have shaped our company's growth and success
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-sky-300 to-cyan-300 rounded-full"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <Card className="glass-effect bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="w-5 h-5 text-sky-600" />
                        <span className="text-sky-600 font-bold text-lg">
                          {milestone.year}
                        </span>
                      </div>
                      <CardTitle className="text-xl font-semibold text-gray-800">
                        {milestone.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">
                        {milestone.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative z-10">
                  <div className="w-4 h-4 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>

                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section>
        <div className="text-center">
          <h2 className="text-3xl font-bold gradient-text mb-12">
            By the Numbers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="glass-effect bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-gray-600 font-medium">Team Members</div>
            </div>

            <div className="glass-effect bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold gradient-text mb-2">10K+</div>
              <div className="text-gray-600 font-medium">Happy Customers</div>
            </div>

            <div className="glass-effect bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold gradient-text mb-2">25+</div>
              <div className="text-gray-600 font-medium">Countries Served</div>
            </div>

            <div className="glass-effect bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold gradient-text mb-2">100+</div>
              <div className="text-gray-600 font-medium">Products Launched</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
