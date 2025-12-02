import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/lib/wix/products';

export function useWixProducts() {
    return useQuery({
        queryKey: ['products'],
        queryFn: getProducts,
    });
}
