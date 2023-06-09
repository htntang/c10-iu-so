export default function Team(){
    return(
        <main>
        <div className="team">
        <h1>Meet The Team</h1>
        {/* Dolapo & Dawn */}
        <div className="team-exec">
            <div className="row">
                {/* Dolapo */}
                <div className="column">
                    <h3>Dolapo</h3>
                    <h4><i>CEO & Founder</i></h4>
                </div>

                {/* Dawn */}
                <div className="column">
                    <h3>Dawn</h3>
                    <h4><i>Content Writer & Market Research</i></h4>
                </div>
            </div>

        {/* InceptionU Team */}
            <div className="team-tech">
                <h2><i>The InceptionU Team</i></h2>
                <div className="row">
                    {/* Elvin Limpin */}
                    <div className="column">
                        <h3>Elvin Limpin</h3>
                        <h4><i>Scrum Master</i></h4>
                    </div>

                    {/* Nicolas Vargas */}
                    <div className="column">
                        <h3>Nicolas Vargas</h3>
                        <h4><i>Insert Title Here</i></h4>
                    </div>

                    {/* Renata Vieira */}
                    <div className="column">
                        <h3>Renata Vieira</h3>
                        <h4><i>Insert Title Here</i></h4>
                        <p>
                            A highly adaptable profession with 18 years of experience in the tech industry, 
                            Renata is now embarking on an exciting career transition as a full stack developer, 
                            leveraging a strong academic foundation in Computer Science and Network Management. 
                            Committed to continuous learning and growth, Renata has a passion for crafting seamless 
                            user experiences and contributing to new trends in the industry.
                            <br />
                            <br />
                            When she's not coding away, Renata enjoys spending time with her husband and two beautiful children.
                        </p>
                    </div>

                    {/* Han Tang */}
                    <div className="column">
                        <h3>Han Tang</h3>
                        <h4><i>Insert Title Here</i></h4>
                        <p>A full-stack dveloper with an eye for detail and design, UX/UI; 
                            and a front-end focus, Han Tang combines technical expertise with 
                            a deep understanding of user experience and inclusive design principles. 
                            She believes that technology should be accessible to all, and that it is 
                            our responsibility as developers to continuously seek innovative ways to 
                            create digital solutions that empower and serve diverse communities; 
                            promote accessibility; and champion social causes.
                            <br />
                            <br />
                            With a passion for technology, storytelling, and understanding human behaviour, 
                            Han seeks to leverages her skills to drive meaningful change and involve herself in 
                            cool projects like <b><i>StriveOpp</i></b>.
                            <br />
                            <br />
                            In her spare time, Han enjoys throwing around some weights at the gym 
                            and making Excel spreadsheets for fun.
                            <br />
                            <br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </main>
    )
}