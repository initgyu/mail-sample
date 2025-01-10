import React from 'react';
import Dropdown from '../Dropdown';
import { Link } from 'react-router-dom';

interface SubMenuProps {
  handleToggleRead: () => void;
  handleDelete: () => void;
  anyCheck: boolean;
  multipleChecked: boolean;
  showUnread: () => void;
}

const SubMenu: React.FC<SubMenuProps> = ({ handleToggleRead, handleDelete, anyCheck, multipleChecked, showUnread }) => {
  const handleSpam = () => {
    console.log('스팸차단');
  };
  const handleReply = () => {
    console.log('답장');
  };
  const handleAllReply = () => {
    console.log('전체 답장');
  };
  const handleMailForward = () => {
    console.log('전달');
  };
  const moveSendMail = () => {
    console.log('받은메일함');

    <Link to="/mailbox/read" />;
  };
  return (
    <>
      <ul className="flex grow items-center sm:flex-none gap-4 ltr:sm:mr-4 rtl:sm:ml-4">
        <li>
          <div>
            <div>
              {/* 항목이 체크되어 있지 않으면 읽음,삭제 기능 비활성화, 글씨 회색 변경  */}
              <button
                className={`dark:text-gray-300 whitespace-nowrap font-semibold ${!anyCheck ? 'text-gray-400' : ''} ${
                  anyCheck ? 'hover:border-black' : ''
                }`}
                onClick={handleToggleRead}
                disabled={!anyCheck} //항목이 체크되어 있지 않으면 읽음 기능 비활성화, 글씨 회색 변경
              >
                읽음
              </button>
            </div>
          </div>
        </li>
        <li>
          <div>
            <div>
              <button
                className={`dark:text-gray-300 whitespace-nowrap font-semibold ${!anyCheck ? 'text-gray-400' : ''} ${
                  anyCheck ? 'hover:border-black' : ''
                }`}
                onClick={handleDelete}
                disabled={!anyCheck} //항목이 체크되어 있지 않으면 삭제 기능 비활성화, 글씨 회색 변경
              >
                삭제
              </button>
            </div>
          </div>
        </li>
        <li>
          <div>
            <div>
              <button
                className={`dark:text-gray-300 whitespace-nowrap font-semibold ${!anyCheck ? 'text-gray-400' : ''} ${
                  anyCheck ? 'hover:border-black' : ''
                }`}
                onClick={handleSpam}
                disabled={!anyCheck} //항목이 체크되어 있지 않으면 스팸차단 기능 비활성화, 글씨 회색 변경
              >
                스팸차단
              </button>
            </div>
          </div>
        </li>

        <li>
          <div>
            <div>
              <button
                className={`dark:text-gray-300 whitespace-nowrap font-semibold ${!anyCheck ? 'text-gray-400' : ''} ${
                  anyCheck ? 'hover:border-black' : ''
                }
                , ${!multipleChecked ? 'text-gray-400' : ''}
                `}
                onClick={handleReply}
                disabled={!anyCheck || !multipleChecked}
              >
                답장
              </button>
            </div>
          </div>
        </li>
        <li>
          <div>
            <div>
              <button
                className={`dark:text-gray-300 whitespace-nowrap font-semibold ${!anyCheck ? 'text-gray-400' : ''} ${
                  anyCheck ? 'hover:border-black' : ''
                }
                    , ${!multipleChecked ? 'text-gray-400' : ''}
                    `}
                onClick={handleAllReply}
                disabled={!anyCheck || !multipleChecked}
              >
                전체답장
              </button>
            </div>
          </div>
        </li>
        <li>
          <div>
            <div>
              <button
                className={`dark:text-gray-300 whitespace-nowrap font-semibold ${!anyCheck ? 'text-gray-400' : ''} ${
                  anyCheck ? 'hover:border-black' : ''
                }`}
                onClick={handleMailForward}
                disabled={!anyCheck}
              >
                전달
              </button>
            </div>
          </div>
        </li>

        <li>
          <div className="dropdown">
            <Dropdown offset={[0, 1]} btnClassName="hover:text-primary flex items-center" button={<>이동</>}>
              <ul className="whitespace-nowrap">
                <li>
                  <button type="button" onClick={moveSendMail}>
                    받은메일함
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => {}}>
                    보낸메일함
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => {}}>
                    휴지통
                  </button>
                </li>
              </ul>
            </Dropdown>
          </div>
        </li>
        <li>
          <div className="dropdown">
            <Dropdown offset={[0, 1]} btnClassName="hover:text-primary flex items-center" button={<>더보기</>}>
              <ul className="whitespace-nowrap">
                <li>
                  <button type="button" onClick={() => {}}>
                    PC에 저장하기
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => {}}>
                    중요 표시 해제
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => {}}>
                    이 사람이 보낸 메일 정리하기
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => {}}>
                    이 사람이 보낸 메일 보기
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => {}}>
                    이 사람을 주소록에 추가
                  </button>
                </li>
              </ul>
            </Dropdown>
          </div>
        </li>

        <li>
          <div className="dropdown">
            <Dropdown offset={[0, 1]} btnClassName="hover:text-primary flex items-center" button={<>필터</>}>
              <ul className="whitespace-nowrap">
                <li>
                  <button type="button" onClick={() => {}}>
                    모든 메일
                  </button>
                </li>
                <li>
                  <button type="button" onClick={showUnread}>
                    안읽은 메일
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => {}}>
                    중요 메일
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => {}}>
                    이 사람이 보낸 메일 보기
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => {}}>
                    첨부 메일
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => {}}>
                    나에게 온 메일
                  </button>
                </li>
              </ul>
            </Dropdown>
          </div>
        </li>
      </ul>
    </>
  );
};

export default SubMenu;
