import { useEffect, useState } from 'react';
import Select from 'react-select';
import 'tippy.js/dist/tippy.css';
import 'react-quill/dist/quill.snow.css';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import IconMenu from '../../../components/Icon/IconMenu';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/Settings/Header';
import SubMenu from '../../../components/Settings/Basic/SubMenu';

const Read = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('List'));
  });

  const [isShowMailMenu, setIsShowMailMenu] = useState(false);
  const [selectedTab, setSelectedTab] = useState('basic');
  const [selectedSubTab, setSelectedSubTab] = useState('read');
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

            <SubMenu subMenuTab={'read'} />

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">메일 첫화면</div>
              <div className="w-60">
                <Select defaultValue={options1[0]} options={options1} isSearchable={false} />
              </div>
            </div>

            <div className="mx-4 h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">메일 새 창으로 읽기</div>
              <div className="flex items-center gap-5 md:gap-10">
                <label className="inline-flex">
                  <input type="radio" name="default_text_color1" className="form-radio peer" defaultChecked />
                  <span className="peer-checked:text-primary">사용함</span>
                </label>

                <label className="inline-flex">
                  <input type="radio" name="default_text_color1" className="form-radio text-primary peer" />
                  <span className="peer-checked:text-primary">사용 안 함</span>
                </label>
              </div>
            </div>

            <div className="mx-4 h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">보낸사람 세부 내용 표시</div>
              <div className="flex items-center gap-5 md:gap-10">
                <label className="inline-flex">
                  <input type="radio" name="default_text_color2" className="form-radio peer" defaultChecked />
                  <span className="peer-checked:text-primary">사용함</span>
                </label>

                <label className="inline-flex">
                  <input type="radio" name="default_text_color2" className="form-radio text-primary peer" />
                  <span className="peer-checked:text-primary">사용 안 함</span>
                </label>
              </div>
            </div>

            <div className="mx-4 h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">메일함 기준 시간</div>
              <div className="w-60">
                <Select defaultValue={options2[0]} options={options2} isSearchable={false} />
              </div>
            </div>

            <div className="mx-4 h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">메일 삭제/이동 후 화면 표시</div>
              <div className="flex items-center gap-5 md:gap-10">
                <label className="inline-flex">
                  <input type="radio" name="default_text_color3" className="form-radio peer" defaultChecked />
                  <span className="peer-checked:text-primary">메일 목록</span>
                </label>

                <label className="inline-flex">
                  <input type="radio" name="default_text_color3" className="form-radio text-primary peer" />
                  <span className="peer-checked:text-primary">이후 수신된 메일</span>
                </label>

                <label className="inline-flex">
                  <input type="radio" name="default_text_color3" className="form-radio text-primary peer" />
                  <span className="peer-checked:text-primary">이전 수신된 메일</span>
                </label>
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

export default Read;
