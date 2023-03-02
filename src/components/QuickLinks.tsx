import Link from "next/link";

export default function QuickLinks() {
    return (
        <div className="quick-links">
            <h4 className="quick-links__title">
                Quick Links
            </h4>
            <div className="quick-links__items">
                <div className="quick-links__items__item">
                    <Link href="/">
                        Getting to know codex
                    </Link>
                    <Link href="/">
                        Codex Playground
                    </Link>
                    <Link href="/">
                        Plugins
                    </Link>
                </div>
                <div className="quick-links__items__item">
                    <Link href="/">
                        Getting to know codex
                    </Link>
                    <Link href="/">
                        Codex Playground
                    </Link>
                    <Link href="/">
                        Plugins
                    </Link>
                </div>
                <div className="quick-links__items__item">
                    <Link href="/">
                        Getting to know codex
                    </Link>
                    <Link href="/">
                        Codex Playground
                    </Link>
                    <Link href="/">
                        Plugins
                    </Link>
                </div>
                <div className="quick-links__items__item">
                    <Link href="/">
                        Getting to know codex
                    </Link>
                    <Link href="/">
                        Codex Playground
                    </Link>
                    <Link href="/">
                        Plugins
                    </Link>
                </div>
            </div>
        </div>
    )
}