interface SplitScreenProps {
    left: React.FC;
    right: React.FC;
    leftWeight: number;
    rightWeight: number;
}

export const SplitScreen:React.FC<SplitScreenProps> =({left: Left, right: Right, leftWeight =80, rightWeight =1}) => {
    return (
        <div className="flex">
            <div className={`w-${leftWeight}`}>
                <Left/>
            </div>
            <div className={`flex-${rightWeight}`}>  
                <Right/>
            </div>
        </div>
    )
}
