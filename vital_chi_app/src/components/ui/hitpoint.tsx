
export default function HitPoint(){
    return (
        <div className="h-35 w-45 flex bg-white/50 absolute " >
            <img 
            src="/heart.png"
            alt="heart"
            className="h-35 w-20"
            />
            <div className="h-35 w-20 text-5xl text-yellow-800 mt-12">
                100
            </div>
        </div>
    )
}