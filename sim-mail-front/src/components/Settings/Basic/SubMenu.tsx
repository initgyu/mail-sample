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
            subMenuTab === 'read'
              ? '!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black'
              : ''
          }
                    dark:hover:border-b-black -mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary`}
          onClick={() => {
            navigate({
              pathname: `/settings`,
            });
          }}
        >
          읽기
        </button>
        <button
          className={`${
            subMenuTab === 'write'
              ? '!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black'
              : ''
          }
                    dark:hover:border-b-black -mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary`}
          onClick={() => {
            navigate({
              pathname: `/settings/basic/write`,
            });
          }}
        >
          쓰기
        </button>
        <button
          className={`${
            subMenuTab === 'list'
              ? '!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black'
              : ''
          }
                    dark:hover:border-b-black -mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary`}
          onClick={() => {
            navigate({
              pathname: `/settings/basic/list`,
            });
          }}
        >
          목록
        </button>
        <button
          className={`${
            subMenuTab === 'sign'
              ? '!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black'
              : ''
          }
                    dark:hover:border-b-black -mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary`}
          onClick={() => {
            navigate({
              pathname: `/settings/basic/sign`,
            });
          }}
        >
          서명
        </button>
      </div>
    </>
  );
};

export default SubMenu;
