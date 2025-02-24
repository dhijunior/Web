import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add contact form submission logic here
    console.log('Contact form submission:', { name, email, subject, message });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our courses or need assistance? We're here to help! Reach out to us through any of the following channels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Information Cards */}
          <Card className="bg-white">
            <CardContent className="flex items-start space-x-4 p-6">
              <Mail className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-sm text-gray-600">info@dhijunior.com</p>
                <p className="text-sm text-gray-600">support@dhijunior.com</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="flex items-start space-x-4 p-6">
              <Phone className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                <p className="text-sm text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="flex items-start space-x-4 p-6">
              <MapPin className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-sm text-gray-600">123 Learning Street</p>
                <p className="text-sm text-gray-600">Education City, ED 12345</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form Section */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Send us a Message</CardTitle>
            <CardDescription className="text-center">
              Fill out the form below and we'll get back to you as soon as possible
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="What is this regarding?"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Type your message here"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[150px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 