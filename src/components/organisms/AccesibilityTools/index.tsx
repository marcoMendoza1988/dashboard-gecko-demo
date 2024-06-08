import { useState } from "react";
import { FaSearchPlus } from "react-icons/fa";
import { FaSearchMinus } from "react-icons/fa";
import { GiMetalScales } from "react-icons/gi";
import { ImContrast } from "react-icons/im";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineLink } from "react-icons/ai";
import { AiOutlineReload } from "react-icons/ai";
import { 
    adjustContrast, 
    adjustFontSize, 
    grayScale, 
    negativeContrast, 
    reset, 
    underlineLinks 
  } from "../../../utils/lib";

type AccesibilityToolsProps = {
    isOpen: boolean
}

const AccesibilityTools: React.FC<AccesibilityToolsProps> = ({isOpen}) => {
    const [ turnOnScale, setTurnOnScale ] = useState(false);
    const [ turnOnContrast, setTurnOnContrast ] = useState(false);
    const [ turnOnNegativeContrast, setTurnOnNegativeContrast ] = useState(false);
    const [isUnderlineEnabled, setIsUnderlineEnabled] = useState(false);
    const [countSize, setCountSize] = useState(0);
    const elementsFontSizeAdjust = ["li","span","p", "a", "button"];

    return (
        <>
            <hr className="my-8"/>
            <span className="text-[16px] text-center">{isOpen && ('Herramientas de accesibilidad')}</span>
            <ul className="text-sm flex flex-col gap-4 mt-4 absolute">
                <li className={`flex gap-2 items-center cursor-pointer pl-${isOpen ? '2' : '0'}`} onClick={() => {
                    if(countSize < 3){
                    setCountSize( countSize + 1);
                    adjustFontSize(elementsFontSizeAdjust, true)
                    }
                }}><FaSearchPlus style={{ fontSize: '16pt' }} /> {isOpen && ('Aumentar texto')}</li>
                <li className={`flex gap-2 items-center cursor-pointer pl-${isOpen ? '2' : '0'}`} onClick={() => {
                    if(countSize !== 0){
                    setCountSize( countSize - 1);
                    adjustFontSize(elementsFontSizeAdjust, false)
                    }
                }}><FaSearchMinus style={{ fontSize: '16pt' }} /> {isOpen && ('Disminuir texto')}</li>
                <li className={`flex gap-2 items-center cursor-pointer ${isOpen ? 'pl-2' : 'pl-0'}`} onClick={() => {
                    grayScale('root', !turnOnScale);
                    setTurnOnScale(!turnOnScale)
                }}><GiMetalScales style={{ fontSize: '16pt' }} /> {isOpen && ('Escala de grises')}</li>
                <li className={`flex gap-2 items-center cursor-pointer ${isOpen ? 'pl-2' : 'pl-0'}`} onClick={() => {
                    if(!turnOnContrast){
                    adjustContrast('root', 1.6)
                    }else{
                    adjustContrast('root', 1)
                    }
                    setTurnOnContrast(!turnOnContrast)
                }}><ImContrast style={{ fontSize: '16pt' }} /> {isOpen && ('Alto contraste')}</li>
                <li className={`flex gap-2 items-center cursor-pointer ${isOpen ? 'pl-2' : 'pl-0'}`} onClick={() => {
                    negativeContrast('root', !turnOnNegativeContrast);
                    
                    setTurnOnNegativeContrast(!turnOnNegativeContrast)
                }}><AiOutlineEye style={{ fontSize: '16pt' }} /> {isOpen && ('Contraste negativo')}</li>
                {/* <li className="flex gap-2 items-center cursor-pointer"><FaRegLightbulb style={{ fontSize: '18pt' }} /> {t('Fondo claro')}</li> */}
                <li className={`flex gap-2 items-center cursor-pointer ${isOpen ? 'pl-2' : 'pl-0'}`} onClick={() => {
                    underlineLinks('a', !isUnderlineEnabled);
                    setIsUnderlineEnabled(!isUnderlineEnabled);
                }}><AiOutlineLink style={{ fontSize: '16pt' }} /> {isOpen && ('Subrayar enlaces')}</li>
                <li className={`flex gap-2 items-center cursor-pointer ${isOpen ? 'pl-2' : 'pl-0'}`} onClick={()=>{
                    reset(elementsFontSizeAdjust);
                    setTurnOnNegativeContrast(false)
                    negativeContrast('root', false);
                    adjustContrast('root', 1)
                    setTurnOnContrast(false);
                    grayScale('root', false);
                    setTurnOnScale(false)
                }}><AiOutlineReload style={{ fontSize: '16pt' }} /> {isOpen && ('Restablecer')}</li>
            </ul>
        </>
    );
}

export default AccesibilityTools;
