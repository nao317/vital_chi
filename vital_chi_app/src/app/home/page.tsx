/* デフォルトの画面 */

import './home.css';
import HitPoint from '@/components/ui/hitpoint';
import DateCount from '@/components/ui/datecount';
import Tree from '@/components/ui/tree';

export default function home () {
    return (
        <div className="home">
            
            <HitPoint />
            <DateCount />
            <Tree />
        </div>
    );
}