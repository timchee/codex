import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="footer__copyright">
                    With love, by the Codex team - © GjirafaTech 2022
                </div>
                <ul className="footer__links">
                    <li>
                        <Link href="/">
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}