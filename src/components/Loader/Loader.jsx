import { ThreeCircles  } from  'react-loader-spinner';
import { LoaderStyled } from './LoaderStyled';

const Loader = () => {
    return (    
        <LoaderStyled>
        <ThreeCircles  
            visible={true} 
            height="100" 
            width="100"
            color='#b3d0e9'
        />
        </LoaderStyled>
    )
}

export default Loader;