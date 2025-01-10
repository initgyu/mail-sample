import { useEffect, useState } from 'react';
import 'tippy.js/dist/tippy.css';
import 'react-quill/dist/quill.snow.css';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/Settings/Header';
import SubMenu from '../../../components/Settings/Smtp/SubMenu';

const Imap = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('List'));
  });

  const [isShowMailMenu, setIsShowMailMenu] = useState(false);
  const [selectedTab, setSelectedTab] = useState('smtp');
  const [selectedSubTab, setSelectedSubTab] = useState('imap');
  const [searchText, setSearchText] = useState<any>('');

  const navigate = useNavigate();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab, selectedSubTab, searchText]);

  const tabChanged = (tabType: any) => {
    setIsShowMailMenu(false);
  };

  return (
    <div>
      <div className="flex gap-5 relative sm:h-[calc(100vh_-_110px)] h-full">
        <div className="panel p-0 flex-1 overflow-x-hidden h-full">
          <div className="relative">
            <Header headTab={'smtp'} />

            <SubMenu subMenuTab={'imap'} />

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">IMAP/SMTP 사용</div>
              <div className="flex flex-col">
                <div className="flex items-center gap-5 md:gap-10">
                  <label className="inline-flex">
                    <input type="radio" name="default_text_color1" className="form-radio text-primary peer" />
                    <span className="peer-checked:text-primary">사용함</span>
                  </label>

                  <label className="inline-flex">
                    <input type="radio" name="default_text_color1" className="form-radio peer" defaultChecked />
                    <span className="peer-checked:text-primary">사용 안 함</span>
                  </label>
                </div>
                <div className="pt-2 text-white-dark">스마트폰에서 메일을 확인할 수 있도록 IMAP/SMTP를 설정합니다.</div>
              </div>
            </div>

            <div className="mx-4 h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

            <div className="py-4 px-6 flex flex-col items-center">
              <div className="flex items-center gap-2 md:gap-2">
                <button type="button" className="btn btn-outline-dark">
                  취소
                </button>
                <button type="button" className="btn btn-dark">
                  저장
                </button>
              </div>
            </div>

            <div className="py-4 px-6 flex flex-col">
              <div className="font-bold">스마트폰 메일 애플리케이션 계정 설정</div>
              <div className="text-white-dark">스마트폰의 메일 계정 설정에 아래와 같이 등록해 주세요.</div>
            </div>

            <div className="mx-4 h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">계정 정보</div>
              <div className="w-60">아이디 : tjdwo9577</div>
              <div className="w-60">비밀번호 : 로그인 비밀번호</div>
            </div>

            <div className="mx-4 h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">서버 명</div>
              <div className="w-60">IMAP 서버명 : imap.naver.com</div>
              <div className="w-60">SMTP 서버명 : smtp.naver.com</div>
            </div>

            <div className="mx-4 h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">포트 정보</div>
              <div className="w-60">IMAP 포트 : 993, 보안연결(SSL) 필요</div>
              <div className="flex flex-col">
                <div className="w-60">SMTP 포트 : 587, 보안 연결(TLS) 필요</div>
                <div className="w-60 text-white-dark">(TLS가 없는 경우 SSL로 연결)</div>
              </div>
            </div>

            <div className="mx-4 h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">도움말</div>
              <div className="w-60 text-white-dark">IMAP/SMTP 연결이 되지 않아요</div>
              <div className="w-60 text-white-dark">메일 프로그램 IMAP/SMTP 설정하기</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imap;
