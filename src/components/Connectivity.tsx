import { Home, Mic, Speaker } from 'lucide-react';

const Connectivity = () => {
  const platforms = [
    {
      icon: Home,
      name: "Google Nest",
      description: "Seamlessly integrate with Google Home ecosystem"
    },
    {
      icon: Speaker,
      name: "Amazon Echo",
      description: "Connect with Alexa-powered smart devices"
    },
    {
      icon: Mic,
      name: "Voice Control",
      description: "Control your home with simple voice commands"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Background floating elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            <span className="gradient-text">Seamless Connectivity</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect with your favorite smart home platforms for unified control
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <div 
              key={index} 
              className="text-center group bg-white/30 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/40 transition-all duration-300 hover:scale-105 glass-effect"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-sky-100 to-cyan-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <platform.icon className="w-10 h-10 text-sky-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{platform.name}</h3>
              <p className="text-gray-600 leading-relaxed">{platform.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Connectivity;