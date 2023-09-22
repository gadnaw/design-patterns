interface SplitScreenProps {
    left: React.FC;
    right: React.FC;
}

export const SplitScreen:React.FC<SplitScreenProps> =({left: Left, right: Right}) => {
    return (
        <div className="flex">
            <div className="flex-1">
                <Left/>
            </div>
            <div className="flex-1">
                <Right/>
            </div>
        </div>
    )
}
