import { useEffect, useState } from 'react';
import styles from './DetailModal.css';
import groupDummy from '../../groupDummy.json';

const DetailModal = ({ isOpen, close }) => {
    const [modalOpen, setModalOpen] = useState(isOpen);
    const handleCloseModal = () => { setModalOpen(false); close(); }

    const [gName, setGName] = useState('');
    const [gDescript, setGDescript] = useState('');
    const [gLimit, setGLimit] = useState();
    const [isActivate, setActivate] = useState(true);
    useEffect(()=>{
        if(gName.length && gDescript.length && gLimit >= 3 && 50 >= gLimit){
            setActivate(false);
        } else {
            setActivate(true);
        }
    },[gName, gDescript, gLimit]);
    return (
        <div className='Modal'>
            <form>
                <input
                    placeholder='Group name'
                    value={gName}
                    onChange={(e) => {
                        setGName(e.target.value)
                    }}
                ></input>
                <input
                    placeholder='Group Description'
                    value={gDescript}
                    onChange={(e) => {
                        setGDescript(e.target.value)
                    }}
                ></input>
                <input
                    placeholder='Group Member 3~50'
                    value={gLimit}
                    type='number'
                    min={3}
                    max={50}
                    onChange={(e) => {
                        setGLimit(e.target.value)
                    }}
                ></input>
            </form>
            <button onClick={handleCloseModal} disabled={isActivate}>save</button>
            <button onClick={handleCloseModal}>cancel</button>
        </div>
    )
}
export default DetailModal;