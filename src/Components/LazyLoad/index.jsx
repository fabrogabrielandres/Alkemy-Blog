import React, { lazy, Suspense } from 'react';
import { Skeleton } from '../Skeleton';

const ImageComponent = lazy(() => import('../common/Image'));

const ImageLazy = ({ src, alt }) => {

  return (
    <div>
      <Suspense fallback={<Skeleton type='Image' />}>
        <section>
          <ImageComponent src={src} alt={alt} />
        </section>
      </Suspense>
    </div>
  );
}

export default ImageLazy;