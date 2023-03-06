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
                            Entries API
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Articles API
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Sections API
                        </Link>
                    </li>
                </ul>
                <ul className="quick-links__items__item">
                    <li>
                        <Link href="/">
                            Create a custom page
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Create a custom block
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Create a custom field
                        </Link>
                    </li>
                </ul>
                <ul className="quick-links__items__item">
                    <li>
                        <Link href="/">
                            Paragraph block
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Image block
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Embeds block
                        </Link>
                    </li>
                </ul>
                <ul className="quick-links__items__item">
                    <li>
                        <Link href="/">
                            Heading block
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Table block
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            VP Player block
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}