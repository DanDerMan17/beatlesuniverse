export default function Interviews() {
    return (
        <div className="page">
            <h2>Interesting Interviews & Resources</h2>

            <article>
                <section className="resource" id="george-interview">
                    <h3>George Harrison Interview</h3>
                    <p>
                        <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/7TeqyovfJzE?si=9Zqoo5OdTLk5iuhL"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen></iframe>
                    </p>
                    <p>
                        adkasjdka
                    </p>
                </section>
            </article>

            <article>
                <section className="resource">
                    <h3>Resource Title 1</h3>
                    <p>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            Link to interview/article
                        </a>
                    </p>
                    <p>
                        Explain why this interview is important and what insights it provides...
                    </p>
                </section>

                <section className="resource">
                    <h3>Resource Title 2</h3>
                    <p>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            Link to interview/article
                        </a>
                    </p>
                    <p>
                        Your commentary on why this resource matters...
                    </p>
                </section>

                <p>
                    <em>Add your favorite interviews, documentaries, and articles here...</em>
                </p>
            </article>
        </div>
    )
}