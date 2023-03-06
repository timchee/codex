import Link from "next/link";
import Image from "next/image";

export default function TechnicalCategories() {
    return (
        <section className="technical-categories">
            <h5 className="technical-categories__title">
                Technical Categories
            </h5>
            <div className="technical-categories__items">
                <Link href="/" className="technical-categories__item">
                    <h6>
                        Codex API
                    </h6>
                    <div className="technical-categories__item-image"></div>
                </Link>
                <Link href="/" className="technical-categories__item">
                    <h6>
                        Codex Editor
                    </h6>
                    <div className="technical-categories__item-image"></div>
                </Link>
                <Link href="/" className="technical-categories__item">
                    <h6>
                        Codex GraphQL
                    </h6>
                    <div className="technical-categories__item-image"></div>
                </Link>
                <Link href="/" className="technical-categories__item">
                    <h6>
                        Codex Plugins
                    </h6>
                    <div className="technical-categories__item-image"></div>
                </Link>
                <Link href="/" className="technical-categories__item">
                    <h6>
                        Codex Webhooks
                    </h6>
                    <div className="technical-categories__item-image"></div>
                </Link>
            </div>
        </section>
    )
}