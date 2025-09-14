import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewsAndEvents from "@/components/NewsAndEvents";
import AboutUs from "@/components/AboutUs";

const Insights = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Insights & Knowledge
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, events, and learn more about our
            mission
          </p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Tabs defaultValue="news" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="glass-effect bg-white/80 backdrop-blur-sm p-1 h-12">
              <TabsTrigger
                value="news"
                className="px-8 py-2 text-lg font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-sky-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white"
              >
                News & Events
              </TabsTrigger>
              <TabsTrigger
                value="about"
                className="px-8 py-2 text-lg font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-sky-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white"
              >
                About Us
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="news" className="mt-0">
            <NewsAndEvents />
          </TabsContent>

          <TabsContent value="about" className="mt-0">
            <AboutUs />
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Insights;
