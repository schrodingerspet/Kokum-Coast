/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: customerreviews
 * Interface for CustomerReviews
 */
export interface CustomerReviews {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  reviewerName?: string;
  /** @wixFieldType text */
  reviewTitle?: string;
  /** @wixFieldType text */
  reviewText?: string;
  /** @wixFieldType number */
  rating?: number;
  /** @wixFieldType datetime */
  submissionDate?: Date | string;
  /** @wixFieldType boolean */
  isApproved?: boolean;
}


/**
 * Collection ID: menuitems
 * Interface for MenuItems
 */
export interface MenuItems {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  itemName?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType number */
  price?: number;
  /** @wixFieldType text */
  category?: string;
  /** @wixFieldType text */
  dietaryTags?: string;
  /** @wixFieldType image */
  itemImage?: string;
}


/**
 * Collection ID: photogallery
 * Interface for PhotoGallery
 */
export interface PhotoGallery {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType image */
  image?: string;
  /** @wixFieldType text */
  caption?: string;
  /** @wixFieldType text */
  altText?: string;
  /** @wixFieldType date */
  dateTaken?: Date | string;
  /** @wixFieldType text */
  category?: string;
}


/**
 * Collection ID: reservations
 * Interface for Reservations
 */
export interface Reservations {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  customerName?: string;
  /** @wixFieldType text */
  customerEmail?: string;
  /** @wixFieldType text */
  customerPhone?: string;
  /** @wixFieldType date */
  reservationDate?: Date | string;
  /** @wixFieldType time */
  reservationTime?: any;
  /** @wixFieldType number */
  numberOfGuests?: number;
  /** @wixFieldType text */
  specialRequests?: string;
}
