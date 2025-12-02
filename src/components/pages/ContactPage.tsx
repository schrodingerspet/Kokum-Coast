import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { ContactForm } from '@/components/forms/ContactForm';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'Shop No. 12, Colaba Causeway\nColaba, Mumbai 400005',
      action: 'Get Directions',
      href: 'https://maps.google.com/?q=Shop+No.+12,+Colaba+Causeway,+Colaba,+Mumbai+400005'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91-22-4000-1234',
      action: 'Call Now',
      href: 'tel:+912240001234'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@kokumandcoast.in',
      action: 'Send Email',
      href: 'mailto:hello@kokumandcoast.in'
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      content: 'Monday - Sunday\n11:00 AM - 11:00 PM',
      action: 'Reserve Table',
      href: '/reservations'
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      href: 'https://instagram.com/kokumandcoast',
      color: 'hover:text-pink-500'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      href: 'https://facebook.com/kokumandcoast',
      color: 'hover:text-blue-600'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      href: 'https://twitter.com/kokumandcoast',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <Image
          src="https://static.wixstatic.com/media/bb9e77_6046eb2f38ff49fdaa1b33d87734de6f~mv2.png?originWidth=960&originHeight=512"
          alt="Colaba Causeway street view with Gateway of India in background"
          className="w-full h-full object-cover"
          width={1920}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-heading font-bold mb-4">Contact & Location</h1>
            <p className="text-xl font-paragraph">Visit us in the heart of historic Colaba</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold mb-3">{info.title}</h3>
                    <p className="font-paragraph text-foreground/70 mb-4 whitespace-pre-line">
                      {info.content}
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full"
                    >
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.action}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Map and Additional Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Navigation className="w-5 h-5 text-primary" />
                    Find Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-video w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.8668!2d72.8311!3d18.9220!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c73a0d5cad%3A0x802ff4b0!2sColaba%20Causeway%2C%20Colaba%2C%20Mumbai%2C%20Maharashtra%20400005!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Kokum & Coast Location Map"
                      className="rounded-b-lg"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Additional Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >

              {/* About Location */}
              <Card>
                <CardHeader>
                  <CardTitle>About Our Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-paragraph text-foreground/80 leading-relaxed mb-4">
                    Located in the vibrant heart of Colaba Causeway, Kokum & Coast is perfectly positioned
                    near Mumbai's most iconic landmarks. Just a short walk from the Gateway of India and
                    the bustling Colaba market.
                  </p>
                  <div className="space-y-2 text-sm font-paragraph text-foreground/70">
                    <div>• 2 minutes walk to Gateway of India</div>
                    <div>• 5 minutes to Taj Mahal Palace Hotel</div>
                    <div>• Near Colaba Bus Station</div>
                    <div>• Churchgate Railway Station - 15 minutes</div>
                  </div>
                </CardContent>
              </Card>

              {/* Parking Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Parking & Transportation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 font-paragraph text-foreground/80">
                    <div>
                      <strong>Valet Parking:</strong> Available for dinner service (7 PM onwards)
                    </div>
                    <div>
                      <strong>Public Parking:</strong> Colaba Market parking lot (2 minutes walk)
                    </div>
                    <div>
                      <strong>Metro:</strong> Churchgate Station (Blue Line)
                    </div>
                    <div>
                      <strong>Bus:</strong> Multiple routes stop at Colaba Bus Station
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-paragraph text-foreground/70 mb-4">
                    Stay updated with our latest dishes, events, and special offers.
                  </p>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center w-12 h-12 bg-foreground/5 rounded-full transition-colors duration-300 ${social.color}`}
                        aria-label={`Follow us on ${social.name}`}
                      >
                        <social.icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16"
          >
            <ContactForm />
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <h2 className="text-3xl font-heading font-bold mb-8">Ready to Visit?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="px-8">
                <a href="/reservations">Reserve Your Table</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8">
                <a href="/store">Order Online</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}