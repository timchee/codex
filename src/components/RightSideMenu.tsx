import Link from "next/link";

export default function RightSideMenu() {
    return (
        <section className="right--section">
            <div className="right--section__content">
                <h6>Currently Viewing</h6>
                <ul>
                    <li>
                        <a>What is Codex</a>
                    </li>
                    <li>
                        <a>How to get started</a>
                    </li>
                    <li>
                        <a>Create your first organization</a>
                    </li>
                    <li>
                        <a>Create your first page</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}