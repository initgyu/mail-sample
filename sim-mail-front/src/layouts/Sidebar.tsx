import PerfectScrollbar from 'react-perfect-scrollbar';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { toggleSidebar } from '../store/themeConfigSlice';
import AnimateHeight from 'react-animate-height';
import { IRootState } from '../store';
import { useEffect, useState } from 'react';
import IconCaretDown from '../components/Icon/IconCaretDown';
import IconTrashLines from '../components/Icon/IconTrashLines';
import IconInfoHexagon from '../components/Icon/IconInfoHexagon';
import IconSend from '../components/Icon/IconSend';
import IconArchive from '../components/Icon/IconArchive';
import IconFolder from '../components/Icon/IconFolder';
import IconClock from '../components/Icon/IconClock';
import IconPencilPaper from '../components/Icon/IconPencilPaper';
import IconMail from '../components/Icon/IconMail';
import IconEdit from '../components/Icon/IconEdit';
import IconSettings from '../components/Icon/IconSettings';

const Sidebar = () => {
  const [currentMenu, setCurrentMenu] = useState<string>('');
  const [errorSubMenu, setErrorSubMenu] = useState(false);
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);
  const location = useLocation();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const toggleMenu = (value: string) => {
    setCurrentMenu((oldValue) => {
      return oldValue === value ? '' : value;
    });
  };

  useEffect(() => {
    const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
    if (selector) {
      selector.classList.add('active');
      const ul: any = selector.closest('ul.sub-menu');
      if (ul) {
        let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
        if (ele.length) {
          ele = ele[0];
          setTimeout(() => {
            ele.click();
          });
        }
      }
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth < 1024 && themeConfig.sidebar) {
      dispatch(toggleSidebar());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div className={semidark ? 'dark' : ''}>
      <nav
        className={`sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300 ${
          semidark ? 'text-white-dark' : ''
        }`}
      >
        <div className="bg-white dark:bg-black h-full">
          <div className="flex justify-between items-center px-4 py-3">
            <NavLink to="/" className="main-logo flex items-center shrink-0">
              <img className="w-8 ml-[5px] flex-none" src="/assets/images/logo.svg" alt="logo" />
              <span className="text-2xl ltr:ml-1.5 rtl:mr-1.5 font-semibold align-middle lg:inline dark:text-white-light">
                {t('SIMMAIL')}
              </span>
            </NavLink>
          </div>
          <PerfectScrollbar className="h-[calc(100vh-80px)] relative">
            <ul className="relative font-semibold space-y-0.5 p-4 py-0">
              {/* 상단 버튼 */}
              <li className="menu nav-item flex justify-center p-4">
                <div className="relative inline-flex align-middle">
                  <NavLink to="/mailbox/write" className="group">
                    <button type="button" className="btn btn-dark ltr:rounded-r-none rtl:rounded-l-none">
                      메일쓰기
                    </button>
                  </NavLink>
                  <NavLink to="/mailbox/write?toMe" className="group">
                    <button type="button" className="btn btn-dark ltr:rounded-l-none rtl:rounded-r-none">
                      내게쓰기
                    </button>
                  </NavLink>
                </div>
              </li>

              <div className="h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

              {/* 전체메일함 */}
              <li className="nav-item">
                <NavLink to="/mailbox/list/0" className="group">
                  <div className="flex items-center">
                    <IconMail className="group-hover:!text-primary shrink-0" />
                    <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                      {t('전체메일함')}
                    </span>
                  </div>
                </NavLink>
              </li>

              {/* 받은메일함 */}
              <li className="nav-item">
                <NavLink to="/mailbox/list/1" className="group">
                  <div className="flex items-center">
                    <IconArchive className="group-hover:!text-primary shrink-0" />
                    <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                      {t('받은메일함')}
                    </span>
                  </div>
                </NavLink>
              </li>

              {/* 보낸메일함 */}
              <li className="nav-item">
                <NavLink to="/mailbox/list/2" className="group">
                  <div className="flex items-center">
                    <IconSend className="group-hover:!text-primary shrink-0" />
                    <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                      {t('보낸메일함')}
                    </span>
                  </div>
                </NavLink>
              </li>

              {/* 임시메일함 */}
              <li className="nav-item">
                <NavLink to="/mailbox/list/3" className="group">
                  <div className="flex items-center">
                    <IconEdit className="group-hover:!text-primary shrink-0" />
                    <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                      {t('임시메일함')}
                    </span>
                  </div>
                </NavLink>
              </li>

              {/* 내게쓴메일함 */}
              <li className="nav-item">
                <NavLink to="/mailbox/list/4" className="group">
                  <div className="flex items-center">
                    <IconPencilPaper className="group-hover:!text-primary shrink-0" />
                    <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                      {t('내게쓴메일함')}
                    </span>
                  </div>
                </NavLink>
              </li>

              {/* 예약메일함 */}
              <li className="nav-item">
                <NavLink to="/mailbox/list/5" className="group">
                  <div className="flex items-center">
                    <IconClock className="group-hover:!text-primary shrink-0" />
                    <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                      {t('예약메일함')}
                    </span>
                  </div>
                </NavLink>
              </li>

              <div className="h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

              {/* 내 메일함 */}
              <li className="menu nav-item">
                <button type="button" className="nav-link group w-full" onClick={() => toggleMenu('invoice')}>
                  <div className="flex items-center">
                    <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                      {t('내 메일함')}
                    </span>
                  </div>

                  <div className={currentMenu !== 'invoice' ? 'rtl:rotate-90 -rotate-90' : ''}>
                    <IconCaretDown />
                  </div>
                </button>

                <AnimateHeight duration={300} height={currentMenu === 'invoice' ? 'auto' : 0}>
                  <ul className="text-gray-500 ltr:pl-2 rtl:pr-2">
                    <li className="menu nav-item">
                      <NavLink to="/mailbox/list/101" className="group">
                        <div className="flex items-center">
                          <IconFolder className="group-hover:!text-primary shrink-0" />
                          <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                            {t('개인메일함1')}
                          </span>
                        </div>
                      </NavLink>
                    </li>

                    <li className="menu nav-item">
                      <NavLink to="/mailbox/list/102" className="group">
                        <div className="flex items-center">
                          <IconFolder className="group-hover:!text-primary shrink-0" />
                          <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                            {t('개인메일함2')}
                          </span>
                        </div>
                      </NavLink>
                    </li>

                    <li className="menu nav-item">
                      <NavLink to="/mailbox/list/103" className="group">
                        <div className="flex items-center">
                          <IconFolder className="group-hover:!text-primary shrink-0" />
                          <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                            {t('개인메일함3')}
                          </span>
                        </div>
                      </NavLink>
                    </li>
                  </ul>
                </AnimateHeight>
              </li>

              <div className="h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

              {/* 스팸메일함 */}
              <li className="nav-item">
                <NavLink to="/mailbox/list/6" className="group">
                  <div className="flex items-center">
                    <IconInfoHexagon className="group-hover:!text-primary shrink-0" />
                    <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                      {t('스팸메일함')}
                    </span>
                  </div>
                </NavLink>
              </li>

              {/* 휴지통 */}
              <li className="nav-item">
                <NavLink to="/mailbox/list/7" className="group">
                  <div className="flex items-center">
                    <IconTrashLines className="group-hover:!text-primary shrink-0" />
                    <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                      {t('휴지통')}
                    </span>
                  </div>
                </NavLink>
              </li>

              <div className="h-px border-b border-white-light dark:border-[#1b2e4b]"></div>

              <li className="nav-item">
                <NavLink to="/settings" className="group">
                  <div className="flex items-center">
                    <IconSettings className="group-hover:!text-primary shrink-0" />
                    <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                      {t('환경설정')}
                    </span>
                  </div>
                </NavLink>
              </li>
            </ul>
          </PerfectScrollbar>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
