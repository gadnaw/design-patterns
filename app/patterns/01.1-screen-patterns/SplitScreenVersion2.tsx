import React from "react"

interface SplitScreenProps {
    children: React.ReactNode
    leftWeight: number;
    rightWeight: number;
}

export const SplitScreenVersion2:React.FC<SplitScreenProps> =({children, leftWeight =80, rightWeight =1}) => {
    // If you want to work with the children prop as an array-like structure, you can convert it into an array using the React.Children.toArray function
    const [left, right] = React.Children.toArray(children) 
    return (
        <div className="flex">
            <div className={`w-${leftWeight}`}>
                {left}
            </div>
            <div className={`flex-${rightWeight}`}>  
                {right}
            </div>
        </div>
    )
}
