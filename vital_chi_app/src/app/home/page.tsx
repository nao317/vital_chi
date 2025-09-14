/* デフォルトの画面 */

import './home.css';
import HitPoint from '@/components/ui/hitpoint';

export default function home () {
    return (
        <div className="home">
            <div>
                <HitPoint />
            </div>
        </div>
    );
}