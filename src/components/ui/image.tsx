import { forwardRef, type ImgHTMLAttributes, useState } from 'react'
import './image.css'

const FALLBACK_IMAGE_URL = "/placeholder.png";

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fittingType?: 'fill' | 'fit' | 'cover'
  originWidth?: number
  originHeight?: number
  focalPointX?: number
  focalPointY?: number
}

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ src, fittingType = 'cover', onError, ...props }, ref) => {
    const [imgSrc, setImgSrc] = useState<string | undefined>(src)

    const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setImgSrc(FALLBACK_IMAGE_URL)
      onError?.(e)
    }

    if (!src) {
      return <div data-empty-image ref={ref as any} {...props} />
    }

    const style = {
      ...props.style,
      objectFit: fittingType === 'fit' ? 'contain' : (fittingType === 'fill' ? 'fill' : 'cover') as any,
    }

    return (
      <img
        ref={ref}
        src={imgSrc}
        onError={handleError}
        {...props}
        style={style}
      />
    )
  }
)
Image.displayName = 'Image'
