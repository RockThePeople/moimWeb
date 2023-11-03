import { useEffect, useState } from 'react';
import styles from './DetailModal.css';
import groupDummy from '../../groupDummy.json';

const DetailModal = ({isOpen, close, groupId}) => {
    const [ modalOpen, setModalOpen ] = useState(isOpen);
    const handleCloseModal = () => {
        setModalOpen(false);
        close();
    }

    const [ selectedGroup, setSelectedGroup] = useState({});
    useEffect(()=>{
        const group = groupDummy.find(group=>group.group_id === groupId);
        setSelectedGroup(group);
    },[groupId]);

    return (
        <div className='Modal'>
            <div className='groupDetail'>
                <h3> {selectedGroup.group_name} </h3>
                <p> {selectedGroup.group_description}</p>
            </div>
            <button onClick={handleCloseModal}>Join</button>
            <button onClick={handleCloseModal}>close</button>
        </div>
    )
}
export default DetailModal;
// json 구조 바꾸가