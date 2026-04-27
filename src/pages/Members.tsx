export default function Members() {
    return (
        <div className="page">
            <h2>Members</h2>
            <article>
                <section className="member">
                    <h3>John Lennon</h3>
                    <img width={300}  src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/John_Lennon_%22Walls_and_Bridges%22_1974_press_photo_%284x5_cropped%29.jpg/500px-John_Lennon_%22Walls_and_Bridges%22_1974_press_photo_%284x5_cropped%29.jpg"}/>
                    <p>Rhythm guitar, Vocals, Songwriter</p>
                    <p>09. October 1940 (Liverpool) - 08. December 1980 (New York)</p>
                    <p>Cause of death: Gunshot wounds</p>
                </section>

                <section className="member">
                    <h3>Paul McCartney</h3>
                    <img height={450} src={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F5d%2F30%2Fb6%2F5d30b608b2f6516ef8e6449412fea408.jpg&f=1&nofb=1&ipt=b4e3239dc2bc75f2849ec507442f512e0277afe86e5c5e62b5016ccf758e5b85"}/>
                    <p>Bass guitar, Vocals, Songwriter</p>
                    <p>18. June 1942 (Liverpool) - (age 83)</p>
                </section>

                <section className="member">
                    <h3>George Harrison</h3>
                    <img width={300} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/George-wa-portrait.jpg/500px-George-wa-portrait.jpg"}/>
                    <p>Lead guitar, Vocals, Songwriter</p>
                    <p>25. February 1943(Liverpool) - 29. November 2001</p>
                    <p>Cause of death: Lung cancer that spread to his brain</p>
                </section>

                <section className="member">
                    <h3>Ringo Starr</h3>
                    <img width={300} src={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.gq-magazine.co.uk%2Fphotos%2F5f03235a87e549a3c5063acb%2Fmaster%2Fw_1600%252Cc_limit%2F20200706-ringo-08.jpg&f=1&nofb=1&ipt=017360712efa9efe9b07d2e09f386ef36bd3862db3976bc1689b9796af49f813"}/>
                    <p>Drums, vocals</p>
                    <p>7. July 1940 (Liverpool) - (age 85)</p>
                </section>
            </article>
        </div>
    )
}