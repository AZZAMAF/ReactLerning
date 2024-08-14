import React from 'react';
import { JUMBOTRON_IMAGE } from "../../../constants/listAsset"
import EachUtils from '../../../utils/EachUtils';
import { useAtom } from 'jotai';
import { languageAtom } from '../../../jotai/atoms';
import { LIST_JUMBOTRRON_EN, LIST_JUMBOTRRON_ID } from '../../../constants/listJumbotron';
import InputMemebership from '../InputMembership';

const Jumbotron = () => {
    const [language] = useAtom(languageAtom)

    return (
        <div>
            <img
                src={JUMBOTRON_IMAGE} alt="Netflix-bg"
                className='absolute top-0 left-0 object-cover h-[700px] opacity-60' />
            <EachUtils
                of={language == 'en' ? LIST_JUMBOTRRON_EN : LIST_JUMBOTRRON_ID}
                render={(item, index) => (

                    <div key={index} className='relative  flex flex-col justify-center items-center mt-44 gap-4 text-center'>
                        <h1 className='font-black text-white text-5xl '>{item.title}</h1>
                        <p className='text-white  text-xl '>{item.desc}</p>
                        <InputMemebership />
                    </div>

                )}
            />

        </div>
    );
}

export default Jumbotron;
