import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";

const NewsAndEvents = () => {
  const newsItems = [
    {
      id: 1,
      title: "The Future of IoT: Transforming Smart Cities",
      excerpt:
        "Discover how advanced sensor networks are revolutionizing urban infrastructure and creating more efficient, sustainable cities for the future.",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "IoT Innovation",
      image:
        "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=250&fit=crop",
    },
    {
      id: 2,
      title: "SpikingNet Wins Best Innovation Award 2024",
      excerpt:
        "We are proud to announce that SpikingNet has been recognized as the Best Innovation Company at the Global Tech Awards 2024.",
      author: "Marketing Team",
      date: "2024-01-10",
      readTime: "5 min read",
      category: "Company News",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
    },
    {
      id: 3,
      title: "New Product Launch: Advanced Temperature Sensors",
      excerpt:
        "Introducing our latest line of temperature sensors with enhanced accuracy and wireless connectivity for industrial applications.",
      author: "Product Team",
      date: "2024-01-08",
      readTime: "6 min read",
      category: "Product Update",
      image:
        "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=400&h=250&fit=crop",
    },
    {
      id: 4,
      title: "Upcoming Webinar: IoT Security Best Practices",
      excerpt:
        "Join our experts for an in-depth discussion on securing IoT devices and networks in enterprise environments.",
      author: "Events Team",
      date: "2024-01-05",
      readTime: "3 min read",
      category: "Events",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    },
    {
      id: 5,
      title: "Partnership Announcement: Global IoT Alliance",
      excerpt:
        "SpikingNet joins forces with leading technology companies to advance IoT standards and interoperability worldwide.",
      author: "Business Development",
      date: "2024-01-03",
      readTime: "4 min read",
      category: "Partnership",
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
    },
    {
      id: 6,
      title: "Research Paper: Edge Computing in IoT Networks",
      excerpt:
        "Our research team publishes groundbreaking findings on optimizing edge computing performance in distributed IoT systems.",
      author: "Research Team",
      date: "2024-01-01",
      readTime: "12 min read",
      category: "Research",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=250&fit=crop",
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "IoT World Conference 2024",
      date: "2024-02-15",
      location: "San Francisco, CA",
      type: "Conference",
    },
    {
      id: 2,
      title: "Smart Cities Summit",
      date: "2024-02-22",
      location: "Virtual Event",
      type: "Summit",
    },
    {
      id: 3,
      title: "Product Demo Webinar",
      date: "2024-02-28",
      location: "Online",
      type: "Webinar",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Latest News & Blog Posts */}
      <section>
        <h2 className="text-3xl font-bold gradient-text mb-8">
          Latest News & Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <Link key={item.id} to={`/blog/${item.id}`} className="block">
              <Card className="glass-effect bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105 group h-full cursor-pointer">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 left-4 bg-sky-100 text-sky-700">
                    {item.category}
                  </Badge>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold text-gray-800 group-hover:text-sky-600 transition-colors duration-300 line-clamp-2">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600 line-clamp-3">
                    {item.excerpt}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{item.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-medium transition-colors group">
                    Read More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section>
        <h2 className="text-3xl font-bold gradient-text mb-8">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <Card
              key={event.id}
              className="glass-effect bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className="bg-cyan-100 text-cyan-700">
                    {event.type}
                  </Badge>
                  <span className="text-sm text-gray-500">
                    {new Date(event.date).toLocaleDateString()}
                  </span>
                </div>
                <CardTitle className="text-lg font-semibold text-gray-800">
                  {event.title}
                </CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  📍 {event.location}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewsAndEvents;
