import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare, User, Calendar, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { BaseCrudService } from '@/integrations';
import { CustomerReviews } from '@/entities';
import { Image } from '@/components/ui/image';

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<CustomerReviews[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    reviewerName: '',
    reviewTitle: '',
    reviewText: '',
    rating: ''
  });

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const { items } = await BaseCrudService.getAll<CustomerReviews>('customerreviews');
      // Filter only approved reviews and sort by date
      const approvedReviews = items
        .filter(review => review.isApproved)
        .sort((a, b) => new Date(b.submissionDate || 0).getTime() - new Date(a.submissionDate || 0).getTime());
      setReviews(approvedReviews);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const review: CustomerReviews = {
        _id: crypto.randomUUID(),
        reviewerName: formData.reviewerName,
        reviewTitle: formData.reviewTitle,
        reviewText: formData.reviewText,
        rating: parseInt(formData.rating),
        submissionDate: new Date().toISOString(),
        isApproved: false // Reviews need approval
      };

      await BaseCrudService.create('customerreviews', review);
      setIsSubmitted(true);
      setShowForm(false);
      
      // Reset form
      setFormData({
        reviewerName: '',
        reviewTitle: '',
        reviewText: '',
        rating: ''
      });
    } catch (error) {
      console.error('Error submitting review:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const averageRating = reviews.length > 0 
    ? reviews.reduce((sum, review) => sum + (review.rating || 0), 0) / reviews.length 
    : 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <Image
          src="https://static.wixstatic.com/media/bb9e77_146768e6bfe042cbaa4910557a03205d~mv2.png?originWidth=1920&originHeight=448"
          alt="Happy customers enjoying their meal at Kokum & Coast"
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
            <h1 className="text-5xl font-heading font-bold mb-4">Customer Reviews</h1>
            <p className="text-xl font-paragraph">What our guests say about their experience</p>
          </motion.div>
        </div>
      </section>

      {/* Success Message */}
      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border border-green-200 p-4 mx-4 mt-8 rounded-lg"
        >
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <div>
              <h3 className="font-heading font-semibold text-green-800">Review Submitted!</h3>
              <p className="font-paragraph text-green-700">
                Thank you for your feedback. Your review will be published after moderation.
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Reviews Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* Reviews Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              {renderStars(Math.round(averageRating))}
              <span className="text-2xl font-heading font-bold ml-2">
                {averageRating.toFixed(1)}
              </span>
            </div>
            <p className="font-paragraph text-foreground/70">
              Based on {reviews.length} {reviews.length === 1 ? 'review' : 'reviews'}
            </p>
            
            <Button
              onClick={() => setShowForm(!showForm)}
              className="mt-6"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Write a Review
            </Button>
          </motion.div>

          {/* Review Form */}
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-12"
            >
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">Share Your Experience</CardTitle>
                  <p className="font-paragraph text-foreground/70">
                    Tell us about your visit to Kokum & Coast
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="reviewerName">Your Name *</Label>
                        <Input
                          id="reviewerName"
                          type="text"
                          value={formData.reviewerName}
                          onChange={(e) => handleInputChange('reviewerName', e.target.value)}
                          required
                          className="mt-1"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="rating">Rating *</Label>
                        <Select 
                          value={formData.rating} 
                          onValueChange={(value) => handleInputChange('rating', value)}
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select rating" />
                          </SelectTrigger>
                          <SelectContent>
                            {[5, 4, 3, 2, 1].map((rating) => (
                              <SelectItem key={rating} value={rating.toString()}>
                                <div className="flex items-center gap-2">
                                  {renderStars(rating)}
                                  <span>({rating} star{rating !== 1 ? 's' : ''})</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="reviewTitle">Review Title *</Label>
                      <Input
                        id="reviewTitle"
                        type="text"
                        value={formData.reviewTitle}
                        onChange={(e) => handleInputChange('reviewTitle', e.target.value)}
                        required
                        className="mt-1"
                        placeholder="Summarize your experience"
                      />
                    </div>

                    <div>
                      <Label htmlFor="reviewText">Your Review *</Label>
                      <Textarea
                        id="reviewText"
                        value={formData.reviewText}
                        onChange={(e) => handleInputChange('reviewText', e.target.value)}
                        required
                        className="mt-1"
                        placeholder="Tell us about your dining experience..."
                        rows={4}
                      />
                    </div>

                    <div className="flex gap-4">
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="flex-1"
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Review'}
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setShowForm(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Reviews List */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-6">
                    <div className="h-4 bg-gray-200 rounded mb-4" />
                    <div className="h-3 bg-gray-200 rounded mb-2" />
                    <div className="h-3 bg-gray-200 rounded mb-4" />
                    <div className="h-3 bg-gray-200 rounded w-1/2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((review, index) => (
                <motion.div
                  key={review._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-heading font-semibold">{review.reviewerName}</h3>
                            <div className="flex items-center gap-1">
                              {renderStars(review.rating || 0)}
                            </div>
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          {review.submissionDate 
                            ? new Date(review.submissionDate).toLocaleDateString()
                            : 'Recent'
                          }
                        </Badge>
                      </div>

                      {review.reviewTitle && (
                        <h4 className="font-heading font-semibold text-lg mb-3">
                          {review.reviewTitle}
                        </h4>
                      )}

                      <p className="font-paragraph text-foreground/80 leading-relaxed">
                        {review.reviewText}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          {reviews.length === 0 && !loading && (
            <div className="text-center py-16">
              <MessageSquare className="w-16 h-16 text-foreground/30 mx-auto mb-4" />
              <h3 className="text-xl font-heading font-semibold mb-2">No Reviews Yet</h3>
              <p className="font-paragraph text-foreground/60 mb-6">
                Be the first to share your experience at Kokum & Coast!
              </p>
              <Button onClick={() => setShowForm(true)}>
                Write the First Review
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}