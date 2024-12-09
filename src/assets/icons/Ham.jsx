
const Ham = ({ isCheckoutSideMenuOpen }) => (
  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
    className={`nav-hamLogo ${isCheckoutSideMenuOpen ? 'nav-hamLogoClicked' : ''} `}
  >
    <rect className="top" x="20" y="29" width="60" height="4.85106" fill="#4F96CC" rx="2" ry="2" />
    <rect className="middle" x="30" y="45.5745" width="50" height="4.85106" fill="#4F96CC" rx="2" ry="2" />
    <rect className="bottom" x="40" y="62.1489" width="40" height="4.85106" fill="#4F96CC" rx="2" ry="2" />
  </svg>
)

export default Ham
