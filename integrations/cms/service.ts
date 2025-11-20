import { WixDataItem } from ".";

/**
 * Generic CRUD Service class for Wix Data collections
 * Provides type-safe CRUD operations with error handling
 */
export class BaseCrudService {
  /**
   * Creates a new item in the collection
   * @param itemData - Data for the new item
   * @returns Promise<T> - The created item
   */
  static async create<T extends WixDataItem>(collectionId: string, itemData: T): Promise<T> {
    console.log(`Creating ${collectionId}`, itemData);
    return itemData;
  }

  /**
   * Retrieves all items from the collection
   * @param collectionId - The collection to query
   * @param includeReferencedItems - Array of reference field names to populate
   * @returns Promise<items.WixDataResult<T>> - Query result with all items
   */
  static async getAll<T extends WixDataItem>(
    collectionId: string,
    includeReferencedItems?: string[]
  ): Promise<{ items: T[] }> {
    console.log(`Getting all ${collectionId}`, includeReferencedItems);
    return { items: [] };
  }

  /**
   * Retrieves a single item by ID
   * @param collectionId - The collection to query
   * @param itemId - ID of the item to retrieve
   * @param includeReferencedItems - Array of reference field names to populate
   * @returns Promise<T | null> - The item or null if not found
   */
  static async getById<T extends WixDataItem>(
    collectionId: string,
    itemId: string,
    includeReferencedItems?: string[]
  ): Promise<T | null> {
    console.log(`Getting ${collectionId} by id ${itemId}`, includeReferencedItems);
    return null;
  }

  /**
   * Updates an existing item
   * @param itemData - Updated item data (must include _id)
   *_id * @returns Promise<T> - The updated item
   */
  static async update<T extends WixDataItem>(collectionId: string, itemData: T): Promise<T> {
    console.log(`Updating ${collectionId}`, itemData);
    return itemData;
  }

  /**
   * Deletes an item by ID
   * @param itemId - ID of the item to delete
   * @returns Promise<T> - The deleted item
   */
  static async delete<T extends WixDataItem>(collectionId: string, itemId: string): Promise<T | null> {
    console.log(`Deleting ${collectionId} with id ${itemId}`);
    return null;
  }
}
