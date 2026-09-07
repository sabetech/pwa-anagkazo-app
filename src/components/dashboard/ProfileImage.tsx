
import { useQuery } from 'react-query';
import { getProfileImage } from '../../services/StudentData';
import { Image } from 'antd-mobile';
import { ServerResponse } from '../../interfaces/ServerResponse';

type ProfileImageProps = {
    index_number: number
}
const ProfileImage:React.FC<ProfileImageProps> = ({index_number}) => {

    

    //make a request to get image in base64 and convert to viewable image
    const { data: profileImage, isError } = useQuery<ServerResponse>(['profile_image'], () => getProfileImage(index_number));

    return (<>
        {

       (typeof profileImage?.data?.data?.image == 'undefined') ? <Image 
            src={'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'} 
            width={130}
            height={130}
            fit='cover'
            style={{
                borderRadius: '50%',
                border: '2px solid white',
                boxShadow: '1px 1px 8px 0px rgba(0,0,0,0.25)'
            }}
            
        /> :
            <Image 
                src={profileImage?.data.data.image.replace(/\\\//g, '/')} 
                width={130}
                height={130}
            fit='cover'
                style={{
                    borderRadius: '50%',
                    border: '2px solid white',
                    boxShadow: '1px 1px 8px 0px rgba(0,0,0,0.25)'
                }}
                
            />
        }
        </>)
}

export default ProfileImage