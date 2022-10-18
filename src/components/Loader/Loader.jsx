import { ThreeCircles  } from  'react-loader-spinner';
import { LoaderStyled } from './LoaderStyled';

const Loader = () => {
    return (    
        <LoaderStyled>
        <ThreeCircles  
            visible={true} 
            height="100" 
            width="100"
            color='gray'
        />
        </LoaderStyled>
    )
}

export default Loader;