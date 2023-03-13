import Link from 'next/link';

export default function MostPopular() {
    return (
        <section className="most-popular">
            <h5 className="most-popular__title">
                Most popular
            </h5>
            <div className="most-popular__cards">
                <Link href="/" className="most-popular__card">
                    <div className="most-popular__card-image"></div>
                    <div className="most-popular__card-content">
                        <h6>
                            Create your first plugin
                        </h6>
                        <p className='most-popular__card-content__description'>
                            Complete documentation for Codex Admin API endpoints and possibilities. The documentation includes information about authorization, objects, limitations and also offers Swagger UI.
                        </p>
                        <div className='most-popular__card-content__link'>
                            <div className="most-popular__card-content__image"></div>
                            <p>CODEX PLUGINS</p>
                        </div>
                    </div>
                </Link>
                <Link href="/" className='most-popular__card'>
                    <div className="most-popular__card-image"></div>
                    <div className="most-popular__card-content">
                        <h6>
                            Query in GraphQL
                        </h6>
                        <p className='most-popular__card-content__description'>
                            All retrieval of data from Codex GraphQL APi is done through the root query object type. The query object contains the fields for retrieving entries for all models created in Codex.
                        </p>
                        <div className='most-popular__card-content__link'>
                            <div className="most-popular__card-content__image"></div>
                            <p>CODEX GRAPHQL</p>
                        </div>
                    </div>
                </Link>
                <Link href="/" className='most-popular__card'>
                    <div className="most-popular__card-image"></div>
                    <div className="most-popular__card-content">
                        <h6>
                            Entries API
                        </h6>
                        <p className='most-popular__card-content__description'>
                            Complete documentation for Codex Admin API endpoints and possibilities. The documentation includes information about authorization, objects, limitations and also offers Swagger UI.
                        </p>
                        <div className='most-popular__card-content__link'>
                            <div className="most-popular__card-content__image"></div>
                            <p>CODEX API</p>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    )
}