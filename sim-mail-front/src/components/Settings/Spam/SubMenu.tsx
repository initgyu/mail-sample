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
            subMenuTab === 'setting'
              ? '!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black'
              : ''
          }
                    dark:hover:border-b-black -mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary`}
          onClick={() => {
            navigate({
              pathname: `/settings/spam/setting`,
            });
          }}
        >
          스팸설정
        </button>
        <button
          className={`${
            subMenuTab === 'keyword'
              ? '!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black'
              : ''
          }
                    dark:hover:border-b-black -mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary`}
          onClick={() => {
            navigate({
              pathname: `/settings/spam/keyword`,
            });
          }}
        >
          키워드차단
        </button>
        <button
          className={`${
            subMenuTab === 'allow'
              ? '!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black'
              : ''
          }
                    dark:hover:border-b-black -mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary`}
          onClick={() => {
            navigate({
              pathname: `/settings/spam/allow`,
            });
          }}
        >
          수신허용
        </button>
        <button
          className={`${
            subMenuTab === 'reject'
              ? '!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black'
              : ''
          }
                    dark:hover:border-b-black -mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary`}
          onClick={() => {
            navigate({
              pathname: `/settings/spam/reject`,
            });
          }}
        >
          수신차단
        </button>
      </div>
    </>
  );
};

export default SubMenu;
