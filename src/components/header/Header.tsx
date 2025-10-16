import "./styles.scss";

import { useDarkMode } from "../../hooks/useDarkMode";

interface Props {
    error: boolean | null;
    loading: boolean | null;
    vinEncoder: string;
    setVinEncoder: any;
    handleVinEncode: () => void;
}
const Header = (props: Props) => {
    const { handleDarkMode, isDark } = useDarkMode();

    document.body.style.backgroundColor = isDark ? "#141d2f" : "#f6f8ff";

    return (
        <header>
            <div className="header_body">
                <div className="title">
                    <h1 style={{ color: isDark ? "#f6f8ff" : "#000" }}>vin - finder</h1>
                </div>

                <div
                    className="search "
                    style={{
                        backgroundColor: isDark ? "#1e2a47" : "#f6f8ff",
                        boxShadow: isDark ? "" : "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)",
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-search"
                        viewBox="0 0 16 16"
                    >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>

                    {/* SEARCH */}
                    <input
                        type="text"
                        style={{ color: isDark ? "#f6f8ff" : "#000" }}
                        placeholder="VIN - კოდი"
                        value={props.vinEncoder}
                        onChange={(e) => props.setVinEncoder(e.target.value)}
                    />

                    {/* GET RESULT */}
                    <button onClick={props.handleVinEncode}>ძიება</button>

                    {/* LOADING */}

                    {props.error ? (
                        <div
                            className="errorMessage"
                            style={{
                                backgroundColor: isDark ? "#1e2a47" : "#e2e9ff",
                                color: isDark ? "#f6f8ff" : "#000",
                            }}
                        >
                            მოხდა შეცდომა VIN კოდი ვერ მოიძებნა
                        </div>
                    ) : null}
                </div>

                {/* DARK MODE */}
                <button onClick={handleDarkMode} style={{ color: isDark ? "#FFF" : "#000" }}>
                    {isDark ? "LIGHT" : "DARK"}
                </button>
            </div>
        </header>
    );
};
export default Header;
