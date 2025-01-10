import { useEffect, useState } from 'react';
import 'tippy.js/dist/tippy.css';
import 'react-quill/dist/quill.snow.css';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import IconMenu from '../../../components/Icon/IconMenu';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/Settings/Header';
import SubMenu from '../../../components/Settings/Basic/SubMenu';

const List = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('List'));
  });

  const [isShowMailMenu, setIsShowMailMenu] = useState(false);
  const [selectedTab, setSelectedTab] = useState('basic');
  const [selectedSubTab, setSelectedSubTab] = useState('list');
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
            <Header headTab={'basic'} />

            <SubMenu subMenuTab={'list'} />

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">목록 보기 개수</div>
              <div className="flex items-center gap-5 md:gap-10">
                <label className="inline-flex">
                  <input type="radio" name="default_text_color1" className="form-radio peer" defaultChecked />
                  <span className="peer-checked:text-primary">10개</span>
                </label>

                <label className="inline-flex">
                  <input type="radio" name="default_text_color1" className="form-radio text-primary peer" />
                  <span className="peer-checked:text-primary">20개</span>
                </label>

                <label className="inline-flex">
                  <input type="radio" name="default_text_color1" className="form-radio text-primary peer" />
                  <span className="peer-checked:text-primary">30개</span>
                </label>

                <label className="inline-flex">
                  <input type="radio" name="default_text_color1" className="form-radio text-primary peer" />
                  <span className="peer-checked:text-primary">50개</span>
                </label>

                <label className="inline-flex">
                  <input type="radio" name="default_text_color1" className="form-radio text-primary peer" />
                  <span className="peer-checked:text-primary">100개</span>
                </label>
              </div>
            </div>

            <div className="mx-4 h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">목록 보기 방식</div>
              <div className="flex items-center gap-5 md:gap-10">
                <label className="inline-flex">
                  <input type="radio" name="default_text_color2" className="form-radio peer" defaultChecked />
                  <span className="peer-checked:text-primary">메일 목록만 보기</span>
                </label>

                <label className="inline-flex">
                  <input type="radio" name="default_text_color2" className="form-radio text-primary peer" />
                  <span className="peer-checked:text-primary">좌우 분할 보기</span>
                </label>

                <label className="inline-flex">
                  <input type="radio" name="default_text_color2" className="form-radio text-primary peer" />
                  <span className="peer-checked:text-primary">상하 분할 보기</span>
                </label>
              </div>
            </div>

            <div className="mx-4 h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">본문 미리보기</div>
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
              <div className="w-60">첨부파일 미리보기</div>
              <div className="flex items-center gap-5 md:gap-10">
                <label className="inline-flex">
                  <input type="radio" name="default_text_color4" className="form-radio peer" defaultChecked />
                  <span className="peer-checked:text-primary">사용함</span>
                </label>

                <label className="inline-flex">
                  <input type="radio" name="default_text_color4" className="form-radio text-primary peer" />
                  <span className="peer-checked:text-primary">사용 안 함</span>
                </label>
              </div>
            </div>

            <div className="mx-4 h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">목록 한 줄로 보기</div>
              <div className="flex items-center gap-5 md:gap-10">
                <label className="inline-flex">
                  <input type="radio" name="default_text_color5" className="form-radio peer" defaultChecked />
                  <span className="peer-checked:text-primary">사용함</span>
                </label>

                <label className="inline-flex">
                  <input type="radio" name="default_text_color5" className="form-radio text-primary peer" />
                  <span className="peer-checked:text-primary">사용 안 함</span>
                </label>
              </div>
            </div>

            <div className="mx-4 h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

            <div className="py-4 px-6 flex items-center gap-5 md:gap-20">
              <div className="w-60">메일 용량 표기</div>
              <div className="flex items-center gap-5 md:gap-10">
                <label className="inline-flex">
                  <input type="radio" name="default_text_color6" className="form-radio peer" defaultChecked />
                  <span className="peer-checked:text-primary">사용함</span>
                </label>

                <label className="inline-flex">
                  <input type="radio" name="default_text_color6" className="form-radio text-primary peer" />
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

export default List;
