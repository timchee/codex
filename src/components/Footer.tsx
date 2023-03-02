import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="footer__copyright">
                    With love, by the Codex team - © GjirafaTech 2022
                </div>
                <div className="footer__links">
                    <Link href="/">
                        Privacy Policy
                    </Link>
                    <Link href="/">
                        Contact Us
                    </Link>
                </div>
            </div>
        </footer>
    )
}