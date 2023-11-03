import ImageTextContainer from "./TextInImage";
import styles from './PartyMain.css';
import groupDummy from '../../groupDummy.json';
import React, { useState } from 'react';
import DetailModal from "./DetailModal";
import NewGroupModal from "./NewGroupModal";

function PartyMain() {

    const groupList = groupDummy;
    const [ isDetailModalOpen, setDetailModalOpen ] = useState(false);
    const [ modalById, setModalById] = useState("");

    const [ isNewGroupModalOpen, setNewGroupModalOpen ] = useState(false);

    const handleDetailModalClose = () => { setDetailModalOpen(false); }
    const handleNewGroupModalClose = () => { setNewGroupModalOpen(false); }
    const handleDetailModalOpen = (groupId) => {
        setModalById(groupId);
        setDetailModalOpen(true);
    }

    const handleNewGroupModalOpen = () => {
        setNewGroupModalOpen(true);
    }

    return (
        <div className="pageBody">
            {   isDetailModalOpen &&
                <DetailModal
                    isOpen={isDetailModalOpen} 
                    close={handleDetailModalClose}
                    groupId={modalById}
                />
            }
            {
                isNewGroupModalOpen &&
                <NewGroupModal
                    isOpen={isNewGroupModalOpen}
                    close={handleNewGroupModalClose}
                />
            }
            <div className="myParty">
                <p>user info</p>
                <p>now participating</p>
                <p>Interested party</p>
                <button onClick={handleNewGroupModalOpen}>Make New Group</button>
            </div>
            <ul className="partyContainer">{
                groupList.map((group)=>(
                    <a onClick={()=> handleDetailModalOpen(group.group_id)}>
                    <ImageTextContainer key={group.group_id} value={group}/>
                    </a>
                ))
            }
            </ul>
        </div>
    )
}
export default PartyMain;