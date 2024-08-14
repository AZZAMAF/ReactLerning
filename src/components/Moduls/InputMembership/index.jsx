import React from 'react';
import EachUtils from '../../../utils/EachUtils';
import { useAtom } from 'jotai';
import { languageAtom } from '../../../jotai/atoms';
import { LIST_CTA_EN, LIST_CTA_ID } from '../../../constants/listAsset'

const InputMemebership = () => {
    const [language] = useAtom(languageAtom)
    return (
        <form>
            <EachUtils
                of={language == "en" ? LIST_CTA_EN : LIST_CTA_ID}
                render={(item, index) => (
                    <div key={index}>
                        <h3>{item.title}</h3>
                        <div>
                            <input type="text" placeholder={item.labelInput} />
                            <button>{item.buttonSubmit}</button>
                        </div>
                    </div>
                )}
            />
        </form>
    );
}

export default InputMemebership;
