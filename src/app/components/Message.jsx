import { AiOutlineRobot } from 'react-icons/ai';
import { CiUser } from 'react-icons/ci';
import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';

const Message = ({ role, content }) => {
  const { user } = useUser();

  return (
    <div className='grid grid-cols-[30px_1fr] gap-5 p-5'>
      <div>
        {role === 'user' && (
          <Image
            src={user.picture} // domain needs to be added to next.config.js
            width={30}
            height={30}
            alt='User avatar'
            className='rounded-sm shadow-m shadow-black/50'
          />
        )}
      </div>
      <div>{content}</div>
    </div>
  );
};

export default Message;
