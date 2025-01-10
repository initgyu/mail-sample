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
            subMenuTab === 'management'
              ? '!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black'
              : ''
          }
                    dark:hover:border-b-black -mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary`}
          onClick={() => {
            navigate({
              pathname: `/settings/mailbox/management`,
            });
          }}
        >
          메일함관리
        </button>
        <button
          className={`${
            subMenuTab === 'clean'
              ? '!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black'
              : ''
          }
                    dark:hover:border-b-black -mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary`}
          onClick={() => {
            navigate({
              pathname: `/settings/mailbox/clean`,
            });
          }}
        >
          기간으로정리
        </button>
      </div>
    </>
  );
};

export default SubMenu;
