import { RiDice4Line } from 'react-icons/ri';
import { SanitizedThemeConfig } from '../../interfaces/sanitized-config';
import { LOCAL_STORAGE_KEY_NAME } from '../../constants';
import { skeleton } from '../../utils';
import { MouseEvent } from 'react';

/**
 * Renders a theme changer component.
 *
 * @param {Object} props - The props object.
 * @param {string} props.theme - The current theme.
 * @param {function} props.setTheme - A function to set the theme.
 * @param {boolean} props.loading - Whether the component is in a loading state.
 * @param {SanitizedThemeConfig} props.themeConfig - The theme configuration object.
 * @return {JSX.Element} The rendered theme changer component.
 */
const ThemeChanger = ({
  theme,
  setTheme,
  loading,
  themeConfig,
}: {
  theme: string;
  setTheme: (theme: string) => void;
  loading: boolean;
  themeConfig: SanitizedThemeConfig;
}) => {
  const changeTheme = (
    e: MouseEvent<HTMLAnchorElement>,
    selectedTheme: string,
  ) => {
    e.preventDefault();

    document.querySelector('html')?.setAttribute('data-theme', selectedTheme);

    typeof window !== 'undefined' &&
      localStorage.setItem(LOCAL_STORAGE_KEY_NAME, selectedTheme);

    setTheme(selectedTheme);
  };

  return (
    <div className="flex items-center gap-2">
      {loading ? (
        skeleton({ widthCls: 'w-24', heightCls: 'h-8' })
      ) : (
        <div title="Change Theme" className="dropdown dropdown-top">
          <div
            tabIndex={0}
            className="btn btn-ghost btn-sm normal-case opacity-60 text-base-content flex items-center gap-1"
          >
            <RiDice4Line className="inline-block w-4 h-4 stroke-current" />
            <span className="capitalize text-sm">
              {theme === themeConfig.defaultTheme ? 'Theme' : theme}
            </span>
          </div>
          <div
            tabIndex={0}
            className="mb-2 overflow-y-auto shadow-2xl dropdown-content max-h-60 min-w-max rounded-lg bg-base-200 text-base-content z-10"
          >
            <ul className="p-2 menu menu-sm">
              {[
                themeConfig.defaultTheme,
                ...themeConfig.themes.filter(
                  (item) => item !== themeConfig.defaultTheme,
                ),
              ].map((item, index) => (
                <li key={index}>
                  <a
                    onClick={(e) => changeTheme(e, item)}
                    className={`${theme === item ? 'active' : ''}`}
                  >
                    <span className="opacity-60 capitalize">
                      {item}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeChanger;
