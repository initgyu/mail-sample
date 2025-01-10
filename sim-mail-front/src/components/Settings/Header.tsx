import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import IconMenu from '../Icon/IconMenu';

interface Props {
  headTab: string;
}

const Header: FC<Props> = ({ headTab }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="py-4 px-6 flex items-center">
        <h4 className="text-lg text-gray-600 dark:text-gray-400 font-medium">환경설정</h4>
      </div>

      <div className="py-4 px-6 flex items-center">
        <div className="relative inline-flex align-middle">
          <button
            type="button"
            className={`btn btn-outline-dark ltr:rounded-r-none rtl:rounded-l-none ${
              headTab === 'basic' ? 'text-white bg-dark' : ''
            }`}
            onClick={() => {
              navigate({
                pathname: `/settings`,
              });
            }}
          >
            기본설정
          </button>
          <button
            type="button"
            className={`btn btn-outline-dark rounded-none ${headTab === 'mailbox' ? 'text-white bg-dark' : ''}`}
            onClick={() => {
              navigate({
                pathname: `/settings/mailbox/management`,
              });
            }}
          >
            메일함관리
          </button>
          <button
            type="button"
            className={`btn btn-outline-dark rounded-none ${headTab === 'filter' ? 'text-white bg-dark' : ''}`}
            onClick={() => {
              navigate({
                pathname: `/settings/classification/filter`,
              });
            }}
          >
            메일자동분류
          </button>
          <button
            type="button"
            className={`btn btn-outline-dark rounded-none ${headTab === 'absence' ? 'text-white bg-dark' : ''}`}
            onClick={() => {
              navigate({
                pathname: `/settings/absence/setting`,
              });
            }}
          >
            부재중설정
          </button>
          <button
            type="button"
            className={`btn btn-outline-dark rounded-none ${headTab === 'spam' ? 'text-white bg-dark' : ''}`}
            onClick={() => {
              navigate({
                pathname: `/settings/spam/setting`,
              });
            }}
          >
            스팸설정
          </button>
          <button
            type="button"
            className={`btn btn-outline-dark ltr:rounded-l-none rtl:rounded-r-none ${
              headTab === 'smtp' ? 'text-white bg-dark' : ''
            }`}
            onClick={() => {
              navigate({
                pathname: `/settings/smtp/pop3`,
              });
            }}
          >
            POP3/IMAP
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
