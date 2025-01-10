import { useEffect, useState } from 'react';
import Select from 'react-select';
import 'tippy.js/dist/tippy.css';
import 'react-quill/dist/quill.snow.css';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import IconMenu from '../../../components/Icon/IconMenu';
import { useNavigate } from 'react-router-dom';
import Flatpickr from 'react-flatpickr';
import Header from '../../../components/Settings/Header';
import SubMenu from '../../../components/Settings/Basic/SubMenu';

const Sign = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('List'));
  });

  const [isShowMailMenu, setIsShowMailMenu] = useState(false);
  const [selectedTab, setSelectedTab] = useState('basic');
  const [selectedSubTab, setSelectedSubTab] = useState('sign');
  const [searchText, setSearchText] = useState<any>('');

  const navigate = useNavigate();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab, selectedSubTab, searchText]);

  const tabChanged = (tabType: any) => {
    setIsShowMailMenu(false);
  };

  const options1 = [
    { value: 'option1', label: '받은메일함' },
    { value: 'option2', label: '보낸메일함' },
    { value: 'option3', label: '임시보관함' },
  ];

  const options2 = [
    { value: 'option1', label: 'GMT +09:00 (서울, 도쿄)' },
    { value: 'option2', label: 'GMT +09:30 (다윈, 아델라이드)' },
    { value: 'option3', label: 'GMT +10:00 (괌, 캔버라, 시드니)' },
  ];

  return (
    <div>
      <div className="flex gap-5 relative sm:h-[calc(100vh_-_110px)] h-full">
        <div className="panel p-0 flex-1 overflow-x-hidden h-full">
          <div className="relative">
            <Header headTab={'basic'} />

            <SubMenu subMenuTab={'sign'} />

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">서명 사용</div>
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
                <div className="pt-2 text-white-dark">
                  메일을 보낼 때, 꼬릿말처럼 메일 내용 끝에 항상 첨부되는 내용으로, 3개까지 만드실 수 있습니다.
                </div>
              </div>
            </div>

            <div className="mx-4 h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">기간</div>
              <div className="flex flex-col w-full gap-4">
                <div className="flex items-center justify-between gap-2 md:gap-2">
                  <div className="items-center">
                    <input type="radio" name="default_text_color2" className="form-radio peer" defaultChecked />
                    <span className="peer-checked:text-primary">내서명</span>
                  </div>
                  <div className="flex gap-2 md:gap-2">
                    <div className="w-fit">
                      <button>미리보기</button>
                    </div>
                    <div className="w-fit">
                      <button>수정</button>
                    </div>
                    <div className="w-fit">
                      <button>삭제</button>
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="h-px border-b border-white-light dark:border-[#1b2e4b]"></div>
                </div>

                <div className="flex items-center justify-between gap-2 md:gap-2">
                  <div className="items-center">
                    <input type="radio" name="default_text_color2" className="form-radio text-primary peer" />
                    <span className="peer-checked:text-primary">회사 서명</span>
                  </div>
                  <div className="flex gap-2 md:gap-2">
                    <div className="w-fit">
                      <button>미리보기</button>
                    </div>
                    <div className="w-fit">
                      <button>수정</button>
                    </div>
                    <div className="w-fit">
                      <button>삭제</button>
                    </div>
                  </div>
                </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
