import { useEffect, useState } from 'react';
import 'tippy.js/dist/tippy.css';
import 'react-quill/dist/quill.snow.css';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import IconMenu from '../../../components/Icon/IconMenu';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import Header from '../../../components/Settings/Header';
import SubMenu from '../../../components/Settings/Basic/SubMenu';

const Write = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('List'));
  });

  const [isShowMailMenu, setIsShowMailMenu] = useState(false);
  const [selectedTab, setSelectedTab] = useState('basic');
  const [selectedSubTab, setSelectedSubTab] = useState('write');
  const [searchText, setSearchText] = useState<any>('');

  const navigate = useNavigate();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab, selectedSubTab, searchText]);

  const tabChanged = (tabType: any) => {
    setIsShowMailMenu(false);
  };

  const options1 = [
    { value: 'option1', label: '에디터' },
    { value: 'option2', label: '텍스트' },
  ];

  const options2 = [
    { value: 'option1', label: '굴림' },
    { value: 'option2', label: '굴림체' },
    { value: 'option3', label: '돋움' },
    { value: 'option4', label: '돋움체' },
  ];

  const options3 = [
    { value: 'option1', label: '14px' },
    { value: 'option2', label: '12px' },
    { value: 'option3', label: '11px' },
    { value: 'option4', label: '9px' },
  ];

  const options4 = [
    { value: 'option1', label: '30초' },
    { value: 'option2', label: '1분' },
    { value: 'option3', label: '3분' },
    { value: 'option4', label: '5분' },
  ];

  const options5 = [
    { value: 'option1', label: '10초 후 발송' },
    { value: 'option2', label: '30초 후 발송' },
    { value: 'option3', label: '1분 후 발송' },
  ];

  return (
    <div>
      <div className="flex gap-5 relative sm:h-[calc(100vh_-_110px)] h-full">
        <div className="panel p-0 flex-1 overflow-x-hidden h-full">
          <div className="relative">
            <Header headTab={'basic'} />

            <SubMenu subMenuTab={'write'} />

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">기본 에디터/글꼴</div>
              <div className="flex items-center gap-4 md:gap-4">
                <div className="w-32">
                  <Select defaultValue={options1[0]} options={options1} isSearchable={false} />
                </div>
                <div className="w-32">
                  <Select defaultValue={options2[0]} options={options2} isSearchable={false} />
                </div>
                <div className="w-32">
                  <Select defaultValue={options3[0]} options={options3} isSearchable={false} />
                </div>
              </div>
            </div>

            <div className="mx-4 h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">새 창으로 쓰기</div>
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
              <div className="w-60">자동 임시 저장</div>
              <div className="flex items-center gap-4 md:gap-4">
                <label className="inline-flex">
                  <input type="radio" name="default_text_color2" className="form-radio peer" defaultChecked />
                  <span className="peer-checked:text-primary">사용함</span>
                </label>

                <div className="w-40">
                  <Select defaultValue={options4[0]} options={options4} isSearchable={false} />
                </div>

                <label className="inline-flex">
                  <input type="radio" name="default_text_color2" className="form-radio text-primary peer" />
                  <span className="peer-checked:text-primary">사용 안 함</span>
                </label>
              </div>
            </div>

            <div className="mx-4 h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">보낸 메일 저장</div>
              <div className="flex items-center gap-5 md:gap-10">
                <label className="inline-flex">
                  <input type="radio" name="default_text_color3" className="form-radio peer" defaultChecked />
                  <span className="peer-checked:text-primary">사용함</span>
                </label>

                <label className="inline-flex">
                  <input type="radio" name="default_text_color3" className="form-radio text-primary peer" />
                  <span className="peer-checked:text-primary">사용 안 함</span>
                </label>
              </div>
            </div>

            <div className="mx-4 h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">나를 항상 참조에 포함</div>
              <div className="flex items-center gap-5 md:gap-10">
                <label className="inline-flex">
                  <input type="radio" name="default_text_color4" className="form-radio peer" defaultChecked />
                  <span className="peer-checked:text-primary">포암 안 함</span>
                </label>

                <label className="inline-flex">
                  <input type="radio" name="default_text_color4" className="form-radio text-primary peer" />
                  <span className="peer-checked:text-primary">참조</span>
                </label>

                <label className="inline-flex">
                  <input type="radio" name="default_text_color4" className="form-radio text-primary peer" />
                  <span className="peer-checked:text-primary">숨은 참조</span>
                </label>
              </div>
            </div>

            <div className="mx-4 h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">발송 전 미리보기</div>
              <div className="flex items-center gap-5 md:gap-10">
                <label className="inline-flex">
                  <input type="radio" name="default_text_color5" className="form-radio peer" defaultChecked />
                  <span className="peer-checked:text-primary">사용 안 함</span>
                </label>

                <label className="inline-flex">
                  <input type="radio" name="default_text_color5" className="form-radio text-primary peer" />
                  <span className="peer-checked:text-primary">중요 메일</span>
                </label>

                <label className="inline-flex">
                  <input type="radio" name="default_text_color5" className="form-radio text-primary peer" />
                  <span className="peer-checked:text-primary">모든 메일</span>
                </label>
              </div>
            </div>

            <div className="mx-4 h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">대기 발송</div>
              <div className="flex items-center gap-4 md:gap-4">
                <label className="inline-flex">
                  <input type="radio" name="default_text_color6" className="form-radio peer" defaultChecked />
                  <span className="peer-checked:text-primary">사용함</span>
                </label>

                <div className="w-40">
                  <Select defaultValue={options5[0]} options={options5} isSearchable={false} />
                </div>

                <label className="inline-flex">
                  <input type="radio" name="default_text_color6" className="form-radio text-primary peer" />
                  <span className="peer-checked:text-primary">사용 안 함</span>
                </label>
              </div>
            </div>

            <div className="mx-4 h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">답장받을 메일 주소</div>
              <div className="flex flex-col">
                <label className="inline-flex">
                  <input type="radio" name="default_text_color7" className="form-radio peer" defaultChecked />
                  <span className="peer-checked:text-primary">보낸 사람의 메일 주소로 답장 받음</span>
                </label>

                <label className="inline-flex items-center pt-2">
                  <input type="radio" name="default_text_color7" className="form-radio text-primary peer" />
                  <span className="peer-checked:text-primary">특정 메일 주소로 답장 받기</span>
                  <div className="items-center pl-4">
                    <input type="email" placeholder="" className="form-input" />
                  </div>
                </label>
              </div>
            </div>

            <div className="mx-4 h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">답장시 원본 포함</div>
              <div className="flex items-center gap-5 md:gap-10">
                <label className="inline-flex">
                  <input type="radio" name="default_text_color8" className="form-radio peer" defaultChecked />
                  <span className="peer-checked:text-primary">사용함</span>
                </label>

                <label className="inline-flex">
                  <input type="radio" name="default_text_color8" className="form-radio text-primary peer" />
                  <span className="peer-checked:text-primary">사용 안 함</span>
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

export default Write;
