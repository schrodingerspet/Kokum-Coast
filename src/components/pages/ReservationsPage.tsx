import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, MessageSquare, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BaseCrudService } from '@/integrations';
import { Reservations } from '@/entities';
import { Image } from '@/components/ui/image';

export default function ReservationsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    reservationDate: '',
    reservationTime: '',
    numberOfGuests: '',
    specialRequests: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const reservation: Reservations = {
        _id: crypto.randomUUID(),
        customerName: formData.customerName,
        customerEmail: formData.customerEmail,
        customerPhone: formData.customerPhone,
        reservationDate: formData.reservationDate,
        reservationTime: formData.reservationTime,
        numberOfGuests: parseInt(formData.numberOfGuests),
        specialRequests: formData.specialRequests,
      };

      await BaseCrudService.create('reservations', reservation);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting reservation:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const timeSlots = [
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
    '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM'
  ];

  const guestOptions = Array.from({ length: 12 }, (_, i) => i + 1);

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl font-heading font-bold text-foreground mb-4">
              Reservation Confirmed!
            </h1>
            <p className="text-lg font-paragraph text-foreground/70 mb-8">
              Thank you for choosing Kokum & Coast. We've received your reservation request and will contact you shortly to confirm the details.
            </p>
            <Button 
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  customerName: '',
                  customerEmail: '',
                  customerPhone: '',
                  reservationDate: '',
                  reservationTime: '',
                  numberOfGuests: '',
                  specialRequests: ''
                });
              }}
              variant="outline"
              className="mr-4"
            >
              Make Another Reservation
            </Button>
            <Button asChild>
              <a href="/">Return Home</a>
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <Image
          src="https://static.wixstatic.com/media/bb9e77_0b137c35c51646d297eaab0e49800ede~mv2.png?originWidth=960&originHeight=512"
          alt="Elegant dining area with ocean view at Kokum & Coast"
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
            <h1 className="text-5xl font-heading font-bold mb-4">Reserve Your Table</h1>
            <p className="text-xl font-paragraph">Experience coastal Maharashtra cuisine in the heart of Mumbai</p>
          </motion.div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">Book Your Table</CardTitle>
                  <p className="font-paragraph text-foreground/70">
                    Fill out the form below and we'll confirm your reservation within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="customerName">Full Name *</Label>
                        <Input
                          id="customerName"
                          type="text"
                          value={formData.customerName}
                          onChange={(e) => handleInputChange('customerName', e.target.value)}
                          required
                          className="mt-1"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="customerPhone">Phone Number *</Label>
                        <Input
                          id="customerPhone"
                          type="tel"
                          value={formData.customerPhone}
                          onChange={(e) => handleInputChange('customerPhone', e.target.value)}
                          required
                          className="mt-1"
                          placeholder="+91-XXXXX-XXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="customerEmail">Email Address *</Label>
                      <Input
                        id="customerEmail"
                        type="email"
                        value={formData.customerEmail}
                        onChange={(e) => handleInputChange('customerEmail', e.target.value)}
                        required
                        className="mt-1"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    {/* Reservation Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="reservationDate">Date *</Label>
                        <Input
                          id="reservationDate"
                          type="date"
                          value={formData.reservationDate}
                          onChange={(e) => handleInputChange('reservationDate', e.target.value)}
                          required
                          className="mt-1"
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div>
                        <Label htmlFor="reservationTime">Time *</Label>
                        <Select 
                          value={formData.reservationTime} 
                          onValueChange={(value) => handleInputChange('reservationTime', value)}
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="numberOfGuests">Guests *</Label>
                        <Select 
                          value={formData.numberOfGuests} 
                          onValueChange={(value) => handleInputChange('numberOfGuests', value)}
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Number" />
                          </SelectTrigger>
                          <SelectContent>
                            {guestOptions.map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num} {num === 1 ? 'Guest' : 'Guests'}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="specialRequests">Special Requests</Label>
                      <Textarea
                        id="specialRequests"
                        value={formData.specialRequests}
                        onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                        className="mt-1"
                        placeholder="Any dietary restrictions, special occasions, or seating preferences..."
                        rows={3}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Reserve Table'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                    <h3 className="text-lg font-heading font-semibold">Opening Hours</h3>
                  </div>
                  <div className="space-y-2 font-paragraph">
                    <div className="flex justify-between">
                      <span>Monday - Sunday</span>
                      <span>11:00 AM - 11:00 PM</span>
                    </div>
                    <p className="text-sm text-foreground/60">Kitchen closes at 10:30 PM</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-primary" />
                    <h3 className="text-lg font-heading font-semibold">Group Reservations</h3>
                  </div>
                  <p className="font-paragraph text-foreground/70">
                    For parties of 8 or more, please call us directly at 
                    <a href="tel:+912240001234" className="text-primary hover:underline ml-1">
                      +91-22-4000-1234
                    </a> to ensure we can accommodate your group properly.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-6 h-6 text-primary" />
                    <h3 className="text-lg font-heading font-semibold">Cancellation Policy</h3>
                  </div>
                  <p className="font-paragraph text-foreground/70">
                    Please notify us at least 2 hours in advance if you need to cancel or modify your reservation. 
                    This helps us serve other guests better.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare className="w-6 h-6 text-primary" />
                    <h3 className="text-lg font-heading font-semibold">Special Occasions</h3>
                  </div>
                  <p className="font-paragraph text-foreground/70">
                    Celebrating something special? Let us know in the special requests section and we'll do our best 
                    to make your dining experience memorable.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}