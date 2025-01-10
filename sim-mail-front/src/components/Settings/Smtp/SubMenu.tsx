import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  subMenuTab: string;
}

const SubMenu: FC<Props> = ({ subMenuTab }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="mt-3 flex flex-wrap border-b border-white-light pl-4 pr-4 dark:border-[#191e3a]">
        <button
          className={`${
            subMenuTab === 'pop3'
              ? '!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black'
              : ''
          }
                    dark:hover:border-b-black -mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary`}
          onClick={() => {
            navigate({
              pathname: `/settings/smtp/pop3`,
            });
          }}
        >
          POP3설정
        </button>
        <button
          className={`${
            subMenuTab === 'imap'
              ? '!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black'
              : ''
          }
                    dark:hover:border-b-black -mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary`}
          onClick={() => {
            navigate({
              pathname: `/settings/smtp/imap`,
            });
          }}
        >
          IMAP설정
        </button>
      </div>
    </>
  );
};

export default SubMenu;
