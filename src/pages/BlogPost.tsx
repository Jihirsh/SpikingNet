import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPost = () => {
//   const { id } = useParams();
  useParams();

  // Mock blog post data - in a real app, you'd fetch this based on the ID
  const blogPost = {
    id: 1,
    title:
      "The Future of IoT: Transforming Smart Cities with Advanced Sensor Networks",
    content: `
      <p>The Internet of Things (IoT) is revolutionizing how we interact with our environment, and nowhere is this more evident than in the development of smart cities. As urban populations continue to grow, the need for efficient, sustainable, and responsive city infrastructure becomes increasingly critical.</p>
      
      <h2>Understanding Smart City Infrastructure</h2>
      <p>Smart cities leverage interconnected sensor networks to monitor and manage various urban systems in real-time. From traffic flow optimization to energy consumption monitoring, these networks provide city planners and administrators with unprecedented visibility into urban operations.</p>
      
      <h2>Key Benefits of IoT Integration</h2>
      <ul>
        <li><strong>Enhanced Efficiency:</strong> Real-time monitoring allows for immediate response to changing conditions</li>
        <li><strong>Cost Reduction:</strong> Predictive maintenance and optimized resource allocation reduce operational costs</li>
        <li><strong>Environmental Impact:</strong> Better monitoring leads to reduced waste and energy consumption</li>
        <li><strong>Citizen Experience:</strong> Improved services and reduced wait times enhance quality of life</li>
      </ul>
      
      <h2>Real-World Applications</h2>
      <p>Cities around the world are already implementing IoT solutions with remarkable results. Barcelona's smart water management system has reduced water waste by 25%, while Singapore's traffic monitoring network has decreased commute times by 15%.</p>
      
      <h2>Challenges and Solutions</h2>
      <p>While the potential is enormous, implementing IoT infrastructure comes with challenges including data security, privacy concerns, and integration complexity. However, advances in edge computing and AI are addressing these concerns while making deployment more accessible.</p>
      
      <h2>Looking Ahead</h2>
      <p>The future of smart cities is bright, with emerging technologies like 5G, artificial intelligence, and advanced analytics promising even greater capabilities. As these technologies mature, we can expect to see more comprehensive and intelligent urban ecosystems that truly serve their citizens' needs.</p>
    `,
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "IoT Innovation",
    image:
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=800&h=400&fit=crop",
    tags: ["IoT", "Smart Cities", "Technology", "Innovation"],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50">
      <Navbar />

      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>

          {/* Article Header */}
          <div className="mb-8">
            <Badge className="mb-4 bg-sky-100 text-sky-700">
              {blogPost.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6 leading-tight">
              {blogPost.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(blogPost.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{blogPost.readTime}</span>
              </div>
            </div>

            <div className="glass-effect rounded-2xl overflow-hidden mb-8">
              <img
                src={blogPost.image}
                alt={blogPost.title}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Article Content */}
          <div className="glass-effect bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div
              className="prose prose-lg max-w-none prose-headings:gradient-text prose-a:text-sky-600 prose-a:hover:text-sky-700"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </div>

          {/* Tags */}
          <div className="glass-effect bg-white/80 backdrop-blur-sm rounded-2xl p-6">
            <h3 className="text-lg font-semibold gradient-text mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map((tag, index) => (
                <Badge
                  key={index}
                  className="bg-sky-100 text-sky-700 hover:bg-sky-200 cursor-pointer"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;
