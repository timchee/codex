import Link from "next/link";

export default function QuickLinks() {
    return (
        <section className="quick-links">
            <h5 className="quick-links__title">
                Quick Links
            </h5>
            <div className="quick-links__items">
                <ul className="quick-links__items__item">
                    <li>
                        <Link href="/">
                            Getting to know codex
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Codex Playground
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Plugins
                        </Link>
                    </li>
                </ul>
                <ul className="quick-links__items__item">
                    <li>
                        <Link href="/">
                            Getting to know codex
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Codex Playground
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Plugins
                        </Link>
                    </li>
                </ul>
                <ul className="quick-links__items__item">
                    <li>
                        <Link href="/">
                            Getting to know codex
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Codex Playground
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Plugins
                        </Link>
                    </li>
                </ul>
                <ul className="quick-links__items__item">
                    <li>
                        <Link href="/">
                            Getting to know codex
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Codex Playground
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Plugins
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}