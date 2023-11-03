import goormImage from '../../assets/goorm.png';
import styles from './TextInImage.css';
import UtcTosimple from './UtcTosimple';

const ImageTextContainer = ({value}) => {
  const { group_id, group_name, group_host, end_date, group_limit, group_user_list} = value;
  
  // 관심있어요 여부 가져오기
  const numParty = group_user_list.length;
  return (
    <div className="ImageComp">
      <img
        className="Image"
        src={goormImage} // Replace with the actual image URL
        alt="goorm_Image"
      />
      <div className="TextComp">
        <p className="Title">
          {group_name}
        </p>
        <p className='HostInfo'> 방장 : {group_host}</p>
        <div className="GatheredAndDL">
          <p className='numParty'> {numParty+1}/{group_limit} 참여중! </p>
          <p><UtcTosimple end_date = {end_date}/> 까지 </p>
        </div>
        </div>
    </div>
  );
};

export default ImageTextContainer;
