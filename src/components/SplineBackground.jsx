import { Suspense, lazy } from 'react';
import './SplineBackground.css';

const Spline = lazy(() => import('@splinetool/react-spline'));

/**
 * Fixed full-screen Spline background — renders behind all sections.
 * No scroll event manipulation. Just a clean ambient 3D scene.
 */
export default function SplineBackground() {
  return (
    <div className="spline-bg" aria-hidden="true">
      <div className="spline-bg__canvas">
        <Suspense fallback={null}>
          <Spline
            scene="https://prod.spline.design/YMhOfMuWXo67vgPK/scene.splinecode"
          />
        </Suspense>
      </div>
    </div>
  );
}
