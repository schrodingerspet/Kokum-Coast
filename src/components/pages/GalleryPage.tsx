import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Share2, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BaseCrudService } from '@/integrations';
import { PhotoGallery } from '@/entities';
import { Image } from '@/components/ui/image';

export default function GalleryPage() {
  const [photos, setPhotos] = useState<PhotoGallery[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoGallery | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const { items } = await BaseCrudService.getAll<PhotoGallery>('photogallery');
      setPhotos(items);
    } catch (error) {
      console.error('Error fetching photos:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['all', ...Array.from(new Set(photos.map(photo => photo.category).filter(Boolean)))];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const openModal = (photo: PhotoGallery) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'unset';
  };

  const navigatePhoto = (direction: 'prev' | 'next') => {
    if (!selectedPhoto) return;
    
    const currentIndex = filteredPhotos.findIndex(photo => photo._id === selectedPhoto._id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredPhotos.length - 1;
    } else {
      newIndex = currentIndex < filteredPhotos.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedPhoto(filteredPhotos[newIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPhoto) return;
      
      switch (e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowLeft':
          navigatePhoto('prev');
          break;
        case 'ArrowRight':
          navigatePhoto('next');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, filteredPhotos]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-[120rem] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="aspect-square bg-gray-200 animate-pulse rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <Image
          src="https://static.wixstatic.com/media/bb9e77_3bd3e8b6f22540fa8034534ddf0f8734~mv2.png?originWidth=1920&originHeight=384"
          alt="Collage of beautiful moments at Kokum & Coast restaurant"
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
            <h1 className="text-5xl font-heading font-bold mb-4">Gallery</h1>
            <p className="text-xl font-paragraph">Moments captured at Kokum & Coast</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16">
        <div className="max-w-[120rem] mx-auto px-4">
          
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-2 justify-center mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category === 'all' ? 'All Photos' : category}
              </Button>
            ))}
          </motion.div>

          {/* Photo Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
          >
            <AnimatePresence>
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  key={photo._id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => openModal(photo)}
                >
                  <Image
                    src={photo.image || 'https://static.wixstatic.com/media/bb9e77_ab876fa7b67042398cb36951a63a1fff~mv2.png?originWidth=384&originHeight=384'}
                    alt={photo.altText || photo.caption || 'Gallery image'}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    width={400}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  {photo.category && (
                    <Badge className="absolute top-2 left-2 bg-black/50 text-white border-none">
                      {photo.category}
                    </Badge>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredPhotos.length === 0 && !loading && (
            <div className="text-center py-16">
              <p className="text-lg font-paragraph text-foreground/60">
                No photos found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Photo Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
            onClick={closeModal}
          >
            <div className="absolute inset-0 flex items-center justify-center p-4">
              
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/10"
                onClick={closeModal}
              >
                <X className="w-6 h-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10"
                onClick={(e) => {
                  e.stopPropagation();
                  navigatePhoto('prev');
                }}
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10"
                onClick={(e) => {
                  e.stopPropagation();
                  navigatePhoto('next');
                }}
              >
                <ChevronRight className="w-8 h-8" />
              </Button>

              {/* Photo Container */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-[80vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedPhoto.image || 'https://static.wixstatic.com/media/bb9e77_e46d0eb4835e46abbd9c59523f6c9083~mv2.png?originWidth=768&originHeight=576'}
                  alt={selectedPhoto.altText || selectedPhoto.caption || 'Gallery image'}
                  className="w-full h-full object-contain rounded-lg"
                  width={800}
                />

                {/* Photo Info */}
                {(selectedPhoto.caption || selectedPhoto.dateTaken) && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm text-white p-4 rounded-b-lg">
                    {selectedPhoto.caption && (
                      <h3 className="font-heading font-semibold mb-1">{selectedPhoto.caption}</h3>
                    )}
                    {selectedPhoto.dateTaken && (
                      <p className="font-paragraph text-sm text-white/80">
                        {new Date(selectedPhoto.dateTaken).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-black/50 text-white hover:bg-black/70"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Share functionality would go here
                    }}
                  >
                    <Share2 className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-black/50 text-white hover:bg-black/70"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Download functionality would go here
                    }}
                  >
                    <Download className="w-5 h-5" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}