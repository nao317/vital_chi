/* デフォルトの画面 */

import './home.css';
import HitPoint from '@/components/ui/hitpoint';
import DateCount from '@/components/ui/datecount';

export default function home () {
    return (
        <div className="home">
            <div>
                <HitPoint />
                <DateCount />

            </div>
        </div>
    );
}