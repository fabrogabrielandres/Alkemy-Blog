import { CardSkeleton } from "./CardSkeleton"
import { CheckBoxSkeleton } from "./CheckBoxSkeleton";
import { ImageSkeleton } from "./ImageSkeleton";
import { TableSkeleton } from './TableSkeleton';
import { TextSkeleton } from "./TextSkeleton";
import { TreeDostSkeleton } from "./TreeDostSkeleton";


//skeleton admite los siguiente props speed width height viewBox backgroundColor foregroundColor
//aparte del prop type que es el tipo de esqueleto 
 export const Skeleton = ({ type = "default", ...rest }) => {
    
    switch (type) {
        case "Card":
            return CardSkeleton({...rest})
        case "Table":
            return TableSkeleton({...rest})
        case "CheckBox":
            return CheckBoxSkeleton({...rest})
        case "Text":
            return TextSkeleton({...rest})
        case "Image":
            return ImageSkeleton({...rest})
        case "Dost":
            return TreeDostSkeleton({...rest})
        default:
            return TreeDostSkeleton({})

    }

}

